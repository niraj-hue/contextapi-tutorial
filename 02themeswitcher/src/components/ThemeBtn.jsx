import React from "react";
import useTheme from "../context/theme";

function ThemeBtn() {

    const {themeMode, darkTheme, lightTheme} = useTheme()

    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) darkTheme()
        else lightTheme()
    }

  return (
    <div className="max-w-3xl mx-auto flex items-center justify-end pr-2 p-4">
      <label class="relative inline-flex items-center justify-center cursor-pointer">
        <input 
            class="sr-only peer" 
            type="checkbox" 
            value=""
            onChange={onChangeBtn}
            checked={themeMode === "dark"}
        />
        <div class="w-20 h-10 rounded-full bg-linear-to-r from-yellow-300 to-orange-400 peer-checked:from-blue-400 peer-checked:to-indigo-500 transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-8 after:w-8 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg"></div>
        <span class="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
      </label>
    </div>
  );
}

export default ThemeBtn;
