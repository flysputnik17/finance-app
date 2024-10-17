import "./Transactions.css";
import { searchIcon } from "../../Utils/constants";

import TransactionsRender from "./TransactionsRender/TransactionsRender";

const Transactions = () => {
  return (
    <div className="transactions">
      <h2 className="transactions__title">Transactions</h2>
      <div className="transactions__info">
        <div className="transactions__info-filters">
          <label
            className="transactions__info-filters-label"
            htmlFor="Search transaction"
          >
            <input
              className="transactions__info-filters-input"
              type="text"
              id="Search transaction"
              name="Search transaction"
              placeholder="Search transaction"
              required
            ></input>
            <img
              src={searchIcon}
              alt="search icon"
              className="transactions__info-filters-input-icon"
            ></img>
          </label>
          <div className="transactions__info-filters-label-rest">
            <label className="transactions__info-filters-label-select">
              Sort by
              <select className="transactions__info-filters-select">
                <option
                  className="transactions__info-filters-option"
                  value="Latest"
                >
                  Latest
                </option>
                <option
                  className="transactions__info-filters-option"
                  value="Oldest"
                >
                  Oldest
                </option>
                <option
                  className="transactions__info-filters-option"
                  value="A to Z"
                >
                  A to Z
                </option>
                <option
                  className="transactions__info-filters-option"
                  value="Z to A"
                >
                  Z to A
                </option>
                <option
                  className="transactions__info-filters-option"
                  value="Highest"
                >
                  Highest
                </option>
                <option
                  className="transactions__info-filters-option"
                  value="Lowest"
                >
                  Lowest
                </option>
              </select>
            </label>
            <label className="transactions__info-filters-label-select">
              Category
              <select className="transactions__info-filters-select">
                <option
                  className="transactions__info-filters-option2"
                  value="All Transaction"
                >
                  All Transaction
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Entertainment"
                >
                  Entertainment
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Bills"
                >
                  Bills
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Groceries"
                >
                  Groceries
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Dining Out"
                >
                  Dining Out
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Transportation"
                >
                  Transportation
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Personal Care"
                >
                  Personal Care
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Education"
                >
                  Education
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Lifestyle"
                >
                  Lifestyle
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="Shopping"
                >
                  Shopping
                </option>
                <option
                  className="transactions__info-filters-option2"
                  value="General"
                >
                  General
                </option>
              </select>
            </label>
          </div>
        </div>
        <div className="transactions__info-main">
          <TransactionsRender />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
