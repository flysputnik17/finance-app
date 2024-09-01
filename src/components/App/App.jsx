import "./App.css";
import "animate.css";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "../Overview/Overview";
import Transactions from "../Transactions/Transactions";
import Budgets from "../Budgets/Budgets";
import Pots from "../Pots/Pots";
import Bills from "../Bills/Bills";

import { useState } from "react";

import CurrentPageContext from "../../contexts/CurrentPageContext";
import minimizeButtonContext from "../../contexts/MinimizeButtonContext";

function App() {
  const [currentRoute, setCurrentRoute] = useState("overview");
  const [minimizeClicked, setMinimizeClicked] = useState(false);

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
    if (minimizeClicked) {
      setMinimizeClicked(false);
    } else {
      setMinimizeClicked(true);
    }
  };

  return (
    <minimizeButtonContext.Provider value={minimizeClicked}>
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
            {currentRoute === "overview" ? (
              <Overview
                transactionsRender={transactionsRender}
                budgetsender={budgetsender}
                potsRender={potsRender}
                billsRender={billsRender}
              />
            ) : (
              <></>
            )}
            {currentRoute === "transactions" ? <Transactions /> : <></>}
            {currentRoute === "budgets" ? <Budgets /> : <></>}
            {currentRoute === "pots" ? <Pots /> : <></>}
            {currentRoute === "bills" ? <Bills /> : <></>}
          </div>
        </div>
      </CurrentPageContext.Provider>
    </minimizeButtonContext.Provider>
  );
}

export default App;
