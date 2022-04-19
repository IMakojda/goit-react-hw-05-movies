import { useFetchHomePage } from '../../hooks/userHookHomePage';
import { GlobalLink, ListMovie, Title } from './HomePage.styled';

export default function HomePage() {

  const movies = useFetchHomePage();

  return (
    <>
      <Title>Trending today</Title>
      {movies && (
        <ListMovie>
          {movies.map(movie => (
            <li key={movie.id}>
              <GlobalLink to={`movie/${movie.id}`}>{movie.title || movie.original_title}</GlobalLink>
            </li>
          ))}
        </ListMovie>
      )}
    </>
  )
};
