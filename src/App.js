import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import AppProvider from "./context/ContextProvider";
import "./styles/styles.css";
function App() {
  return (
    <div>
      <Header/>
        <Main/>
<AppProvider>

      <Header/>
        <Main/>
</AppProvider>
    </div>
  );
}

export default App;
