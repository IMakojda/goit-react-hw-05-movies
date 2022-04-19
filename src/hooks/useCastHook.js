import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from '../service/api-service';

export const useCastHook = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    async function fetchCastID() {
      try {
        const actors = await fetchCast(movieId);
        setCast(actors);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCastID();
  }, [movieId]);

  return cast;
}