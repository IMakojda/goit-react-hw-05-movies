import { useCastHook } from '../../hooks/useCastHook';
import { ListActors, LiItemActor, ImgActors, SubTitle } from './Cast.styled';

export default function Cast() {
 const cast = useCastHook();
  return (
    <>
      {cast && cast.length > 0 ? (
        <ListActors>
          {cast.map(({ id, profile_path, original_name, name, character }) =>
            <LiItemActor key={id}>
              <article>
                <ImgActors src={`https://image.tmdb.org/t/p/w500/${profile_path}`} alt={original_name} />
                <SubTitle>{name}</SubTitle>
                <SubTitle>{character}</SubTitle>
              </article>
            </LiItemActor>
          )}
        </ListActors>
      ) : (
        <p>Not reviews for movie.</p>
      )}
    </>
  )
};
