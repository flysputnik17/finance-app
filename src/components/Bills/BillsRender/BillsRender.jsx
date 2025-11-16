
import React from "react";
import { useState } from "react";
import data from "../../../../data.json";
import "./BillsRender.css";

const BillsRender = () => {
    const [visibleCount, setVisibleCount] = React.useState(10);
const renderBillItems = (bill,index) => (
    <li className = "bills__render-list-item" key={index}>
        <div className="bills__render-list-item-main">
            <img alt="bill icon" className="bills__render-list-item-icon" src={bill.avatar}/>
        <p className="bills__render-list-item-title">{bill.name}</p>
        </div>
        <div className="bills__render-list-item-rest">
                    <p className="bills__render-list-item-date">{bill.date}</p>
                   <img className="bills__render-list-item-date-mark" alt="icon" src={bill.icon}></img>
                    <p className="bills__render-list-item-amount">${bill.amount}</p>
        </div>
    </li>
)

    return(
        <div className="bills__render">
            <ul className="bills__render-list">
                {data.Bills.slice(0,visibleCount).map((bill,index) => renderBillItems(bill,index))}
            </ul>
        </div>
    );
};

export default BillsRender;