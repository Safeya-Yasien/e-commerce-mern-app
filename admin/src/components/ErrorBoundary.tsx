  import { isRouteErrorResponse, useRouteError } from "react-router";

  const ErrorBoundary = () => {
    const error = useRouteError();
    let errorMessage: string = "An unexpected error occurred.";

    if (isRouteErrorResponse(error)) {
      errorMessage = `Error ${error.status}: ${error.statusText}`;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h1>Oops! Something went terribly wrong.</h1>
        <p>Error Message: {errorMessage}</p>
        <p>Please try reloading the page.</p>
      </div>
    );
  };
  export default ErrorBoundary;
