import { Outlet, useNavigate } from "react-router-dom"
import { MovieDetailsCard } from "../../component/MovieDetailsCard/MovieDetailsCard";
import { SubInfoDiv, SubLink, GoBackBtn } from "./MovieDetailsPage.styled";
import { CardSubTitle } from "../../component/MovieDetailsCard/MovieDetailsCard.styled";
import { GoChevronLeft } from "react-icons/go";
import { useFetchMovieDetailPage } from "../../hooks/userHookMovieDetailPage";

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const movie = useFetchMovieDetailPage();

  return (
    <>
      {movie && (
        <main>

          <GoBackBtn onClick={() => navigate(-1)} ><GoChevronLeft />Go back</GoBackBtn>
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
