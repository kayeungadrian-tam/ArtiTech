import { Button } from "../../components/button/button";

export type ErrorProps = {
error: {
  message: string;
}
};


export const Error500 = ({error} : ErrorProps) => {

  console.table(error);

  return (
    <div
      className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
      role="alert"
    >
      <h2 className="text-lg font-semibold">Ooops, something went wrong :( </h2>
      {error.message}
      <div>

      <Button 
      size="medium"
      label="Refresh"
      onClick={() => window.location.assign(window.location.origin)}    />
      </div>
    </div>
  );
};
