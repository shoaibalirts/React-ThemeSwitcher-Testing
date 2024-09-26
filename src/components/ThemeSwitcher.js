import React, { useState } from "react";

function ThemeSwitcher() {
  const [isLightMode, setIsLightMode] = useState(true);

  function handleThemeToggle() {
    setIsLightMode((prevMode) => !prevMode);
  }

  return (
    <div className={isLightMode ? "light-mode" : "dark-mode"}>
      <button onClick={handleThemeToggle}>
        {isLightMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
