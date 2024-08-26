import "./Sidebar.css";

const Sidebar = () => {
  const overviewRender = () => {
    console.log("overviewRender button clicked");
  };
  const transactionsRender = () => {
    console.log("transactionsRender button clicked");
  };
  const budgetsender = () => {
    console.log("budgetsender button clicked");
  };
  const potsRender = () => {
    console.log("potsRender button clicked");
  };
  const billsRender = () => {
    console.log("billsRender button clicked");
  };

  return (
    <section className="sidebar">
      <div className="sidebar__continer">
        <a className="sidebar__continer-logo" href="/">
          finance
        </a>
        <div className="sidebar__continer-butoms">
          <button
            type="button"
            onClick={overviewRender}
            id="overview"
            className="sidebar__continer-buttons-button"
          >
            Overview
          </button>
          <button
            type="button"
            onClick={transactionsRender}
            id="transactions"
            className="sidebar__continer-buttons-button"
          >
            Transactions
          </button>
          <button
            type="button"
            onClick={budgetsender}
            id="budgets"
            className="sidebar__continer-buttons-button"
          >
            Budgets
          </button>
          <button
            type="button"
            onClick={potsRender}
            id="pots"
            className="sidebar__continer-buttons-button"
          >
            Pots
          </button>
          <button
            type="button"
            onClick={billsRender}
            id="bills"
            className="sidebar__continer-buttons-button"
          >
            Recurring Bills
          </button>
        </div>
        <div className="sidebar__continer-minimize">
          <button type="button" className="sidebar__continer-minimize-button">
            Minimize Menu
          </button>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
