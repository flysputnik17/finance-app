import "./OverviewBills.css";
import { seeDetailsButton } from "../../../Utils/constants";

const OverviewBills = ({ billsRender }) => {
  return (
    <div className="overview__bils">
      <h2 className="overview__trans-title">Recurring Bills</h2>
      <button
        className="overview__pots-button"
        type="button"
        onClick={billsRender}
      >
        See Details
        <img
          className="overview__pots-button-img"
          src={seeDetailsButton}
          alt="see details"
        ></img>
      </button>
      <div className="overview__bils-continer">
        <div className="overview__bils-continer-elem">
          <p className="overview__bils-continer-elem-title">Paid Bills</p>
          <p className="overview__bils-continer-elem-num">$190.00</p>
        </div>
        <div className="overview__bils-continer-elem">
          <p className="overview__bils-continer-elem-title">Total Upcoming</p>
          <p className="overview__bils-continer-elem-num">$194.98</p>
        </div>
        <div className="overview__bils-continer-elem">
          <p className="overview__bils-continer-elem-title">Due Soon</p>
          <p className="overview__bils-continer-elem-num">$59.98</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewBills;
