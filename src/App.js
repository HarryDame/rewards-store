import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import "./styles/styles.css";
function App() {
  return (
    <div>
      <Header>
        <Main>
          <h1>Funciona</h1>
        </Main>
      </Header>
    </div>
  );
}

export default App;
