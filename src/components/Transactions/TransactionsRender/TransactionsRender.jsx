import { useContext, useState } from "react";
import "./TransactionRender.css";
import {
  seeDetailsButton,
  previmg,
  nextimg,
  previmgHover,
  nextimgHover,
} from "../../../Utils/constants";
import data from "../../../../data.json";
import CurrentPageContext from "../../../contexts/CurrentPageContext";
import mobileScreenContext from "../../../contexts/MobileScreenContext";

const TransactionsRender = ({ transactionsRender }) => {
  const [visibleCount, setVisibleCount] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  let dataTransactionsLength = data.transactions.length;
  const currPage = useContext(CurrentPageContext);
  const isMobile = useContext(mobileScreenContext);

  const pageButtonsRender = () => {
    const buttons = [];
    for (let i = 1; i <= Math.ceil(dataTransactionsLength / 10); i++) {
      buttons.push(
        <button
          key={i}
          className={`transactions__info-pages-buttons-single ${
            i === currentPage
              ? "transactions__info-pages-buttons-single-selected"
              : ""
          }`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return buttons;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setVisibleCount(page * 10);
  };

  const nextTransactionsRender = () => {
    if (currentPage < Math.ceil(dataTransactionsLength / 10)) {
      handlePageChange(currentPage + 1);
    }
  };

  const prevTransactionsRender = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
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

  const renderTransactionsHeader = () =>
    !isMobile ? (
      <div className="transactions__titles">
        <p className="transactions__titles-text-small-rec">
          Recipient / Sender
        </p>
        <p className="transactions__titles-text-small">Category</p>
        <p className="transactions__titles-text-small">Transaction Date</p>
        <p className="transactions__titles-text-small-am">Amount</p>
      </div>
    ) : null;

  const renderTransactionItem = (item, index) => (
    <li
      key={index}
      className={
        currPage === "overview"
          ? "overview__trans-continer-list-item"
          : "transactions-container-list-item animate__animated animate__fadeIn animate__slow "
      }
    >
      <div className="overview__trans-continer-list-item-main">
        <img
          className="overview__trans-continer-list-item-icon"
          src={item.avatar}
          alt="avatar"
        />
        <p className="overview__trans-continer-list-item-name">{item.name}</p>
        {isMobile ? (
          <p className="transactions-continer-list-item-category">
            {item.category}
          </p>
        ) : null}
      </div>
      {currPage === "transactions" && !isMobile ? (
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
          ? "overview__trans animate__animated animate__fadeInUpBig animate__delay-0.5s"
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
                .slice((currentPage - 1) * 10, currentPage * 10)
                .map((item, index) => renderTransactionItem(item, index))}
        </ul>
      </div>
      {dataTransactionsLength > 10 && currPage !== "overview" ? (
        <div className="transactions__info-pages">
          {currentPage <= 1 ? (
            <></>
          ) : (
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
              {isMobile ? "" : "Prev"}
            </button>
          )}

          <div className="transactions__info-pages-buttons">
            {pageButtonsRender()}
          </div>
          {currentPage <= dataTransactionsLength / 10 ? (
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
              {isMobile ? "" : "Next"}
              <img
                className="transactions__info-pages-button-img"
                src={nextimg}
                alt="next"
              ></img>
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default TransactionsRender;
