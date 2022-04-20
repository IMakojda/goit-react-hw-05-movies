import { useState, useEffect, Suspense } from 'react';
import { ButtonSearch, InputSearch, FormSearch, GoBackBtn } from './MoviesPage.styled';
import { IoSearch } from "react-icons/io5"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { fetchSearchMovie } from '../../service/api-service';
import { ListMovie, GlobalLink } from '../HomePage/HomePage.styled';
import { Outlet, useSearchParams, useNavigate } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";

export default function MoviesPage() {
  const [value, setValue] = useState('')
  const [movieList, setMovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSearchMovieChange = e => {
    setValue(e.currentTarget.value.toLowerCase())
  }
  const searQuery = searchParams.get('query')

  const handleSubmit = e => {
    e.preventDefault()
    if (value.trim() === '') {
      Notify.warning("No name to search.")
      return
    }

    setSearchParams({ query: value })
    setValue('');
  }

  useEffect(() => {
    if (!searQuery) {
      return;
    }

    async function fetchMovie() {
      try {
        const movies = await fetchSearchMovie(searQuery);
        setMovieList(movies);
        if (movies.length === 0) {
          return Notify.failure(`Enter the correct movie name.`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [searQuery]);

  return (
    <>
      <GoBackBtn onClick={() => navigate(-1)}><GoChevronLeft />Go back</GoBackBtn>

      {<FormSearch className="searchForm" onSubmit={handleSubmit}>
        <InputSearch
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={value}
          onChange={handleSearchMovieChange}
          type="text"
        />

        <ButtonSearch type="submit" >
          <IoSearch fill='white' size="20px" />
        </ButtonSearch>
      </FormSearch>}

      {movieList && (
        <ListMovie>
          {movieList.map(movie => (
            <li key={movie.id}>
              <GlobalLink to={`${movie.id}`}>{movie.title || movie.original_title}</GlobalLink>
            </li>
          ))}
        </ListMovie>)}

      <Suspense fallback={<div>LOADING ...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
};
