export default function work() {
    return (
          <article id="work" className="wrapper style2 py-16 bg-gray-900">
            <div className="container mx-auto">
              <header>
                <h2 className="text-3xl font-semibold">Here's small info about me</h2>
                <p className="text-lg">General information and skills.</p>
              </header>
              <div className="flex flex-wrap justify-center">
                <div className="w-full md:w-1/3 p-4">
                  <section className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
                    <span className="icon featured fa-comments"></span>
                    <h3 className="text-2xl font-semibold">Social skills</h3>
                    <p>I can speak four different languages: <strong>English, Polish, Russian, and Georgian.</strong></p>
                  </section>
                </div>
                <div className="w-full md:w-1/3 p-4">
                  <section className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
                    <span className="icon featured fa-solid fa-user"></span>
                    <h3 className="text-2xl font-semibold">General info</h3>
                    <p>About me: I am <strong>23</strong> years old guy from <strong>Georgia</strong>, currently studying at <strong>42 Wolfsburg</strong> in Germany.</p>
                  </section>
                </div>
                <div className="w-full md:w-1/3 p-4">
                  <section className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
                    <span className="icon featured fa-star"></span>
                    <h3 className="text-2xl font-semibold">Programming skills</h3>
                    <p>System Programming, Scripting, and Software/Web Development: <strong>Python, Javascript, HTML, CSS, Bash, C, C++.</strong></p>
                  </section>
                </div>
              </div>
            </div>
          </article>
    );
  }
  