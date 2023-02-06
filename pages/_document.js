import { Html, Head, Main, NextScript } from 'next/document'
import AddNewGameFormModal from '../components/AddNewGameFormModal/AddNewGameFormModal.js'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link href='https://fonts.googleapis.com/css2?family=Quicksand&display=swap' rel='stylesheet' />
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@600&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>

<AddNewGameFormModal/>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

{/* <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> */}
