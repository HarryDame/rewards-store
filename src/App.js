import React from "react";
import Header from "./components/Header/Header";
import Main from "./components/main/Main";
import UserContextProvider from "./context/UserContext.jsx";
import ProductContextProvider from "./context/ProductContext.jsx";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <ProductContextProvider>
        <UserContextProvider>
          <Header/>
          <Main />
        </UserContextProvider>
      </ProductContextProvider>
    </div>
  );
}

export default App;
