import { useState, useEffect } from 'react'
import { fetchApi } from "../service/api-service";

export const useFetchHomePage = () => {
  const [movies, setMovies] = useState(null)

  useEffect(() => {
    async function fetch() {
      try {
        const home = await fetchApi();
        setMovies(home);
      } catch (error) {
        console.log(error);
      }
    }
    fetch();
  }, []);

  return movies;
}