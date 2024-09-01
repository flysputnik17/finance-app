import "./OverViewTransactions.css";
import { seeDetailsButton } from "../../../Utils/constants";
import data from "../../../../data.json";

const OverViewTransactions = ({ transactionsRender }) => {
  return (
    <>
      <div className="overview__trans">
        <h2 className="overview__trans-title">Transactions</h2>
        <button
          className="overview__pots-button"
          type="button"
          onClick={transactionsRender}
        >
          View All
          <img
            className="overview__pots-button-img"
            src={seeDetailsButton}
            alt="see details"
          ></img>
        </button>
      </div>
      <div className="overview__trans-continer">
        <ul className="overview__trans-continer-list">
          <li className="overview__trans-continer-list-item">
            <img
              className="overview__trans-continer-list-item-icon"
              src={data.transactions[0].avatar}
              alt="avatar"
            ></img>
            <p className="overview__trans-continer-list-item-name"></p>
            <div className="overview__trans-continer-list-item-info">
              <p className="overview__trans-continer-list-item-info-num"></p>
              <p className="overview__trans-continer-list-item-info-date"></p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OverViewTransactions;
