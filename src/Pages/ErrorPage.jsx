import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-green-500">{error.status}</h1>
          <p className="text-2xl font-semibold text-gray-800 mt-4">
            Oops! Page {error.statusText}
          </p>
          {error.data && <p className="text-gray-600 mt-2">{error.data}</p>}
          <p className="text-gray-600 mt-2">
            The page you are looking for does not exist or has been moved.
          </p>

          <Link
            to="/"
            className="mt-6 font-bold inline-block px-6 py-3 text-white bg-green-500 rounded-lg shadow hover:bg-green-600 transition"
          >
            Go Back to Home
          </Link>
        </div>
      </div>
    );
  }
};

export default ErrorPage;
