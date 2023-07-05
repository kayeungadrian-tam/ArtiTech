import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { Spinner } from "../components/spinner/spinner";
import { Error500 } from "../views/error/500";

import { ThemeProvider } from "next-themes";

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
          <ThemeProvider
            attribute="class"
            enableSystem={false}
            defaultTheme="dark"
          >
            <Router>{children}</Router>
          </ThemeProvider>
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
