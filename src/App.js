import './App.css';

function App() {
  return (
    <div className="container">
      {/* === Hero Section === */}
      <header className="hero">
        <h1>Moise</h1>
        <h3>Backend Developer | Java | Azure Enthusiast</h3>
        <p>Välkommen till mitt portfolio byggt i <strong>React</strong>.</p>
      </header>

      {/* === Om mig === */}
      <section>
        <h2>Om mig</h2>
        <p>
          Jag heter <strong>Moise</strong> och studerar <strong>Java</strong> på STI.
          Mitt fokus ligger främst på <strong>backendutveckling</strong>, där jag gillar att arbeta med logik,
          databaser och API:er. Jag har erfarenhet av Java, Node.js, REST API:er och databaser, men lär mig
          även frontend-tekniker som React för att förstå helheten och kunna bygga fullstack-lösningar.
        </p>
        <p>
          Jag är intresserad av molntjänster och hur <strong>Azure</strong> kan användas för att skapa
          skalbara och robusta applikationer. Mitt mål är att växa inom <strong>backend</strong>, 
          <strong> DevOps</strong> och <strong>molnteknik</strong>.
        </p>
      </section>

      {/* === Projekt === */}
      <section>
        <h2>Projekt</h2>
        <div className="projects">
          <div className="card">
            <h3>Todo Service</h3>
            <p>Ett projekt för att hantera uppgifter, där jag tränade på REST API och backend-logik.</p>
            <a href="https://github.com/mpkhonde/todo-service" target="_blank" rel="noreferrer">
              Se på GitHub
            </a>
          </div>

          <div className="card">
            <h3>Projektarbete-B</h3>
            <p>En skoluppgift där jag arbetade med programmering i Java.</p>
            <a href="https://github.com/mpkhonde/projektarbete-b" target="_blank" rel="noreferrer">
              Se på GitHub
            </a>
          </div>

          <div className="card">
            <h3>Webbutveckling</h3>
            <p>Frontend-projekt där jag tränade på CSS och strukturering av webbsidor.</p>
            <a href="https://github.com/mpkhonde/Webbutveckling" target="_blank" rel="noreferrer">
              Se på GitHub
            </a>
          </div>
        </div>
      </section>

      {/* === Skills === */}
      <section>
        <h2>Skills</h2>
        <div className="skills-list">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Node.js</span>
          <span>REST API</span>
          <span>SQL & NoSQL</span>
          <span>React</span>
          <span>Docker</span>
          <span>Azure</span>
          <span>GitHub Actions</span>
        </div>
      </section>

      {/* === Kontakt === */}
      <section>
        <h2>Kontakt</h2>
        <p>
          GitHub:{" "}
          <a href="https://github.com/mpkhonde" target="_blank" rel="noreferrer">
            github.com/mpkhonde
          </a>
          <br />
          LinkedIn:{" "}
          <a href="https://linkedin.com/in/dittkonto" target="_blank" rel="noreferrer">
            linkedin.com/in/dittkonto
          </a>
        </p>
      </section>

      {/* === Footer === */}
      <footer>
        <p>© {new Date().getFullYear()} Moise – Portfolio byggt med React & Azure</p>
      </footer>
    </div>
  );
}

export default App;
