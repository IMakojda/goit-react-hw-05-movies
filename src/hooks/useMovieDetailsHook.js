import { fetchSearchMovie } from '../service/api-service';
import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const useMoviePage = value => {
  // const [value, setValue] = useState('')
  const [searchMovie, setSearchMovie] = useState('');
  const [movieList, setMovieList] = useState(null);

  setSearchMovie(value);

  useEffect(() => {
    if (!searchMovie) {
      return;
    }

    async function fetchMovie() {
      try {
        const movies = await fetchSearchMovie(searchMovie);
        setMovieList(movies);
        if (movies.length === 0) {
          return Notify.failure(`Enter the correct movie name.`);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovie();
  }, [searchMovie]);

  return movieList;
}