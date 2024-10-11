import "./Transactions.css";
import {
  searchIcon,
  previmg,
  nextimg,
  previmgHover,
  nextimgHover,
} from "../../Utils/constants";
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
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="A to Z">A to Z</option>
                <option value="Z to A">Z to A</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
            </label>
            <label className="transactions__info-filters-label-select">
              Category
              <select className="transactions__info-filters-select">
                <option value="All Transaction">All Transaction</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Bills">Bills</option>
                <option value="Groceries">Groceries</option>
                <option value="Dining Out">Dining Out</option>
                <option value="Transportation">Transportation</option>
                <option value="Personal Care">Personal Care</option>
                <option value="Education">Education</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Shopping">Shopping</option>
                <option value="General">General</option>
              </select>
            </label>
          </div>
        </div>
        <div className="transactions__info-main">
          <TransactionsRender />
        </div>
        <div className="transactions__info-pages">
          <button className="transactions__info-pages-button">
            <img
              className="transactions__info-pages-button-img"
              src={previmg}
              alt="prev"
            ></img>
            Prev
          </button>
          <div className="transactions__info-pages-buttons">
            <button className="transactions__info-pages-buttons-single">
              1
            </button>
            <button className="transactions__info-pages-buttons-single">
              2
            </button>
            <button className="transactions__info-pages-buttons-single">
              3
            </button>
            <button className="transactions__info-pages-buttons-single">
              4
            </button>
            <button className="transactions__info-pages-buttons-single">
              5
            </button>
          </div>
          <button className="transactions__info-pages-button-next">
            Next
            <img
              className="transactions__info-pages-button-img"
              src={nextimg}
              alt="next"
            ></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
