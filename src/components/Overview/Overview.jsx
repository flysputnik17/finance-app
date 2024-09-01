import "./Overview.css";
import { seeDetailsButton, potsGreenIcon } from "../../Utils/constants";

const Overview = ({
  transactionsRender,
  budgetsender,
  potsRender,
  billsRender,
}) => {
  return (
    <div className="overview">
      <h1 className="overview__title">Overview</h1>
      <div className="overview__info">
        <div className="overview__info-current">
          <p className="overview__info-current-title">Current Balance</p>
          <p className="overview__info-current-number">$4,836.00</p>
        </div>
        <div className="overview__info-rest">
          <p className="overview__info-rest-title">Income</p>
          <p className="overview__info-rest-number">$3,814.25</p>
        </div>
        <div className="overview__info-rest">
          <p className="overview__info-rest-title">Expenses </p>
          <p className="overview__info-rest-number">$1,700.50</p>
        </div>
      </div>
      <div className="overview__pots">
        <h2 className="overview__pots-title">Pots</h2>
        <button
          className="overview__pots-button"
          type="button"
          onClick={potsRender}
        >
          See Details
          <img
            className="overview__pots-button-img"
            src={seeDetailsButton}
            alt="see details"
          ></img>
        </button>
        <div className="overview__pots-info">
          <div className="overview__pots-info-main">
            <img
              src={potsGreenIcon}
              alt="pots icon green"
              className="overview__pots-info-main-icon"
            ></img>
            <div className="overview__pots-info-main-total">
              <p className="overview__pots-info-main-total-title">
                Total Saved
              </p>
              <p className="overview__pots-info-main-total-num">$850</p>
            </div>
          </div>
          <div className="overview__pots-info-second">
            <ul className="overview__pots-info-second-list">
              <li className="overview__pots-info-second-list-item">
                <p className="overview__pots-info-second-list-item-title">
                  Savings
                </p>
                <p className="overview__pots-info-second-list-item-num">$159</p>
              </li>
              <li className="overview__pots-info-second-list-item">
                <p className="overview__pots-info-second-list-item-title">
                  Gift
                </p>
                <p className="overview__pots-info-second-list-item-num">$40</p>
              </li>
              <li className="overview__pots-info-second-list-item">
                <p className="overview__pots-info-second-list-item-title">
                  Concert Ticket
                </p>
                <p className="overview__pots-info-second-list-item-num">$110</p>
              </li>
              <li className="overview__pots-info-second-list-item">
                <p className="overview__pots-info-second-list-item-title">
                  New Laptop
                </p>
                <p className="overview__pots-info-second-list-item-num">$10</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
