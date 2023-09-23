import Script from "next/script"; // not script tag provided by provider

const GoogleAnalyticsScripts = () => {
  return (
    <>
      <Script async src="http://googletagmanager.com/gtag/...."></Script>
      <Script>
        {`windoe.datalayer=window.datalayer || [];
    gtag('js', new Data())
    `}
      </Script>
    </>
  );
};
export default GoogleAnalyticsScripts;
