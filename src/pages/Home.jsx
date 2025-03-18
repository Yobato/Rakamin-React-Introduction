import React from "react";
import Kucing from "../components/Kucing";
import Mie from "../components/Mie";
import UserList from "../components/UserList";
import UserList2 from "../components/UserList2";
import ThemeContext from "../context/ThemeContext";
import Child from "../components/Child";
import Coin from "./Coin";

function Home() {
  return (
    <div>
      <ThemeContext.Provider value="Light">
        <h1>Home Page</h1>
        <Kucing />
        <Child />
        {/* <Mie /> */}
        {/* <UserList /> */}
        {/* <UserList2 /> */}
      </ThemeContext.Provider>
    </div>
  );
}

export default Home;
