import "./Budgets.css";
import OverviewBudgets from "../Overview/OverviewBudgets/OverviewBudgets";

const Budgets = () => {
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
        <div className="budgets__info-left"></div>
      </div>
    </div>
  );
};
export default Budgets;
