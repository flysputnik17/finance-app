import "./Overview.css";

import data from "../../../data.json";

import OverviewPots from "./OverviewPots/OverviewPots";
import OverViewTransactions from "./OverviewTransactions/OverViewTransactions";
const Overview = ({
  transactionsRender,
  budgetsender,
  potsRender,
  billsRender,
}) => {
  const currentBalance = data.balance.current;
  const income = data.balance.income;
  const expenses = data.balance.expenses;
  return (
    <div className="overview">
      <h1 className="overview__title">Overview</h1>
      <div className="overview__info">
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
      <OverviewPots potsRender={potsRender} />
      <OverViewTransactions transactionsRender={transactionsRender} />
    </div>
  );
};

export default Overview;
