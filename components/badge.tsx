import React from "react";

interface Props {
  label: string;
  children: React.ReactNode;
}

const Badge: React.FC<Props> = ({ label, children }) => {
  return (
    <div>
      <span className="bg-orange-800 text-orange-300 rounded-sm font-semibold px-2 mr-2 uppercase">
        {label}
      </span>
      {children}
    </div>
  );
};

export default Badge;
