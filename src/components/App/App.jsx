import "./App.css";
import "animate.css";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "../Overview/Overview";
import Transactions from "../Transactions/Transactions";
import Budgets from "../Budgets/Budgets";
import Pots from "../Pots/Pots";
import Bills from "../Bills/Bills";

import { useState, useEffect } from "react";

import CurrentPageContext from "../../contexts/CurrentPageContext";
import minimizeButtonContext from "../../contexts/MinimizeButtonContext";
import smallScreenContext from "../../contexts/SmallScreenContext";
import mobileScreenContext from "../../contexts/MobileScreenContext";

function App() {
  const [currentRoute, setCurrentRoute] = useState("overview");
  const [minimizeClicked, setMinimizeClicked] = useState(false);
  const [isMenuSmall, setIsMenuSmall] = useState(false);
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    handleResize(); // Call handleResize initially to set the correct state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const overviewRender = () => {
    setCurrentRoute("overview");
  };
  const transactionsRender = () => {
    setCurrentRoute("transactions");
  };
  const budgetsRender = () => {
    setCurrentRoute("budgets");
  };
  const potsRender = () => {
    setCurrentRoute("pots");
  };
  const billsRender = () => {
    setCurrentRoute("bills");
  };
  const minimize = () => {
    if (minimizeClicked) {
      setMinimizeClicked(false);
    } else {
      setMinimizeClicked(true);
    }
  };

  const handleResize = () => {
    if (window.outerWidth <= 768 && window.outerWidth >= 466) {
      setMinimizeClicked(false);
      setMobileScreen(false);
      setIsMenuSmall(true);
    } else if (window.outerWidth <= 465) {
      setMinimizeClicked(false);
      setMobileScreen(true);
      setIsMenuSmall(true);
    } else {
      setIsMenuSmall(false);
      setMobileScreen(false);
    }
  };

  return (
    <minimizeButtonContext.Provider value={minimizeClicked}>
      <CurrentPageContext.Provider value={currentRoute}>
        <div className="page">
          <smallScreenContext.Provider value={isMenuSmall}>
            <mobileScreenContext.Provider value={mobileScreen}>
              <Sidebar
                overviewRender={overviewRender}
                transactionsRender={transactionsRender}
                budgetsRender={budgetsRender}
                potsRender={potsRender}
                billsRender={billsRender}
                minimize={minimize}
              />

              <div className="main">
                {currentRoute === "overview" ? (
                  <Overview
                    transactionsRender={transactionsRender}
                    budgetsRender={budgetsRender}
                    potsRender={potsRender}
                    billsRender={billsRender}
                  />
                ) : (
                  <></>
                )}
                {currentRoute === "transactions" ? <Transactions /> : <></>}
                {currentRoute === "budgets" ? (
                  <Budgets transactionsRender={transactionsRender} />
                ) : (
                  <></>
                )}
                {currentRoute === "pots" ? <Pots /> : <></>}
                {currentRoute === "bills" ? <Bills /> : <></>}
              </div>
            </mobileScreenContext.Provider>
          </smallScreenContext.Provider>
        </div>
      </CurrentPageContext.Provider>
    </minimizeButtonContext.Provider>
  );
}

export default App;
