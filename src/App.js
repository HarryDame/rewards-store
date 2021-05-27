import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import UserContext from "./context/UserContext.jsx";
import "./styles/styles.css";
function App() {
  return (
    <div>
<UserContext>
      <Header/>
        <Main/>
</UserContext>
      {/* <Header/>
        <Main/> */}
    </div>
  );
}

export default App;
