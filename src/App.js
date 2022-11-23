import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Projects</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          width: "100vw",
          justifyContent: "center",
          backgroundColor: "#8eaebf"
        }}
      >
        {/* CARD */}
        <div
          style={{
            border: "2px solid black",
            padding: 5,
            borderRadius: "10px",
            margin: 10,
            backgroundColor: "#fff"
          }}
        >
          <img
            alt="project_img"
            style={{ width: 200, hieght: 160 }}
            src="https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
          />
          <h3>My TV Propject</h3>
          <p>HTML, CSS, JavaScript</p>
          <p>This is my first JS project.</p>
        </div>
      </div>
    </div>
  );
}
