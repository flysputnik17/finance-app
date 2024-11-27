import { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import data from "../../../data.json";
import "./Budgets.css";
import OverviewBudgets from "../Overview/OverviewBudgets/OverviewBudgets";
// import mobileScreenContext from "../../contexts/MobileScreenContext";
import PopUpModalInfo from "../PopUpWithForm/PopUpModalInfo";

import { budgetsDots, seeDetailsButton } from "../../Utils/constants";

import BudgetsModalContext from "../../contexts/BudgetsModalContext";
import BudgetContext from "../../contexts/BudgetContext";

const Budgets = ({ transactionsRender }) => {
  const [activeModal, setActiveModal] = useState(false);
  const [modalToOpen, setModalToOpen] = useState({
    modalKeyWord: "",
    modalTitle: "",
    modalContent: "",
    modalMax: "",
    modalButton: "",
  });

  const chartRefs = useRef([]);

  useEffect(() => {
    data.budgets.forEach((budget, index) => {
      const chartData = {
        labels: [budget.category],
        datasets: [
          {
            data: [budget.spent],
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
            borderWidth: 0,

            maxBarThickness: 100,
            borderRadius: 10,
            responsive: true,
            maintainAspectRatio: false, // Ensure the chart takes all available space
            scales: {
              x: {
                grid: {
                  display: true,
                },
                ticks: {
                  display: true, // Hide the y-axis labels to make the bar take all the height
                },
                beginAtZero: true,
                max: data.budgets[index].maximum,
              },
              y: {
                grid: {
                  display: false,
                },
                ticks: {
                  display: false, // Hide the y-axis labels to make the bar take all the height
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
            backgroundColor: "transparent", // Set the background color to transparent
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
  useEffect(() => {
    if (!activeModal) return;

    const handleExit = (evt) => {
      if (evt.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleOverlay = (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleExit);
    document.addEventListener("mousedown", handleOverlay);

    return () => {
      document.removeEventListener("keydown", handleExit);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [activeModal]);
  const handleDateConversion = (date) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return new Date(date)
      .toLocaleDateString("en-US", options)
      .replace(/ /g, " ");
  };

  const latestSpending = (item, index) => (
    <li key={index} className="budgets__trans-continer-list-item">
      <div className="budgets__trans-continer-list-item-main">
        <img
          className="overview__trans-continer-list-item-icon"
          src={item.avatar}
          alt="avatar"
        />
        <p className="overview__trans-continer-list-item-name">{item.name}</p>
      </div>
      <div className="budgets__trans-continer-list-item-info">
        <p className="budgets__trans-continer-list-item-info-num">
          ${item.amount}
        </p>
        <p className="budgets__trans-continer-list-item-info-date">
          {handleDateConversion(item.date)}
        </p>
      </div>
    </li>
  );

  const closeActiveModal = () => {
    setActiveModal(false);
  };

  const handleAddBudget = () => {
    setActiveModal(true);
    setModalToOpen({
      modalKeyWord: "addBudget",
      modalTitle: "Add New Budget",
      modalContent:
        "Choose a category to set a spending budget. These categories can help you monitor spending.",
      modalMax: "",
      modalButton: "Add Budget",
    });
  };

  const handleEditBudget = (category) => {
    setActiveModal(true);
    setModalToOpen({
      modalKeyWord: "editBudget",
      modalTitle: `Edit "${category.category}" Budget?`,
      modalContent:
        "As your budgets change, feel free to update your spending limits.",
      modalMax: `$ ${category.maximum}`,
      modalButton: "Save Changes",
    });
  };
  const handleDeleteBudget = (category) => {
    console.log("Delete budget");
    setActiveModal(true);
    setModalToOpen({
      modalKeyWord: "deleteBudget",
      modalTitle: `Delete "${category.category}" Budget?`,
      modalContent:
        "Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.",
      modalButton: "Yes, Confirm Deletion",
    });
  };

  const EditDropdown = (category) => {
    const [menuOpen, setMenuOpen] = useState(false);

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
            onClick={() => handleEditBudget(category)}
          >
            Edit Budget
          </button>
          <button
            className="edit__dropdown-button"
            type="buttton"
            onClick={() => handleDeleteBudget(category)}
          >
            Delete Budget
          </button>
        </div>
      </div>
    );
  };

  const AddNewBudget = (newBudget) => {
    data.budgets.push(newBudget);
  };

  return (
    <div className="budgets">
      <div className="budgets__header">
        <h2 className="budgets__header-title">Budgets</h2>
        <button
          className="budgets__header-add-button"
          type="button"
          onClick={handleAddBudget}
        >
          + Add New Budget
        </button>
      </div>
      <div className="budgets__info">
        <OverviewBudgets />
        <div className="budgets__info-left">
          <ul className="budgets__info-left-elements">
            {data.budgets.map((budget, index) => {
              // Filter and sort transactions by date for the current category
              const filteredTransactions = data.transactions
                .filter(
                  (transaction) => transaction.category === budget.category
                )
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 3); // Get the latest 3 transactions

              return (
                <li
                  key={budget.category}
                  className="budgets__info-left-elements-item"
                >
                  <div className="budgets__info-left-elements-item-header">
                    <div
                      className="budgets__info-left-elements-item-header-dot"
                      style={{ backgroundColor: budget.theme }}
                    ></div>
                    <p className="budgets__info-left-elements-item-header-title">
                      {budget.category}
                    </p>
                    <EditDropdown
                      category={budget.category}
                      maximum={budget.maximum.toFixed(2)}
                    />
                  </div>
                  <div className="budgets__info-left-elements-item-money">
                    <p className="budgets__info-left-elements-item-money-max">
                      Maximum of ${budget.maximum.toFixed(2)}
                    </p>
                    <canvas
                      id={`myBar-${index}`}
                      className="budgets__info-left-elements-item-money-canvas"
                    ></canvas>
                    <div className="budgets__info-left-elements-item-div">
                      <div className="budgets__budgets-main-info-list-item-info">
                        <div
                          className="budgets__budgets-main-info-list-item-info-color"
                          style={{ backgroundColor: budget.theme }}
                        ></div>
                        <p className="budgets__budgets-main-info-list-item-title">
                          {budget.category}
                        </p>
                        <p className="budgets__budgets-main-info-list-item-num">
                          ${budget.spent.toFixed(2)}
                        </p>
                      </div>
                      <div className="budgets__budgets-main-info-list-item-info">
                        <div className="budgets__budgets-main-info-list-item-info-color"></div>
                        <p className="budgets__budgets-main-info-list-item-title">
                          Remaining
                        </p>
                        <p className="budgets__budgets-main-info-list-item-num">
                          ${(budget.maximum - budget.spent).toFixed(2)}
                        </p>
                      </div>
                    </div>
                    <div className="budgets__info-left-elements-item-spending">
                      <div className="budgets__info-left-elements-item-spending-div">
                        <h2 className="budgets__info-left-elements-item-spending-div-title">
                          Latest Spending
                        </h2>
                        <button
                          className="budgets__info-left-elements-item-spending-div-button"
                          onClick={transactionsRender}
                        >
                          See All
                          <img
                            src={seeDetailsButton}
                            className="budgets__info-left-elements-item-spending-div-button-img"
                          ></img>
                        </button>
                      </div>
                      <ul className="budgets__info-left-elements-item-spending-list">
                        {filteredTransactions.map((item, index) =>
                          latestSpending(item, index)
                        )}
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <BudgetsModalContext.Provider value={activeModal}>
        <BudgetContext.Provider value={modalToOpen}>
          <PopUpModalInfo
            onClose={closeActiveModal}
            AddNewBudget={AddNewBudget}
          />
        </BudgetContext.Provider>
      </BudgetsModalContext.Provider>
    </div>
  );
};

export default Budgets;
