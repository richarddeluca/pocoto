import Document, {Html, NextScript, Head, Main} from 'next/document'

import Link from 'next/link'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet"/>
          <link rel="icon" type="image/png" href="https://www.flaticon.com/free-icons/witch" />
          <meta name="description" content="Mundos, narrativas e personagens dos jogos RPG que participei na UnB" />
        </Head>
        <body>
          <Main></Main>
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument