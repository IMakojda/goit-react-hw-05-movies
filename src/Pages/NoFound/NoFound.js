import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <h1>
      404 Page not found <br />:(  Go to {' '}
      <Link to="/">Home Page</Link>
    </h1>
  );
};