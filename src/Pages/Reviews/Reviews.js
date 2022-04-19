import { useReview } from '../../hooks/useReviewHook';
import { SubTitleName, ReviewDiv } from './Review.styled';


export default function Reviews() {
  const reviews = useReview();
  return (
    <>
      {reviews && reviews.length > 0 ? (
        <ReviewDiv>
          {reviews.map(({ id, content, author }) => (
            <div key={id}>
              <SubTitleName>{author}:</SubTitleName>
              <p>"{content}"</p>
            </div>
          ))}
        </ReviewDiv>

      ) : (
        <p>NO reviews for this movie.</p>
      )}
    </>
  )
};