import Navbar from "components/Navbar";
import Head from "next/head";
import Link from "next/link";
import useDarkMode from "~/utils/useDarkMode";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();
  console.log(colorTheme)

  if (!setTheme) {
    return null
  }
  return (
    <div className={`h-screen w-screen ${colorTheme === 'dark' ? "bg-very-dark-blue-bg" : "bg-white"} `}>
      <Head>
        <title>Country Info App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col">
        <Navbar colorTheme={colorTheme} setTheme={setTheme} />

        <div className="content mt-9 w-full flex flex-col items-center">
          <div className="menu-option-container w-4/5">
            <h1>tes</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
