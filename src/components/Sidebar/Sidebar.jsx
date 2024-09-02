///REACT imports
import { useContext } from "react";

////style imports
import "animate.css";
import "./Sidebar.css";

///Context imports

import minimizeButtonContext from "../../contexts/MinimizeButtonContext";

///React components import
import SidebarMini from "./SidebarMini/SidebarMini";
import SidebarDefault from "./SidebarDefault/SidebarDefault";

const Sidebar = ({
  overviewRender,
  transactionsRender,
  budgetsRender,
  potsRender,
  billsRender,
  minimize,
}) => {
  const miniButton = useContext(minimizeButtonContext);
  return (
    <section className={miniButton ? "sidebar__minimized" : "sidebar"}>
      {miniButton ? (
        <SidebarMini
          overviewRender={overviewRender}
          transactionsRender={transactionsRender}
          budgetsender={budgetsRender}
          potsRender={potsRender}
          billsRender={billsRender}
          minimize={minimize}
        />
      ) : (
        <SidebarDefault
          overviewRender={overviewRender}
          transactionsRender={transactionsRender}
          budgetsender={budgetsRender}
          potsRender={potsRender}
          billsRender={billsRender}
          minimize={minimize}
        />
      )}
    </section>
  );
};

export default Sidebar;
