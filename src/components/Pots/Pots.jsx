import { useEffect, useRef, useState } from "react";
import "./Pots.css";
import Chart from "chart.js/auto";
import data from "../../../data.json";
import { budgetsDots } from "../../Utils/constants";
const Pots = () => {
  const chartRefs = useRef([]);

  useEffect(() => {
    data.pots.forEach((pots, index) => {
      const chartData = {
        labels: [pots.name],
        datasets: [
          {
            data: [pots.total],
            backgroundColor: [pots.theme],
            hoverOffset: 5,
          },
        ],
      };

      const ctx = document.getElementById(`myBar2-${index}`);
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
            borderWidth: 0,
            maxBarThickness: 100,
            borderRadius: 10,
            responsive: true,
            maintainAspectRatio: false, // Ensure the chart takes all available space
            scales: {
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
                beginAtZero: true,
                max: data.budgets[index].maximum,
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
              },
            },
            backgroundColor: "transparent",
          },
          data: chartData,
        });
      }
    });

    // Cleanup function to destroy the chart instances when the component unmounts
    const currentCharts = chartRefs.current;
    return () => {
      currentCharts.forEach((chart) => {
        if (chart) {
          chart.destroy();
        }
      });
    };
  }, []);
  const EditDropdown = (name) => {
    const [menuOpen, setMenuOpen] = useState(false);
    console.log("Edit dropdown");
    return (
      <div className="edit__dropdown">
        <button
          className="edit__dropdown-header-button"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ backgroundImage: `url(${budgetsDots})` }}
        ></button>
        <div
          className={
            menuOpen ? "edit__dropdown-menu" : "edit__dropdown-menu-close"
          }
        >
          <button
            className="edit__dropdown-button"
            type="buttton"
            // onClick={() => handleEditBudget(category)}
          >
            Edit Pot
          </button>
          <button
            className="edit__dropdown-button"
            type="buttton"
            // onClick={() => handleDeleteBudget(category)}
          >
            Delete Pot
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="pots">
      <div className="pots__header">
        <h2 className="pots__header-title">Pots</h2>
        <button className="pots__header-button" type="button">
          + Add New Pot
        </button>
      </div>
      <div className="pots__info">
        <ul className="pots__info-list">
          {data.pots.map((pots, index) => {
            return (
              <li key={pots.name} className="pots__info-elements">
                <div className="pots__info-list-item-header">
                  <div
                    className="pots__info-list-item-header-dot"
                    style={{ backgroundColor: pots.theme }}
                  ></div>
                  <p className="pots__info-list-item-header-title">
                    {pots.name}
                  </p>

                  <EditDropdown
                    name={pots.name}
                    maximum={pots.target.toFixed(2)}
                  />
                </div>
                <div className="pots__info-list-item-money">
                  <div className="pots__info-list-item-money-div">
                    <div className="pots__info-list-item-money-text">
                      <p className="pots__info-list-item-money-saved">
                        Total Saved
                      </p>
                      <p className="pots__info-list-item-money-saved-num">
                        ${pots.total.toFixed(2)}
                      </p>
                    </div>
                    <div className="canvas-div">
                      <canvas
                        id={`myBar2-${index}`}
                        className="pots__info-left-elements-item-money-canvas"
                      ></canvas>
                      <div className="pots__info-list-item-money-saved-prasentage">
                        <p className="pots__info-list-item-money-saved-prasentage-pra">
                          {((pots.total / pots.target) * 100).toFixed(2)}%
                        </p>
                        <p className="pots__info-list-item-money-saved-prasentage-total">
                          Target of ${pots.target.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pots__buttons">
                  <button className="pots__buttons-add">+ Add Money</button>

                  <button className="pots__buttons-add">Withdraw</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default Pots;
