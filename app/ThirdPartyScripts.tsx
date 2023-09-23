import Script from "next/script"; // not script tag provided by provider

const GoogleAnalyticsScripts = () => {
  return (
    <>
      <Script async></Script>
      <Script>{`window.datalayer=window.datalayer || [];`}</Script>
    </>
  );
};
export default GoogleAnalyticsScripts;
