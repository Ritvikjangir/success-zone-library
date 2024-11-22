import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="Nya-RZqVryB9ZxiL0jkJDv8zVT4gs2yBnf0r6kk49pY"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body className="antialiased light">
        <Main />
        <NextScript />

        {/* Google Analytics Script */}
        <Script
          strategy="afterInteractive" // Makes the script load after the page is interactive
          src="https://www.googletagmanager.com/gtag/js?id=G-S340308KX6"
          async
        />
        <Script
          id="gtag"
          strategy="afterInteractive" // Ensure that the inline script runs after the page is interactive
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-S340308KX6');
            `,
          }}
        />
      </body>
    </Html>
  );
}
