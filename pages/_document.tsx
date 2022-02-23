import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => (
  <Html lang="en">
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@300;400;600;700;800&family=Nanum+Pen+Script&display=swap" rel="stylesheet"></link>
        <meta name="description" content="A single page application build for OneSpark to demonstrate my skills."/>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document