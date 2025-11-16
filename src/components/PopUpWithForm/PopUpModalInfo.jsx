import { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

import data from "../../../data.json";

import PopUpWithForm from "./PopUpWithForm";
import { categoryOptions, theme } from "../../Utils/filterOptions";

import BudgetsModalContext from "../../contexts/BudgetsModalContext";
import BudgetContext from "../../contexts/BudgetContext";

const PopUpModalInfo = ({ onClose, onSubmit }) => {
  const activeModal = useContext(BudgetsModalContext);
  const modalInfo = useContext(BudgetContext);

  const [MaximumSpend, setMaximumSpend] = useState("");
  const [disabled, setDisabled] = useState(true);

  const [potsAmount, setPotsAmount] = useState(modalInfo.modalMax);

  const handleMaximumSpendChange = (e) => {
    setMaximumSpend("");
    const value = e.target.value;
    setMaximumSpend(value);
  };

  const handlePotsChange = (e) => {
    const value = e.target.value;
    setPotsAmount(value);
  };

  useEffect(() => {
    if (MaximumSpend.length <= 0 && modalInfo.modalKeyWord !== "deleteBudget") {
      document.getElementById("addBudgetButton").disabled = true;
      setDisabled(true);
    } else {
      document.getElementById("addBudgetButton").disabled = false;
      setDisabled(false);
    }
  });

  useEffect(() => {
    if (modalInfo.modalKeyWord === "editBudget") {
      setMaximumSpend(modalInfo.modalMax || "");
    }
  }, [modalInfo.modalKeyWord, modalInfo.modalMax]);

  useEffect(() => {
    if (!activeModal) setMaximumSpend("");
  }, [activeModal]);

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

  function CustomSelect() {
    const [selected, setSelected] = useState(theme[0]);
    const [menuOpen, setMenuOpen] = useState(false);
    return (
      <div className="custom-select">
        <div
          className="custom-select-trigger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            style={{
              display: "inline-block",
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              backgroundColor: selected.theme,
              marginRight: "8px",
            }}
          ></span>
          {selected.value}
        </div>

        {/* Options */}
        <div className={menuOpen ? "custom-options-open" : "custom-options"}>
          {theme.map((option) => (
            <div
              key={option.value}
              className="custom-option"
              onClick={() => setSelected(option)}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "16px",
                  height: "16px",
                  borderRadius: "50%",
                  backgroundColor: option.theme,
                  marginRight: "8px",
                }}
              ></span>
              {option.value}
            </div>
          ))}
        </div>
      </div>
    );
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <PopUpWithForm
      titleText={modalInfo.modalTitle}
      activeModal={activeModal}
      onClose={onClose}
      onSubmit={handelSubmit}
    >
      <p className="modal__text">{modalInfo.modalContent}</p>
      {modalInfo.modalKeyWord === "deleteBudget" ||
      modalInfo.modalKeyWord === "deletePot" ? null : (
        <>
          {modalInfo.modalKeyWord === "addMoney" ||
          modalInfo.modalKeyWord === "Withdraw" ? (
            <>
              <div className="pots-modal-div">
                <div className="pots-modal-div-upper">
                  <div className="modal-div-upper__info">
                    <p className="modal-div-upper__info-text">New Amount</p>
                    <p className="modal-div-upper__info-num">
                      ${modalInfo.modalMax}
                    </p>
                  </div>
                  <div className="modal-div-upper__bar">
                    <span className="modal-div-upper__bar-span"></span>
                    <div className="modal-div-upper__bar-num">
                      <p className="modal-div-upper__bar-num-text">
                        %
                        {(
                          (100 * modalInfo.modalMax) /
                          modalInfo.modalTarget
                        ).toFixed(2)}
                      </p>
                      <p className="modal-div-upper__bar-num-text-tar">
                        ${modalInfo.modalTarget}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pots-modal-div-lower">
                  <p className="pots-modal-div-lower-text">
                    Amount to Withdraw
                  </p>
                  <label htmlFor="Maximum Spend" className="modal__label">
                    <input
                      className="modal__input"
                      id="Withdraw"
                      name="Amount to Withdraw"
                      type="number"
                      value={potsAmount}
                      onChange={handlePotsChange}
                    />
                  </label>
                </div>
              </div>
            </>
          ) : (
            <>
              {modalInfo.modalKeyWord === "addPots" ? (
                <>
                  <label htmlFor="Budget Category" className="modal__label">
                    Pot Name
                    <input
                      className="modal__input"
                      id="PotName"
                      name="Pot Name"
                      type="text"
                      maxLength={30}
                      minLength={1}
                      placeholder="e.g. Holiday"
                      required
                    ></input>
                  </label>
                </>
              ) : (
                <>
                  <label htmlFor="Budget Category" className="modal__label">
                    Budget Category
                    <select className="modal__select">
                      {renderSelectOptions(categoryOptions)}
                    </select>
                  </label>
                </>
              )}
              <label htmlFor="Maximum Spend" className="modal__label">
                {modalInfo.modalKeyWord === "addPots"
                  ? "Target"
                  : "Maximum Spend"}
                <input
                  className="modal__input"
                  id="MaximumSpend"
                  name="Maximum Spend"
                  type="number"
                  placeholder="$ e.g. 2000"
                  value={MaximumSpend}
                  onChange={handleMaximumSpendChange}
                />
              </label>
              <label htmlFor="Theme" className="modal__label">
                Theme
                <CustomSelect />
              </label>
            </>
          )}
        </>
      )}

      <button
        type="submit"
        disabled
        id="addBudgetButton"
        className={
          modalInfo.modalKeyWord === "deleteBudget" ||
          modalInfo.modalKeyWord === "deletePot"
            ? "modal__button-delete"
            : disabled
            ? "modal__button-dis animate__animated animate__headShake animate__delay-0.9s"
            : "modal__button"
        }
        onClick={onClose}
      >
        {modalInfo.modalButton}
      </button>
      {modalInfo.modalKeyWord === "deleteBudget" ||
      modalInfo.modalKeyWord === "deletePot" ? (
        <button
          type="button"
          className="modal__button-delete-back"
          onClick={onClose}
        >
          No, Go Back
        </button>
      ) : null}
    </PopUpWithForm>
  );
};
PopUpModalInfo.propTypes = {
  onClose: PropTypes.func.isRequired,
  activeModal: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default PopUpModalInfo;
