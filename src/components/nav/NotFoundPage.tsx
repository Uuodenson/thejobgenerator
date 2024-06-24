import { useRouteError } from "react-router-dom";

function NotFoundPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  return (
    <div>
      <h1>Page Not Found</h1>
      <p>
        <i>{error.statusText || error.message || "Unknown error"}</i>
      </p>
    </div>
  );
}

export default NotFoundPage;
