import './App.css';

function App() {
  return (
    <div 
      className="container"
      style={{
        backgroundImage: "url('image/logo-java.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        color: "white",
        padding: "20px"
      }}
    >
      <h1>Hej! Jag heter Moise</h1>
      <p>Välkommen till mitt portfolio byggt i <strong>React</strong>.</p>

      <section>
        <h2>Om mig</h2>
        <p>
          Jag heter Moise och studerar <strong>Java</strong> på STI. 
          Jag har ett stort intresse för programmering, särskilt backend-utveckling,
          men jag lär mig också frontend och molnteknik. 
          Just nu fokuserar jag mycket på Java, REST API:er och Azure.
        </p>
      </section>

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

      <section>
        <h2>Skills</h2>
        <p>Java, React, JavaScript, HTML, CSS, Node.js, Docker, Azure</p>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          GitHub: <a href="https://github.com/mpkhonde" target="_blank" rel="noreferrer">github.com/mpkhonde</a><br />
          LinkedIn: <a href="https://linkedin.com/in/dittkonto" target="_blank" rel="noreferrer">linkedin.com/in/dittkonto</a>
        </p>
      </section>
    </div>
  );
}

export default App;
