import React from "react";
import "./App.css";

import Tictactoe from "./components/Tictactoe";
import Delicious from "./components/Delicious";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://cdn.shopify.com/s/files/1/0342/5665/t/31/assets/primitive_skate_rick-and-morty_images_psychedelic_rick.png?2000"
          className="App-logo"
          alt="logo"
        />
        <div className="Home-container">
          <Delicious />
          <Tictactoe />
        </div>
        <img
          src="https://thumbs.gfycat.com/GenuinePowerfulKatydid-size_restricted.gif"
          alt="logo"
        />
      </header>

      <div className="Icon-credit">
        Icons made by
        <a
          href="https://www.freepik.com/?__hstc=57440181.bb8abe424b52b4c87a73e1578363329c.1559612597464.1559612597464.1559612597464.1&__hssc=57440181.2.1559612597464&__hsfp=173683364"
          title="Freepik"
        >
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
        is licensed by
        <a
          href="http://creativecommons.org/licenses/by/3.0/"
          title="Creative Commons BY 3.0"
        >
          CC 3.0 BY
        </a>
      </div>
    </div>
  );
}

export default App;
