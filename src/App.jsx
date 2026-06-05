import React, { useState } from "react";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import Header from "./Components/Header";
import Crew from "./Components/Crew";
import Technology from "./Components/Technology";

const App = () => {
  const [activePage, setActivePage] = useState(0);
  return (
    <div className="h-screen w-full">
      {activePage === 0 && <Home setActivePage={setActivePage} />}
      {activePage === 1 && <Destination setActivePage={setActivePage} />}
      {activePage === 2 && <Crew setActivePage={setActivePage} />}
      {activePage === 3 && <Technology setActivePage={setActivePage} />}
    </div>
  );
};

export default App;
