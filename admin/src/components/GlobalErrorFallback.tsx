interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

const GlobalErrorFallback = ({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white px-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg text-center max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Oops! Something went wrong</h2>
        <p className="text-gray-300 mb-6">
          An unexpected error occurred. You can try refreshing the page or click
          the button below.
        </p>

        <pre className="bg-gray-700 text-gray-200 p-4 rounded mb-6 overflow-auto text-sm">
          {error.message}
        </pre>

        <button
          onClick={resetErrorBoundary}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};
export default GlobalErrorFallback;
