import { seeDetailsButton, potsGreenIcon } from "../../../Utils/constants";
import data from "../../../../data.json";

import "./OverviewPots.css";
const OverviewPots = ({ potsRender }) => {
  const renderPots = ({ item, index }) => (
    <li className="overview__pots-info-second-list-item" key={index}>
      <div className="overview__budgets-main-info-list-item-div">
        <div
          className="overview__budgets-main-info-list-item-side"
          style={{ backgroundColor: item.theme }}
        ></div>
        <div>
          <p className="overview__pots-info-second-list-item-title">
            {item.name}
          </p>
          <p className="overview__pots-info-second-list-item-num">
            ${item.total}
          </p>
        </div>
      </div>
    </li>
  );

  return (
    <div className="overview__pots animate__animated animate__zoomIn animate__delay-0.3s">
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
            <p className="overview__pots-info-main-total-title">Total Saved</p>
            <p className="overview__pots-info-main-total-num">$850</p>
          </div>
        </div>
        <div className="overview__pots-info-second">
          <ul className="overview__pots-info-second-list">
            {data.pots
              .slice(0, 4)
              .map((item, index) => renderPots({ item, index }))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverviewPots;
