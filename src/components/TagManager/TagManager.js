import React from "react";
import Head, { NoScript } from "next/head";

const TagManager = () => {
  return (
    <>
      <Head>
        <script
          id="googletag"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-MXPKVXV');`,
          }}
        ></script>
      </Head>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MXPKVXV"
height="0" width="0" style="display:none;visibility:hidden"></iframe`,
        }}
      ></noscript>
    </>
  );
};

export default TagManager;
