import "./App.css";
import Sidebar from "../Sidebar/Sidebar";
import Overview from "../Overview/Overview";

function App() {
  return (
    <div className="page">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main">
        <Overview />
      </div>
    </div>
  );
}

export default App;
