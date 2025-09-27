import './App.css';

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>Moise</h1>
        <p className="tagline">Backend Developer | Java | Azure Enthusiast</p>
      </header>

      <p className="intro">Välkommen till mitt portfolio byggt i <strong>React</strong>.</p>

      {/* Om mig */}
      <section>
        <h2>Om mig</h2>
        <p>
          Jag heter Moise och studerar <strong>Java</strong> på STI. 
          Mitt fokus ligger främst på <strong>backendutveckling</strong>, där jag gillar att arbeta med logik,
          databaser och API:er. Jag har erfarenhet av Java, Node.js, REST API:er och databaser, 
          men lär mig även frontend-tekniker som React för att förstå hela kedjan och kunna bygga fullstack-lösningar.
        </p>
        <p>
          Jag är intresserad av molntjänster och hur <strong>Azure</strong> kan användas för att skapa
          skalbara och robusta applikationer. Mitt mål är att växa inom <strong>backend, DevOps och molnteknik</strong>.
        </p>
      </section>

      {/* Projekt */}
      <section>
        <h2>Projekt</h2>
        <div className="projects">
          <div className="card">
            <h3>Todo Service</h3>
            <p>Ett projekt för att hantera uppgifter, där jag tränade på REST API och backend-logik.</p>
            <a href="https://github.com/mpkhonde/todo-service" target="_blank" rel="noreferrer">Se på GitHub</a>
          </div>

          <div className="card">
            <h3>Projektarbete-B</h3>
            <p>En skoluppgift där jag arbetade med programmering i Java.</p>
            <a href="https://github.com/mpkhonde/projektarbete-b" target="_blank" rel="noreferrer">Se på GitHub</a>
          </div>

          <div className="card">
            <h3>Webbutveckling</h3>
            <p>Frontend-projekt där jag tränade på CSS och strukturering av webbsidor.</p>
            <a href="https://github.com/mpkhonde/Webbutveckling" target="_blank" rel="noreferrer">Se på GitHub</a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2>Skills</h2>
        <ul>
          <li><strong>Backend:</strong> Java, Node.js, REST API:er, SQL/NoSQL-databaser</li>
          <li><strong>DevOps & Moln:</strong> Docker, Azure, GitHub Actions, Linux</li>
          <li><strong>Frontend (grunder):</strong> React, HTML, CSS, JavaScript</li>
        </ul>
      </section>

      {/* Kontakt */}
      <section>
        <h2>Kontakt</h2>
        <p>
          GitHub: <a href="https://github.com/mpkhonde" target="_blank" rel="noreferrer">github.com/mpkhonde</a><br />
          LinkedIn: <a href="https://linkedin.com/in/dittkonto" target="_blank" rel="noreferrer">linkedin.com/in/dittkonto</a>
        </p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Moise – Portfolio Project</p>
        <div className="socials">
          <a href="https://github.com/mpkhonde" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/dittkonto" target="_blank" rel="noreferrer">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
