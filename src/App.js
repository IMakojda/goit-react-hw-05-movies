import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
// import MoviesPage from "./Pages/MoviesPage/MoviesPage";
// import HomePageView from "./Pages/HomePage/HomePage";
// import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
// import Cast from "./Pages/Cast/Cast";
// import Reviews from "./Pages/Reviews/Review";
import { createAsyncPages } from "./helpers/AsyncPages";


const MoviesPage = createAsyncPages('MoviesPage');
const HomePage = createAsyncPages('HomePage');
const MovieDetailsPage = createAsyncPages('MovieDetailsPage');
const Cast = createAsyncPages('Cast');
const Reviews = createAsyncPages('Reviews');

function App() {
  return (

    <Routes>

      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />

        <Route path="movie" element={<MoviesPage />} />

        <Route path="movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

      </Route>

    </Routes>


  );
}

export default App;
