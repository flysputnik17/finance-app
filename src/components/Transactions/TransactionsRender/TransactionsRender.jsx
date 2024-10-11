import { useContext } from "react";
import "./TransactionRender.css";
import { seeDetailsButton } from "../../../Utils/constants";
import data from "../../../../data.json";
import CurrentPageContext from "../../../contexts/CurrentPageContext";

const TransactionsRender = ({ transactionsRender }) => {
  const currPage = useContext(CurrentPageContext);
  const count = currPage === "overview" ? 5 : 10;

  const handleDateConversion = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date)
      .toLocaleDateString("en-US", options)
      .replace(/ /g, " ");
  };

  const renderOverviewHeader = () => (
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
        />
      </button>
    </>
  );

  const renderTransactionsHeader = () => (
    <div className="transactions__titles">
      <p className="transactions__titles-text-small-rec">Recipient / Sender</p>
      <p className="transactions__titles-text-small">Category</p>
      <p className="transactions__titles-text-small">Transaction Date</p>
      <p className="transactions__titles-text-small-am">Amount</p>
    </div>
  );

  const renderTransactionItem = (item, index) => (
    <li
      key={index}
      className={
        currPage === "overview"
          ? "overview__trans-continer-list-item"
          : "transactions-container-list-item"
      }
    >
      <div className="overview__trans-continer-list-item-main">
        <img
          className="overview__trans-continer-list-item-icon"
          src={item.avatar}
          alt="avatar"
        />
        <p className="overview__trans-continer-list-item-name">{item.name}</p>
      </div>
      {currPage === "transactions" ? (
        <>
          <p className="transactions-continer-list-item-category">
            {item.category}
          </p>
          <p className="transactions-continer-list-item-date">
            {handleDateConversion(item.date)}
          </p>
          <p className="transactions-continer-list-item-num">${item.amount}</p>
        </>
      ) : (
        <div className="overview__trans-continer-list-item-info">
          <p className="overview__trans-continer-list-item-info-num">
            ${item.amount}
          </p>
          <p className="overview__trans-continer-list-item-info-date">
            {handleDateConversion(item.date)}
          </p>
        </div>
      )}
    </li>
  );

  return (
    <div
      className={
        currPage === "overview"
          ? "overview__trans animate__animated animate__fadeInUpBig animate__delay-0.12s"
          : "trans"
      }
    >
      {currPage === "overview"
        ? renderOverviewHeader()
        : renderTransactionsHeader()}
      <div className="overview__trans-continer">
        <ul className="overview__trans-continer-list">
          {data.transactions.slice(0, count).map(renderTransactionItem)}
        </ul>
      </div>
    </div>
  );
};

export default TransactionsRender;
