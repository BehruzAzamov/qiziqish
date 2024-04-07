import { Link } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const themes = { winter: "winter", dracula: "dracula" };

function darkModeFromLocalStorage() {
  return localStorage.getItem("mode") || themes.winter;
}

function Navbar() {
  const [theme, setTheme] = useState(darkModeFromLocalStorage());

  const handleClick = () => {
    const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem("mode", theme);
  }, [theme]);
  return (
    <div className="navbar mb-10">
      <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center">
        <Link className="btn btn-primary btn-lg font-bold text-2xl px-2" to="/">
          MyK
        </Link>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox"  onClick={handleClick} defaultChecked={theme=='winter' ? false : true}/>

          {/* sun icon */}
          <IoSunnyOutline className="swap-on w-8 h-8 fill-current " />

          {/* moon icon */}
          <IoMoonOutline className="swap-off w-8 h-8 fill-current " />
        </label>

        <Link to="/create" className="btn ml-[-700px] btn-secondary">
          Create
        </Link>
      </div>
    </div>
  );
}

export default Navbar;