import { seeDetailsButton, potsGreenIcon } from "../../../Utils/constants";

import "./OverviewPots.css";
const OverviewPots = ({ potsRender }) => {
  return (
    <>
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
    </>
  );
};

export default OverviewPots;
