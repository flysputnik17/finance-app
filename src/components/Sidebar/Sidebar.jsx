import { useState, useContext } from "react";
import "./Sidebar.css";
import {
  buttonStyleUnclicked,
  buttonStyleClicked,
  overviewIconButtonDefault,
  overviewIconButtonSelected,
  transactionsIconBuutonDefault,
  transactionsIconBuutonSelected,
  budgetsIconBuutonDefault,
  budgetsIconBuutonSelected,
  potsIconBuutonDefault,
  potsIconBuutonSelected,
  billsIconBuutonDefault,
  billsIconBuutonSelected,
} from "../../Utils/constants";
import CurrentPageContext from "../../contexts/CurrentPageContext";
const Sidebar = ({
  overviewRender,
  transactionsRender,
  budgetsender,
  potsRender,
  billsRender,
  minimize,
}) => {
  const currButton = useContext(CurrentPageContext);
  return (
    <section className="sidebar">
      <div className="sidebar__continer">
        <a className="sidebar__continer-logo" href="/">
          finance
        </a>
        <div className="sidebar__continer-butoms">
          <button
            type="button"
            onClick={overviewRender}
            id="overview"
            className={
              currButton === "overview"
                ? buttonStyleClicked
                : buttonStyleUnclicked
            }
          >
            <img
              src={
                currButton === "overview"
                  ? overviewIconButtonSelected
                  : overviewIconButtonDefault
              }
              alt="overview"
              className="sidebar__continer-butoms-icon"
            ></img>
            Overview
          </button>

          <button
            type="button"
            onClick={transactionsRender}
            id="transactions"
            className={
              currButton === "transactions"
                ? buttonStyleClicked
                : buttonStyleUnclicked
            }
          >
            <img
              src={
                currButton === "transactions"
                  ? transactionsIconBuutonSelected
                  : transactionsIconBuutonDefault
              }
              alt="overview"
              className="sidebar__continer-butoms-icon"
            ></img>
            Transactions
          </button>

          <button
            type="button"
            onClick={budgetsender}
            id="budgets"
            className={
              currButton === "budgets"
                ? buttonStyleClicked
                : buttonStyleUnclicked
            }
          >
            <img
              src={
                currButton === "budgets"
                  ? budgetsIconBuutonSelected
                  : budgetsIconBuutonDefault
              }
              alt="overview"
              className="sidebar__continer-butoms-icon"
            ></img>
            Budgets
          </button>

          <button
            type="button"
            onClick={potsRender}
            id="pots"
            className={
              currButton === "pots" ? buttonStyleClicked : buttonStyleUnclicked
            }
          >
            <img
              src={
                currButton === "pots"
                  ? potsIconBuutonSelected
                  : potsIconBuutonDefault
              }
              alt="overview"
              className="sidebar__continer-butoms-icon"
            ></img>
            Pots
          </button>

          <button
            type="button"
            onClick={billsRender}
            id="bills"
            className={
              currButton === "bills" ? buttonStyleClicked : buttonStyleUnclicked
            }
          >
            <img
              src={
                currButton === "bills"
                  ? billsIconBuutonSelected
                  : billsIconBuutonDefault
              }
              alt="overview"
              className="sidebar__continer-butoms-icon"
            ></img>
            Recurring Bills
          </button>
        </div>
        <div className="sidebar__continer-minimize">
          <button
            type="button"
            className={
              currButton === "minimize"
                ? buttonStyleClicked
                : buttonStyleUnclicked
            }
            onClick={minimize}
          >
            <img
              src="/src/assets/icon-minimize-menu.svg"
              alt=""
              className="sidebar__continer-butoms-icon"
            />
            Minimize Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
