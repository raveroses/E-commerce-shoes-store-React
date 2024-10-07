import { useState } from "react";
import "./index.css";
import Header from "./Components/Header";
import ImageDisplay from "./Components/ImageDisplay";
function App() {
  return (
    <div className="content-mother">
      <Header />
      <hr style={{ marginTop: "30px" }} />

      <div className="content-flex">
        <ImageDisplay />
      </div>
    </div>
  );
}

export default App;
