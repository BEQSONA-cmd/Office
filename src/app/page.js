import Image from 'next/image';

export default function Home() 
{
    return (
      <>
          <article id="work" className="wrapper style3 py-16 bg-gray-900">
            <div className="container mx-auto flex flex-wrap">
              {/* Image on the left */}
              <div className="w-full md:w-1/2 p-4">
                <Image
                  className="large-image"
                  src="/images/me.jpg"
                  alt="Beqa Tvildiani"
                  width={400}
                  height={400}
                  style={{ borderRadius: '20%' }}
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
  