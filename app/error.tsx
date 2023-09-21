"use client";

// client facing . because of reset().
// this is global error file, local level error file like users/error.tsx can be also there to
// catch all errors for the folders of users folder
// cannot catch errors that happens in root layout(app/layout.tsx). global-error.tsx is file
// used to catch error from root layout.tsx

interface Props {
  error: Error; //nextjs will automatically pass Error to this component
  reset: () => void; //nextjs will automatically pass reset function to this component
}
const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>An Unexpected error has occurred</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </>
  );
};
export default ErrorPage;
