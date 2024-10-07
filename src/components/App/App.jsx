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
    console.log("overviewRender button clicked");
    setCurrentRoute("overview");
  };
  const transactionsRender = () => {
    console.log("transactionsRender button clicked");
    setCurrentRoute("transactions");
  };
  const budgetsRender = () => {
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

  const handleResize = () => {
    if (window.outerWidth <= 768 && window.outerWidth >= 466) {
      setMinimizeClicked(false);
      setIsMenuSmall(true);
      setMobileScreen(false);
    } else if (window.outerWidth <= 465) {
      setMobileScreen(true);
      setMinimizeClicked(false);
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
                {currentRoute === "budgets" ? <Budgets /> : <></>}
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
