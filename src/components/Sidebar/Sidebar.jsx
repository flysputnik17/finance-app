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
  budgetsender,
  potsRender,
  billsRender,
  minimize,
}) => {
  const miniButton = useContext(minimizeButtonContext);
  return (
    <section
      className={
        miniButton
          ? "sidebar__minimized animate__animated animate__fadeInRight"
          : "sidebar animate__animated animate__fadeInLeft"
      }
    >
      {miniButton ? (
        <SidebarMini
          overviewRender={overviewRender}
          transactionsRender={transactionsRender}
          budgetsender={budgetsender}
          potsRender={potsRender}
          billsRender={billsRender}
          minimize={minimize}
        />
      ) : (
        <SidebarDefault
          overviewRender={overviewRender}
          transactionsRender={transactionsRender}
          budgetsender={budgetsender}
          potsRender={potsRender}
          billsRender={billsRender}
          minimize={minimize}
        />
      )}
    </section>
  );
};

export default Sidebar;
