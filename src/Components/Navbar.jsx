import { use } from "react";
import MyContainer from "./MyContainer";
import { ThemeContext } from "./../Providers/ThemeContext";
import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import { NavLink } from "react-router";
import { RiMenu2Line } from "react-icons/ri";

const Navbar = () => {
  const { isDark, toggleTheme } = use(ThemeContext);
  const Links = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `relative px-1 py-1 rounded-md 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-0.5 after:transition-all after:duration-300 
        ${
          isActive
            ? "after:w-full dark:after:bg-orange-400 font-semibold text-blue-600 dark:text-orange-400"
            : "after:w-0 after:bg-orange-600 dark:after:bg-orange-400 hover:after:w-full hover:text-blue-600 dark:hover:text-orange-400"
        }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/portfolio"
        className={({ isActive }) =>
          `relative px-1 py-1 rounded-md 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-0.5 after:transition-all after:duration-300 
        ${
          isActive
            ? "after:w-full after:bg-orange-600 dark:after:bg-orange-400 font-semibold text-blue-600 dark:text-orange-400"
            : "after:w-0 after:bg-orange-600 dark:after:bg-orange-400 hover:after:w-full hover:text-blue-600 dark:hover:text-orange-400"
        }`
        }
      >
        Portfolio
      </NavLink>

      <NavLink
        to="/hire-me"
        className={({ isActive }) =>
          `relative px-1 py-1 rounded-md 
        bg-white dark:bg-transparent 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-0.5 after:transition-all after:duration-300 
        ${
          isActive
            ? "after:w-full after:bg-orange-600 dark:after:bg-orange-400 font-semibold text-blue-600 dark:text-orange-400"
            : "after:w-0 after:bg-orange-600 dark:after:bg-orange-400 hover:after:w-full hover:text-blue-600 dark:hover:text-orange-400"
        }`
        }
      >
        Hire Me
      </NavLink>

      <NavLink
        to="/contactUs"
        className={({ isActive }) =>
          `relative mx-3 py-2 rounded-md 
        bg-white dark:bg-transparent 
        after:content-[''] after:absolute after:left-0 after:bottom-0 
        after:h-0.5 after:transition-all after:duration-300 
        ${
          isActive
            ? "after:w-full after:bg-orange-600 dark:after:bg-orange-400 font-semibold text-blue-600 dark:text-orange-400"
            : "after:w-0 after:bg-orange-600 dark:after:bg-orange-400 hover:after:w-full hover:text-blue-600 dark:hover:text-orange-400"
        }`
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <div className="bg-base-100 shadow-sm">
      <MyContainer>
        <div className="navbar ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <RiMenu2Line size={20} />
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-medium"
              >
                {Links}
              </ul>
            </div>
            <a className="text-xl font-bold hidden md:flex">S-Code</a>
          </div>
          <div className="navbar-center hidden md:flex">
            <ul className="menu menu-horizontal px-1 flex gap-5 items-center font-medium">
              {Links}
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">
              download Cv <MdOutlineFileDownload size={18} />
            </a>
            <div className="ml-4">
              {isDark ? (
                <div className="text-[#EBD8BA] shadow">
                  <IoMdMoon size={20} onClick={toggleTheme} />
                </div>
              ) : (
                <div className="cursor-pointer">
                  <IoMdSunny
                    size={20}
                    className="text-orange-400"
                    onClick={toggleTheme}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </MyContainer>
    </div>
  );
};

export default Navbar;
