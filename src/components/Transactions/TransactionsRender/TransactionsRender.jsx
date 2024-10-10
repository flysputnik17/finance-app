import { useContext } from "react";
import "./TransactionRender.css";
import { seeDetailsButton } from "../../../Utils/constants";
import data from "../../../../data.json";
import CurrentPageContext from "../../../contexts/CurrentPageContext";

const TransactionsRender = ({ transactionsRender }) => {
  const currPage = useContext(CurrentPageContext);
  const count = currPage === "overview" ? 5 : 10;
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
    <div className="overview__trans animate__animated animate__fadeInUpBig animate__delay-0.12s">
      {currPage === "overview" ? (
        <>
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
        </>
      ) : (
        <>
          <div className="transactions__titles">
            <p className="transactions__titles-text-small">
              Recipient / Sender
            </p>
            <p className="transactions__titles-text-small">Category</p>
            <p className="transactions__titles-text-small">Transaction Date</p>
            <p className="transactions__titles-text-small">Amount</p>
          </div>
        </>
      )}

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

export default TransactionsRender;
