import Head from 'next/head';
import Image from 'next/image';

export default function Home() 
{
    return (
      <>
        <Head>
          <title>Beqa Tvildiani</title>
          <meta name="description" content="Beqa Tvildiani's personal website" />
          <link rel="icon" href="/favicon/favicon.ico" />
          <link rel="stylesheet" href="assets/css/main.css" />
        </Head>
  
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
                <a href="portfolio" className="shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">About Me</a>
              </div>
            </div>
          </article>
      </>
    );
  }
  