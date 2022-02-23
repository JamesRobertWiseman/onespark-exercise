import { Html, Head, Main, NextScript } from 'next/document'

const Document: React.FC = () => (
  <Html>
    <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@300;400;600;700;800&family=Nanum+Pen+Script&display=swap" rel="stylesheet"></link>
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document