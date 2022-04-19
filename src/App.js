import { Route, Routes } from "react-router-dom";
import Layout from "./component/Layout/Layout";
import { createAsyncPages } from "./helpers/AsyncPages";
import { NotFound } from "Pages/NoFound/NoFound";

const MoviesPage = createAsyncPages('MoviesPage');
const HomePage = createAsyncPages('HomePage');
const MovieDetailsPage = createAsyncPages('MovieDetailsPage');
const Cast = createAsyncPages('Cast');
const Reviews = createAsyncPages('Reviews');

function App() {
  return (

    <Routes basename='/goit-react-hw-05-movies/'>

      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />

        <Route path="movie" element={<MoviesPage />} />

        <Route path="movie/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  );
}

export default App;
