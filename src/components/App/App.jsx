import "./App.css";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "../Overview/Overview";

import { useState } from "react";

import CurrentPageContext from "../../contexts/CurrentPageContext";

function App() {
  const [currentRoute, setCurrentRoute] = useState("overview");

  const overviewRender = () => {
    console.log("overviewRender button clicked");
    setCurrentRoute("overview");
  };
  const transactionsRender = () => {
    console.log("transactionsRender button clicked");
    setCurrentRoute("transactions");
  };
  const budgetsender = () => {
    console.log("budgetsender button clicked");
    setCurrentRoute("budgets");
  };
  const potsRender = () => {
    console.log("potsRender button clicked");
    setCurrentRoute("pots");
  };
  const billsRender = () => {
    console.log("billsRender button clicked");
    setCurrentRoute("bills");
  };
  const minimize = () => {
    console.log("minimize");
    setCurrentRoute("transactions");
    setCurrentRoute("minimize");
  };

  return (
    <CurrentPageContext.Provider value={currentRoute}>
      <div className="page">
        <div className="sidebar">
          <Sidebar
            overviewRender={overviewRender}
            transactionsRender={transactionsRender}
            budgetsender={budgetsender}
            potsRender={potsRender}
            billsRender={billsRender}
            minimize={minimize}
          />
        </div>
        <div className="main">
          <Overview />
        </div>
      </div>
    </CurrentPageContext.Provider>
  );
}

export default App;
