import { Link } from "react-router";

const GlobalErrorFallback = () => {
  const reload = () => window.location.reload();

  return (
    <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <h1 className="text-5xl font-bold text-primary">Oops</h1>

        <p className="mt-4 text-neutral/70">
          Something went wrong on our side. Try refreshing the page or head back
          home.
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <button onClick={reload} className="btn btn-primary w-full">
            Refresh page
          </button>

          <Link to="/" className="btn btn-ghost w-full">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GlobalErrorFallback;
