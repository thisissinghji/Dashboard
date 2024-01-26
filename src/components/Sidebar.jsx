import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiAffinity } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
const Sidebar = () => {
  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2";
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 text-gray-700 dark:text-gray-200 dark:hover:text-black m-2 hover:bg-light-gray";
    const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={() => setActiveMenu(false)}
              className="items-center ml-3 mt-4 flex text-2xl font-extrabold tracking-tight gap-3 dark:text-white text-slate-900"
            >
              <SiAffinity />
              <span>Agora</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={()=>setActiveMenu((prevActiveMenu)=>!prevActiveMenu)}
                className="text-xl rounded-full mt-4 block p-3 hover:bg-light-gray "
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="m-3 mt-4 text-gray-400 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    onClick={() => {}}
                    key={link.name}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
