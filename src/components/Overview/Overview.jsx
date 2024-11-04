import { useContext } from "react";
import PropTypes from "prop-types";
import "./Overview.css";

import data from "../../../data.json";

import OverviewPots from "./OverviewPots/OverviewPots";
// import OverViewTransactions from "./OverviewTransactions/OverViewTransactions";
import TransactionsRender from "../Transactions/TransactionsRender/TransactionsRender";
import OverviewBills from "./OverviewBills/OverviewBills";
import OverviewBudgets from "./OverviewBudgets/OverviewBudgets";

const Overview = ({
  transactionsRender,
  budgetsRender,
  potsRender,
  billsRender,
}) => {
  const currentBalance = data.balance.current;
  const income = data.balance.income;
  const expenses = data.balance.expenses;
  return (
    <div className="overview ">
      <h1 className="overview__title animate__animated animate__fadeIn animate__slow">
        Overview
      </h1>
      <div className="overview__info animate__animated animate__flipInX animate__slow">
        <div className="overview__info-current">
          <p className="overview__info-current-title">Current Balance</p>
          <p className="overview__info-current-number">
            ${currentBalance.toFixed(2)}
          </p>
        </div>
        <div className="overview__info-rest">
          <p className="overview__info-rest-title">Income</p>
          <p className="overview__info-rest-number">${income.toFixed(2)}</p>
        </div>
        <div className="overview__info-rest">
          <p className="overview__info-rest-title">Expenses </p>
          <p className="overview__info-rest-number">${expenses.toFixed(2)}</p>
        </div>
      </div>
      <div className="overview__section">
        <div className="overview__left-section">
          <OverviewPots potsRender={potsRender} />
          <TransactionsRender transactionsRender={transactionsRender} />
        </div>
        <div className="overview__right-section">
          <OverviewBudgets budgetsRender={budgetsRender} />
          <OverviewBills billsRender={billsRender} />
        </div>
      </div>
    </div>
  );
};
Overview.propTypes = {
  transactionsRender: PropTypes.array.isRequired,
  budgetsRender: PropTypes.array.isRequired,
  potsRender: PropTypes.array.isRequired,
  billsRender: PropTypes.array.isRequired,
};

export default Overview;
