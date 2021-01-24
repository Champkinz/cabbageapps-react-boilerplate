import React from "react";
export const FormCardTemplate = ({
  title,
  description,
  children,
  isDisabled,
}: {
  title: string;
  description: string;
  children: JSX.Element | JSX.Element[];
  isDisabled?: boolean;
}) => (
  <div className="border rounded p-4 px-6 mt-4 relative">
    {isDisabled && <div className="disabled-card"></div>}
    <p className="font-bold">{title}</p>
    <p className="mb-4">{description}</p>
    <div className="mb-4">{children}</div>
  </div>
);
