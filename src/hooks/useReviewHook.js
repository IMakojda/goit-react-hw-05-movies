import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReview } from '../service/api-service';

export const useReview = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    async function fetchCastID() {
      try {
        const rev = await fetchReview(movieId);
        setReviews(rev);
      } catch (error) {
        console.log(error);
      }
    }
    fetchCastID();
  }, [movieId]);

  return reviews;
}