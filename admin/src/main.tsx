import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppRouter from "@routes/AppRouter";
import "./index.css";
import { ToastContainer } from "react-toastify";
import { SearchProvider } from "./context/SearchContext";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <AppRouter />
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          closeOnClick={true}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </SearchProvider>
    </QueryClientProvider>
  </StrictMode>
);
