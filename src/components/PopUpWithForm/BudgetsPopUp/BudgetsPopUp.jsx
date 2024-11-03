import { useState, useEffect } from "react";

import PopUpWithForm from "../PopUpWithForm";
import { categoryOptions, theme } from "../../../Utils/filterOptions";

const AddBudgetPopUp = ({ onClose, isOpen, onSubmit }) => {
  const [MaximumSpend, setMaximumSpend] = useState("");
  const handleMaximumSpendChange = (e) => {
    const value = e.target.value;
    setMaximumSpend(value);
  };
  useEffect(() => {
    if (MaximumSpend.length <= 0) {
      document.getElementById("addBudgetButton").disabled = true;
    } else {
      document.getElementById("addBudgetButton").disabled = false;
    }
  });
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

  return (
    <PopUpWithForm
      titleText="Add New Budget"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmit}
    >
      <p className="modal__text">
        Choose a category to set a spending budget. These categories can help
        you monitor spending.
      </p>
      <label htmlFor="Budget Category" className="modal__label">
        Budget Category
        <select className="modal__select">
          {renderSelectOptions(categoryOptions)}
        </select>
      </label>
      <label htmlFor="Maximum Spend" className="modal__label">
        Maximum Spend
        <input
          className="modal__input"
          id="MaximumSpend"
          name="Maximum Spend"
          type="text"
          placeholder="$ e.g. 2000"
          value={MaximumSpend}
          onChange={handleMaximumSpendChange}
        />
      </label>
      <label htmlFor="Theme" className="modal__label">
        Theme
        <CustomSelect />
      </label>

      <button
        type="submit"
        disabled
        id="addBudgetButton"
        className="modal__button"
        onClick={onClose}
      >
        Add Budget
      </button>
    </PopUpWithForm>
  );
};

export default AddBudgetPopUp;
