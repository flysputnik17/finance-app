import { useEffect, useRef, useState } from "react";
import "./Pots.css";
import Chart from "chart.js/auto";
import data from "../../../data.json";
import { budgetsDots } from "../../Utils/constants";

import BudgetsModalContext from "../../contexts/BudgetsModalContext";
import PopUpModalInfo from "../PopUpWithForm/PopUpModalInfo";
import BudgetContext from "../../contexts/BudgetContext";
const Pots = () => {
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
  const EditDropdown = (name) => {
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
            onClick={() => handleEditPot(name)}
          >
            Edit Pot
          </button>
          <button
            className="edit__dropdown-button"
            type="buttton"
            onClick={() => handleDeletePot(name)}
          >
            Delete Pot
          </button>
        </div>
      </div>
    );
  };

  const handleAddPots = () => {
    setActiveModal(true);
    setModalToOpen({
      modalKeyWord: "addPots",
      modalTitle: "Add New Pot",
      modalContent:
        "Create a pot to set savings targets. These can help keep you on track as you save for special purchases.",
      modalMax: "",
      modalButton: "Add Pot",
    });
  };
  const handleEditPot = (name) => {
    setActiveModal(true);
    setModalToOpen({
      modalKeyWord: "editPot",
      modalTitle: `Edit "${name.name}" Pot?`,
      modalContent:
        "If your saving targets change, feel free to update your pots.",
      modalMax: `$ ${name.target}`,
      modalButton: "Save Changes",
    });
  };

  const handleDeletePot = (name) => {
    setActiveModal(true);
    setModalToOpen({
      modalKeyWord: "deletePot",
      modalTitle: `Delete "${name.name}" Pot?`,
      modalContent:
        "Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever.",
      modalButton: "Yes, Confirm Deletion",
    });
  };

  const handleWithdraw = (name) => {
    setActiveModal(true);
    setModalToOpen({
      modalKeyWord: "Withdraw",
      modalTitle: `Withdraw from "${name.name}"?`,
      modalContent:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.",
      modalButton: "Confirm Withdrawal",
    });
  };

  const handleAddMoney = (name) => {
    setActiveModal(true);
    setModalToOpen({
      modalKeyWord: "addMoney",
      modalTitle: `Add to "${name.name}"?`,
      modalContent:
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus  hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet.",
      modalButton: "Confirm Addition",
    });
  };

  const closeActiveModal = () => {
    setActiveModal(false);
  };

  const AddNewPot = (newPot) => {
    data.pots.push(newPot);
  };

  return (
    <div className="pots">
      <div className="pots__header">
        <h2 className="pots__header-title">Pots</h2>
        <button
          className="pots__header-button"
          type="button"
          onClick={handleAddPots}
        >
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
                  <button
                    className="pots__buttons-add"
                    type="button"
                    onClick={() => handleAddMoney(pots)}
                  >
                    + Add Money
                  </button>

                  <button
                    className="pots__buttons-add"
                    type="button"
                    onClick={() => handleWithdraw(pots)}
                  >
                    Withdraw
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <BudgetsModalContext.Provider value={activeModal}>
        <BudgetContext.Provider value={modalToOpen}>
          <PopUpModalInfo onClose={closeActiveModal} AddNewPot={AddNewPot} />
        </BudgetContext.Provider>
      </BudgetsModalContext.Provider>
    </div>
  );
};
export default Pots;
