import Head from 'next/head';
import Image from 'next/image';


export default function Home() 
{
    return (
      <>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/favicon/site.webmanifest" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Beqa Tvildiani Portfolio</title>
        </Head>
  
        <body className="is-preload">
          {/* Nav */}
          <nav id="nav" className="bg-gray-800 p-4">
            <ul className="container mx-auto flex items-center">
              <li><a href="" className="text-white">Home</a></li>
              <li><a href="work" className="ml-4 text-white">Work</a></li>
              <li><a href="portfolio" className="ml-4 text-white">Portfolio</a></li>
              <li><a href="contact" className="ml-4 text-white">Contact</a></li>
              <li className="ml-auto">
                <button id="star-button" className="text-white bg-blue-600 px-4 py-2 rounded-lg">
                  <i className="icon fa-star"></i> Stars: <span id="star-count">0</span>
                </button>
              </li>
            </ul>
          </nav>
  
          {/* Home */}
          <article id="top" className="wrapper style1 py-16">
            <div className="container mx-auto flex flex-wrap">
              {/* Image on the left */}
              <div className="w-full md:w-1/2 p-4">
                <Image
                  className="large-image"
                  src="/images/me.jpg"
                  alt="Beqa Tvildiani"
                  width={400}
                  height={400}
                />
              </div>
  
              {/* Text on the right */}
              <div className="w-full md:w-1/2 p-4">
                <header>
                  <h1 className="text-4xl font-bold">
                    Hi. I'm <strong>Beqa Tvildiani</strong>.
                  </h1>
                </header>
                <p className="text-lg font-medium">
                  <strong>I am a Software Engineer proficient 👨‍💻.</strong> Passionate about crafting efficient code, building dynamic web applications, and automating tasks.
                </p>
                <a href="#work" className="shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">About Me</a>
              </div>
            </div>
          </article>
          <footer className="py-8 bg-gray-900 text-white">
            <div className="container mx-auto text-center">
              <p>&copy; chxikvia.tech | Design by <a href="https://github.com/BEQSONA-cmd" className="text-blue-400">BEQSONA-cmd</a></p>
            </div>
          </footer>
        </body>
      </>
    );
  }
  