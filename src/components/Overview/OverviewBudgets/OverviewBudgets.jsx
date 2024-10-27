import { useContext, useEffect, useRef } from "react";
import Chart from "chart.js/auto";

import "./OverviewBudgets.css";
import { seeDetailsButton } from "../../../Utils/constants";
import CurrentPageContext from "../../../contexts/CurrentPageContext";
import data from "../../../../data.json";

const OverviewBudgets = ({ budgetsRender }) => {
  const currentPage = useContext(CurrentPageContext);
  const chartRef = useRef(null);
  useEffect(() => {
    const chartData = {
      labels: data.budgets.map((item) => item.category),
      datasets: [
        {
          data: data.budgets.map((item) => item.maximum),
          backgroundColor: data.budgets.map((item) => item.theme),
          hoverOffset: 5,
        },
      ],
    };

    const ctx = document.getElementById("myChart");
    if (ctx) {
      // Destroy the previous chart instance if it exists
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Create a new chart instance and store it in the ref
      chartRef.current = new Chart(ctx, {
        type: "doughnut",
        options: {
          animation: true,
          animation: {
            animateScale: true,
            animateRotate: true,
          },
          plugins: {
            legend: {
              display: true,
            },
            tooltip: {
              enabled: true,
            },
          },
          cutout: "70%",
        },
        data: chartData,
        plugins: [
          {
            beforeDraw: function (chart) {
              const { width, height, ctx } = chart;
              ctx.restore();
              const fontSize = (height / 114).toFixed(2);
              ctx.font = `${fontSize}em sans-serif,Text Preset1, Arial, Helvetica, sans-serif`;
              ctx.textBaseline = "middle";

              const text = `$${data.budgets
                .reduce((total, item) => total + item.maximum, 0)
                .toString()}`; // Sum all "maximum" values, convert to string, and prepend $
              const textX = Math.round(
                (width - ctx.measureText(text).width) / 2
              );
              const textY = height / 1.6;

              ctx.fillText(text, textX, textY);
              ctx.save();
            },
          },
        ],
      });
    }

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  const renderBudgets = ({ item, index }) => (
    <li key={index} className="overview__budgets-main-info-list-item">
      <div
        className={
          currentPage === "budgets"
            ? "overview__budgets-main-info-list-item-div-page"
            : "overview__budgets-main-info-list-item-div"
        }
      >
        <div
          className={
            currentPage === "budgets"
              ? "overview__budgets-main-info-list-item-side-page"
              : "overview__budgets-main-info-list-item-side"
          }
          style={{ backgroundColor: item.theme }}
        ></div>
        <div
          className={
            currentPage === "budgets"
              ? "overview__budgets-main-info-list-item-page"
              : ""
          }
        >
          <p className="overview__budgets-main-info-list-item-title">
            {item.category}
          </p>
          <p className="overview__budgets-main-info-list-item-num">
            ${item.maximum}
          </p>
        </div>
      </div>
    </li>
  );

  // Sort the transactions by category and filter to ensure unique categories
  const sortedBudgets = data.budgets
    .sort((a, b) => a.category.localeCompare(b.category))
    .filter(
      (item, index, self) =>
        index === self.findIndex((t) => t.category === item.category)
    )
    .slice(0, 4);

  return (
    <div className="overview__budgets animate__animated animate__fadeInRight animate__delay-0.9s">
      {currentPage === "budgets" ? (
        <></>
      ) : (
        <>
          <h2 className="overview__pots-title">Budgets</h2>
          <button
            className="overview__pots-button"
            type="button"
            onClick={budgetsRender}
          >
            See Details
            <img
              className="overview__pots-button-img"
              src={seeDetailsButton}
              alt="see details"
            ></img>
          </button>
        </>
      )}

      <div
        className={
          currentPage === "budgets"
            ? "overview__budgets-main-page"
            : "overview__budgets-main"
        }
      >
        <div className="overview__budgets-main-pie">
          <canvas id="myChart"></canvas>
        </div>
        <div
          className={
            currentPage === "budgets"
              ? "overview__budgets-main-info-page"
              : "overview__budgets-main-info"
          }
        >
          {currentPage === "budgets" ? (
            <>
              <p className="overview__budgets-main-info-summary">
                Spending Summary
              </p>
            </>
          ) : null}
          <ul className="overview__budgets-main-info-list">
            {sortedBudgets.map((item, index) => renderBudgets({ item, index }))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OverviewBudgets;
