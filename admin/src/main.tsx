import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import AppRouter from "@routes/AppRouter";

import "./index.css";
import { ToastContainer } from "react-toastify";
import GlobalErrorFallback from "./components/GlobalErrorFallback";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        closeOnClick={true}
      />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ErrorBoundary>
);
