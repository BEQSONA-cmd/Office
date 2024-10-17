export default function Portfolio() {
    return (
      <article id="portfolio" className="wrapper style3">
        <div className="container">
          <header>
            <h2>Here's some stuff I made recently.</h2>
            <p>All of this stuff are my side projects.</p>
          </header>
          <div className="row">
            <div className="col-4 col-6-medium col-12-small">
              <article className="box style2">
                <a href="https://github.com/BEQSONA-cmd/Cabinette" className="image featured" target="_blank">
                  <img src="/images/01.png" alt="Cabinette" />
                </a>
                <h3><a href="https://github.com/BEQSONA-cmd/Cabinette" target="_blank">Cabinette</a></h3>
                <p>Tests for 42 projects. Languages: <strong>C, C++, Python, Shell, Makefile</strong></p>
              </article>
            </div>
            {/* Add more projects here as needed */}
          </div>
        </div>
      </article>
    );
  }
  