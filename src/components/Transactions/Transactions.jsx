import { useContext } from "react";
import "./Transactions.css";
import {
  searchIcon,
  sortByIconMobile,
  categoryMobileIcon,
} from "../../Utils/constants";

import { sortOptions, categoryOptions } from "../../Utils/filterOptions";
import TransactionsRender from "./TransactionsRender/TransactionsRender";
import mobileScreenContext from "../../contexts/MobileScreenContext";

const Transactions = () => {
  const isMobile = useContext(mobileScreenContext);

  const renderSelectOptions = (options) =>
    options.map((option) => (
      <option
        key={option.value}
        className={option.className}
        value={option.value}
      >
        {option.label}
      </option>
    ));

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
            />
            <img
              src={searchIcon}
              alt="search icon"
              className="transactions__info-filters-input-icon"
            />
          </label>
          <div className="transactions__info-filters-label-rest">
            <label className="transactions__info-filters-label-select">
              {!isMobile && "Sort by"}
              <select className="transactions__info-filters-select">
                {isMobile && <option value="" defaultValue></option>}
                {renderSelectOptions(sortOptions)}
              </select>
              {isMobile && (
                <img
                  className="transactions__info-filters-label-select-icon"
                  src={sortByIconMobile}
                  alt="sort by icon"
                />
              )}
            </label>
            <label className="transactions__info-filters-label-select">
              {!isMobile && "Category"}
              <select className="transactions__info-filters-select">
                {isMobile && <option value="" defaultValue></option>}
                {renderSelectOptions(categoryOptions)}
              </select>
              {isMobile && (
                <img
                  src={categoryMobileIcon}
                  className="transactions__info-filters-label-select-icon"
                  alt="category icon"
                />
              )}
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
