import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import data from "../../../data.json";
import "./Budgets.css";
import OverviewBudgets from "../Overview/OverviewBudgets/OverviewBudgets";

const Budgets = () => {
  const chartRefs = useRef([]);

  useEffect(() => {
    data.budgets.forEach((budget, index) => {
      const chartData = {
        labels: [budget.category],
        datasets: [
          {
            data: [budget.maximum],
            backgroundColor: [budget.theme],
            hoverOffset: 5,
          },
        ],
      };

      const ctx = document.getElementById(`myBar-${index}`);
      if (ctx) {
        // Destroy the previous chart instance if it exists
        if (chartRefs.current[index]) {
          chartRefs.current[index].destroy();
        }

        // Create a new chart instance and store it in the ref
        chartRefs.current[index] = new Chart(ctx, {
          type: "bar",
          options: {
            animation: true,
            indexAxis: "y",
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
              },
            },
          },
          data: chartData,
        });
      }
    });

    // Cleanup function to destroy the chart instances when the component unmounts
    return () => {
      chartRefs.current.forEach((chart) => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []);

  return (
    <div className="budgets">
      <div className="budgets__header">
        <h2 className="budgets__header-title">Budgets</h2>
        <button className="budgets__header-add-button" type="button">
          + Add New Budget
        </button>
      </div>
      <div className="budgets__info">
        <OverviewBudgets />
        <div className="budgets__info-left">
          <ul className="budgets__info-left-elements">
            {data.budgets.map((budget, index) => (
              <li
                key={budget.category}
                className="budgets__info-left-elements-item"
              >
                <div className="budgets__info-left-elements-item-header">
                  <p className="budgets__info-left-elements-item-header-title">
                    {budget.category}
                  </p>
                  <button
                    className="budgets__info-left-elements-item-header-button"
                    type="button"
                  ></button>
                </div>
                <div className="budgets__info-left-elements-item-money">
                  <p className="budgets__info-left-elements-item-money-max">
                    Maximum of ${budget.maximum.toFixed(2)}
                  </p>
                  <canvas id={`myBar-${index}`}></canvas>
                  <div className="budgets__info-left-elements-item-div">
                    <div
                      className="budgets__info-left-elements-item-side"
                      style={{ backgroundColor: budget.theme }}
                    ></div>
                    <div>
                      <p className="budgets__budgets-main-info-list-item-title">
                        {budget.category}
                      </p>
                      <p className="budgets__budgets-main-info-list-item-num">
                        ${budget.maximum}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Budgets;
