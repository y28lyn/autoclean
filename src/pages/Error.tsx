import { Link, useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state?.error || { message: "Unknown error" };

  return (
    <div id="error-page" className="flex flex-col items-center justify-center">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.message}</i>
      </p>
      <Link to="/" className="underline">
        Back to home page
      </Link>
    </div>
  );
}
