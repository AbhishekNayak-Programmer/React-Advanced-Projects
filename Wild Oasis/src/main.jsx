import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ui/ErrorFallback.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    onReset={() => window.location.replace("/")}
    FallbackComponent={ErrorFallback}
  >
    <App />
  </ErrorBoundary>
);
