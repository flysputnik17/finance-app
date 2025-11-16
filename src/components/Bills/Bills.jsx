
import { recurringTotalIcon,searchIcon } from "../../Utils/constants";
import BillsRender from "./BillsRender/BillsRender";
import "./Bills.css";

const Bills = () => {
  return (
    <div className="bills">
      <h2 className="bills_title">Recurring Bills</h2>
      <div className="bills__info">
        <div className="bills__info__left-side">
          <div className="bills__info__left-side-top animate__animated animate__flipInX animate__slow">
           <img alt="rec-icon" src={recurringTotalIcon} className="bills__info__left-side-img"></img>
           <div className="bills__info__left-side-main">
            <p className="bills__info__left-side-title">Total Bills</p>
           <p className="bills__info__left-side-number">$384.98</p>
           </div>
           
          </div>
          <div className="bills__info__left-side-summary animate__animated animate__zoomIn animate__delay-0.3s">
            <p className="bills__info__left-side-summary-title"> Summary</p>
            <div className="bills__info__left-side-summary-main"> 
              <ul className="bills__info__left-side-summary-main-list">
                <il className = "bills__info__left-side-summary-main-list-item">
                    <p className="bills__info__left-side-summary-main-list-item-title">Paid Bills</p>
                    <p className="bills__info__left-side-summary-main-list-item-number">4 ($190.00)</p>
                </il>
                <il className = "bills__info__left-side-summary-main-list-item">
                    <p className="bills__info__left-side-summary-main-list-item-title">Total Upcoming</p>
                    <p className="bills__info__left-side-summary-main-list-item-number">4 ($194.98)</p>
                </il>
                <il className = "bills__info__left-side-summary-main-list-item">
                    <p className="bills__info__left-side-summary-main-list-item-title">Due Soon</p>
                    <p className="bills__info__left-side-summary-main-list-item-number">2 ($59.98)</p>
                </il>

              </ul>
            </div>
          </div>
            
          
        </div>
        <div className="bills__info__right-side">
          <div className="bills__info__right-side-filters">
            <label className="bills__info__right-side-filters-label">
              <input
              className="bills__info__right-side-filters-input"
              type="text"
              id="Search bills"
              name="Search bills"
              placeholder="Search bills"
              required
            />
            <img alt="search icon" className="bills__info__right-side-filters-icon" src={searchIcon}></img> 
            </label>
            
          </div>
          <div className="bills__info__right-side-main">
            <div className="bills__info__right-side-main-headers">
              <div className="bills__info__right-side-main-headers-item">
                <p className="bills__info__right-side-main-headers-item-textM">Bill Title</p>
                <div className="bills__info__right-side-main-headers-item-texts-group">
                  <p className="bills__info__right-side-main-headers-item-text">Due Date</p>
                  <p className="bills__info__right-side-main-headers-item-text">Amount</p>
                </div>
              </div>
            </div>
            <div className="bills__info__right-side-rest animate__animated animate__fadeIn animate__slow">
              <BillsRender />
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bills;
