import "./OverviewBudgets.css";
import { seeDetailsButton } from "../../../Utils/constants";

const OverviewBudgets = ({ budgetsRender }) => {
  return (
    <div className="overview__budgets">
      <h2 className="overview__budgets-title">Budgets</h2>
      <button
        className="overview__pots-button"
        type="button"
        onClick={budgetsRender}
      >
        See Details
        <img
          className="overview__pots-button-img"
          src={seeDetailsButton}
          alt="see details"
        ></img>
      </button>
      <div className="overview__budgets-main">
        <div className="overview__budgets-main-pie">
          <img
            src="/src/assets/Chart.svg"
            alt="chart"
            className="overview__budgets-main-pie-img"
          ></img>
        </div>
        <div className="overview__budgets-main-info">
          <ul className="overview__budgets-main-info-list">
            <li className="overview__budgets-main-info-list-item">
              <p className="overview__budgets-main-info-list-item-title">
                Entertainment
              </p>
              <p className="overview__budgets-main-info-list-item-num">
                $50.00
              </p>
            </li>
            <li className="overview__budgets-main-info-list-item">
              <p className="overview__budgets-main-info-list-item-title">
                Bills
              </p>
              <p className="overview__budgets-main-info-list-item-num">
                $750.00
              </p>
            </li>
            <li className="overview__budgets-main-info-list-item">
              <p className="overview__budgets-main-info-list-item-title">
                Dining Out
              </p>
              <p className="overview__budgets-main-info-list-item-num">
                $75.00
              </p>
            </li>
            <li className="overview__budgets-main-info-list-item">
              <p className="overview__budgets-main-info-list-item-title">
                Personal Care
              </p>
              <p className="overview__budgets-main-info-list-item-num">
                $100.00
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverviewBudgets;
