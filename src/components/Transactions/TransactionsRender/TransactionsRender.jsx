import { useContext, useState } from "react";
import "./TransactionRender.css";
import {
  seeDetailsButton,
  searchIcon,
  previmg,
  nextimg,
  previmgHover,
  nextimgHover,
} from "../../../Utils/constants";
import data from "../../../../data.json";
import CurrentPageContext from "../../../contexts/CurrentPageContext";

const TransactionsRender = ({ transactionsRender }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  let dataTransactionsLength = data.transactions.length;
  const currPage = useContext(CurrentPageContext);

  const pageButtonsRender = () => {
    const buttons = [];
    for (let i = 1; i <= dataTransactionsLength / 10; i++) {
      buttons.push(
        <button key={i} className="transactions__info-pages-buttons-single">
          {i}
        </button>
      );
    }
    return buttons;
  };

  const nextTranPage = () => {
    setVisibleCount((prevCount) => prevCount + 10);
    renderTransactionItem();
  };

  const nextTransactionsRender = () => {
    console.log("next");
    nextTranPage();
  };

  const prevTransactionsRender = () => {
    console.log("prev");
  };

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
          {currPage === "overview"
            ? data.transactions
                .slice(0, 5)
                .map((item, index) => renderTransactionItem(item, index))
            : data.transactions
                .slice(0, visibleCount)
                .map((item, index) => renderTransactionItem(item, index))}
        </ul>
      </div>
      {dataTransactionsLength > 10 && currPage !== "overview" ? (
        <div className="transactions__info-pages">
          <button
            className="transactions__info-pages-button"
            onMouseEnter={(e) => {
              e.currentTarget.querySelector("img").src = previmgHover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.querySelector("img").src = previmg;
            }}
            onClick={prevTransactionsRender}
          >
            <img
              className="transactions__info-pages-button-img"
              src={previmg}
              alt="prev"
            ></img>
            Prev
          </button>
          <div className="transactions__info-pages-buttons">
            {pageButtonsRender({ data })}
          </div>
          <button
            className="transactions__info-pages-button-next"
            onMouseEnter={(e) =>
              (e.currentTarget.querySelector("img").src = nextimgHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.querySelector("img").src = nextimg)
            }
            onClick={nextTransactionsRender}
          >
            Next
            <img
              className="transactions__info-pages-button-img"
              src={nextimg}
              alt="next"
            ></img>
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TransactionsRender;
