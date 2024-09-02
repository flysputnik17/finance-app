import "./OverViewTransactions.css";
import { seeDetailsButton } from "../../../Utils/constants";
import data from "../../../../data.json";

const OverViewTransactions = ({ transactionsRender }) => {
  const count = 5;
  const handleDateConversion = (date) => {
    const options = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };

    const formattedDate = new Date(date).toLocaleDateString("en-US", options);
    const [month, day, year] = formattedDate.split(" ");
    return `${day} ${month} ${year}`;
  };
  return (
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
      <div className="overview__trans-continer">
        <ul className="overview__trans-continer-list">
          {data.transactions.slice(0, count).map((item, index) => (
            <li key={index} className="overview__trans-continer-list-item">
              <img
                className="overview__trans-continer-list-item-icon"
                src={item.avatar}
                alt="avatar"
              ></img>
              <p className="overview__trans-continer-list-item-name">
                {item.name}
              </p>
              <div className="overview__trans-continer-list-item-info">
                <p className="overview__trans-continer-list-item-info-num">
                  ${item.amount}
                </p>
                <p className="overview__trans-continer-list-item-info-date">
                  {handleDateConversion(item.date)}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OverViewTransactions;
