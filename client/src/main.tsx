import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "@/routes/AppRouter";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "react-error-boundary";
import GlobalErrorFallback from "./components/GlobalErrorFallback";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary FallbackComponent={GlobalErrorFallback}>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <AppRouter />
    </QueryClientProvider>
  </ErrorBoundary>
);
