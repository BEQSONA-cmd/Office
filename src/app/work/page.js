
export default function work() {
    return (

      <article id="work" className="wrapper style3 py-16 bg-gray-900">
      <div className="container mx-auto">
        <header>
          <h2 className="text-3xl font-semibold">Here's some stuff I made recently.</h2>
          <p className="text-lg">All of these are my side projects.</p>
        </header>
        <div className="flex flex-wrap">

          {/* Project 1 */}
          <div className="w-full md:w-1/3 p-4">
            <article className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
              <a href="https://github.com/BEQSONA-cmd/Cabinette" className="image featured" target="_blank">
                <img src="images/01.png" alt="Cabinette" />
              </a>
              <h3><a href="https://github.com/BEQSONA-cmd/Cabinette" target="_blank">Cabinette</a></h3>
              <p>Tests for 42 projects. Languages: <strong>C, C++, Python, Shell, Makefile</strong></p>
            </article>
          </div>
          
          {/* Project 2 */}
          <div className="w-full md:w-1/3 p-4">
            <article className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
              <a href="https://github.com/BEQSONA-cmd/Reallyshell" className="image featured" target="_blank">
                <img src="images/02.png" alt="Reallyshell" />
              </a>
              <h3><a href="https://github.com/BEQSONA-cmd/Reallyshell" target="_blank">ReallyShell</a></h3>
              <p>Program for connection between two terminals remotely. Languages: <strong>Shell, C++</strong></p>
            </article>
          </div>

          {/* Project 3 */}
          <div className="w-full md:w-1/3 p-4">
            <article className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
              <a href="https://github.com/BEQSONA-cmd/ChxikviGPT3.5" className="image featured" target="_blank">
                <img src="images/03.png" alt="ChxikviGPT3.5" />
              </a>
              <h3><a href="https://github.com/BEQSONA-cmd/ChxikviGPT3.5" target="_blank">ChxikviGPT3.5</a></h3>
              <p>Web app for private chat rooms and AI companion. Languages: <strong>Python, JavaScript, CSS, HTML</strong></p>
            </article>
          </div>

          {/* Project 4 */}
          <div className="w-full md:w-1/3 p-4">
            <article className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
              <a href="https://github.com/BEQSONA-cmd/Cpp_Tricks" className="image featured" target="_blank">
                <img src="images/04.png" alt="Cpp Tricks" />
              </a>
              <h3><a href="https://github.com/BEQSONA-cmd/Cpp_Tricks" target="_blank">Cpp Tricks</a></h3>
              <p>Explanation of hard concepts in C++. Languages: <strong>C++</strong></p>
            </article>
          </div>

          {/* Project 5 */}
          <div className="w-full md:w-1/3 p-4">
            <article className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
              <a href="https://github.com/BEQSONA-cmd/Minishell_Tester" className="image featured" target="_blank">
                <img src="images/05.png" alt="Minishell Tester" />
              </a>
              <h3><a href="https://github.com/BEQSONA-cmd/Minishell_Tester" target="_blank">Minishell Tester</a></h3>
              <p>A tool to simplify testing minishell. Languages: <strong>Shell, Python, C++</strong></p>
            </article>
          </div>

          {/* Project 6 */}
          <div className="w-full md:w-1/3 p-4">
            <article className="box style2 bg-gray-800 p-6 rounded-lg shadow-md">
              <a href="https://github.com/BEQSONA-cmd/Debug_Leaks" className="image featured" target="_blank">
                <img src="images/06.png" alt="Debug Leaks" />
              </a>
              <h3><a href="https://github.com/BEQSONA-cmd/Debug_Leaks" target="_blank">Debug Leaks</a></h3>
              <p>A tool for simplifying leak detection in projects. Languages: <strong>Python, C++</strong></p>
            </article>
          </div>
          
        </div>
        <footer className="text-center mt-8">
          <p>Have any questions? Feel free to ask! I'm open to collaboration. Let's innovate together! 💡</p>
          <a href="#contact" className="shadow__btn large scrolly bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">Get in touch with me</a>
        </footer>
      </div>
    </article>
    );
  }
  