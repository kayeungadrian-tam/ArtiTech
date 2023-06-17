import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Spinner } from "../components/spinner/spinner";
import { Error500 } from "../views/error/500";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="spinner-overlay">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={Error500}>
        <HelmetProvider>
          {/* <QueryClientProvider client={queryClient}> */}
          {/* {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />} */}
          {/* <Notifications /> */}
          {/* <AuthProvider> */}
          <Router>{children}</Router>
          {/* </AuthProvider> */}
          {/* </QueryClientProvider> */}
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
