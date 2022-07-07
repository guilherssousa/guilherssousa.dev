import React from "react";

import useTheme from "hooks/useTheme";

interface Props {
  isOpen: boolean;
}

const ThemePicker: React.FC<Props> = ({ isOpen }) => {
  const { availableThemes, theme, setTheme } = useTheme();

  console.log(theme);

  return (
    <div
      className={`flex items-center gap-x-4 overflow-hidden justify-center bg-stone-800 w-full border-b border-stone-800 duration-300 relative top-0 z-20 ease-in-out h-32 max-h-0 transition-[max-height] ${
        isOpen ? "max-h-32" : ""
      }`}
      hidden={!isOpen}
    >
      {availableThemes.map((t) => (
        <button
          key={t.slug}
          className={`flex border border-stone-800 cursor-pointer items-center flex-col rounded-md p-4 ${
            t.slug === theme.slug ? "border-2 border-orange-400" : ""
          }
            ${t.background} ${t.textColor}
          `}
          onClick={() => setTheme(t.slug)}
        >
          <div className="font-bold">{t.name}</div>
        </button>
      ))}
    </div>
  );
};

export default ThemePicker;
