import { type AppType } from "next/dist/shared/lib/utils";
import { Poppins } from 'next/font/google'

import "~/styles/globals.css";

const poppins = Poppins({
  weight: ['300', '600', '800'], // if single weight, otherwise you use array like [400, 500, 700],
  style: 'normal',// if single style, otherwise you use array like ['normal', 'italic']
  subsets: ['latin'],
  variable: '--font-poppins'
})

const MyApp: AppType = ({ Component, pageProps }) => {

  return <main className={`${poppins.variable}`}>
    <Component {...pageProps} />
  </main>

};

export default MyApp;
