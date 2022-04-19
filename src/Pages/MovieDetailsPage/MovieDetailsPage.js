import { Outlet } from "react-router-dom"
import { MovieDetailsCard } from "../../component/MovieDetailsCard/MovieDetailsCard";
import { SubInfoDiv, SubLink } from "./MovieDetailsPage.styled";
import { CardSubTitle } from "../../component/MovieDetailsCard/MovieDetailsCard.styled";
import GoBackBtn from "../../component/GobackBtn/GoBackBtn";
import { useFetchMovieDetailPage } from "../../hooks/userHookMovieDetailPage";



export default function MovieDetailsPage() {

  const movie = useFetchMovieDetailPage();

  return (
    <>
      {movie && (
        <main>
          <GoBackBtn />
          <MovieDetailsCard item={movie} />

          <SubInfoDiv>
            <CardSubTitle>Additionla information</CardSubTitle>
            <SubLink to="cast">Cast</SubLink> <br />
            <SubLink to="reviews">Reviews</SubLink>
          </SubInfoDiv>

          <Outlet />
        </main>
      )}

    </>
  )
};
