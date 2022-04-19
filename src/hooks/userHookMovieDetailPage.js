import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { fetchMovieId } from "../service/api-service";

export const useFetchMovieDetailPage = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    async function fetchMovies() {
      try {
        const movie = await fetchMovieId(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
      }
    }
    fetchMovies();
  }, [movieId]);

  return movie;
}