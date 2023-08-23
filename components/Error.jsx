import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.log(error); //This will log the eeror occured during the fetch api call
  return <h1>There was an error</h1>;
}
