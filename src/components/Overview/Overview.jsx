import "./Overview.css";

const Overview = () => {
  return (
    <div className="overview">
      <h1 className="overview__title">Overview</h1>
      <div className="overview__info">
        <div className="overview__info-current">
          <p className="overview__info-current-title">Current Balance</p>
          <p className="overview__info-current-number">$4,836.00</p>
        </div>
        <div className="overview__info-rest">
          <p className="overview__info-rest-title">Income</p>
          <p className="overview__info-rest-number">$3,814.25</p>
        </div>
        <div className="overview__info-rest">
          <p className="overview__info-rest-title">Expenses </p>
          <p className="overview__info-rest-number">$1,700.50</p>
        </div>
      </div>
      <div className="overview__pots"></div>
    </div>
  );
};

export default Overview;
