import { useRouteError } from "react-router-dom";

useRouteError;
const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>OOps</h1>
      <h1>Galat Pate pe aa gaye bhai tm</h1>
      <h2>{err.status + ":" + err.statusText}</h2>
    </div>
  );
};
export default Error;
