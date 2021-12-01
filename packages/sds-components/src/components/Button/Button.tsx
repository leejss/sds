import React from "react";
import "./Button.scss";
import cx from "classnames";

export interface ButtonProps {
  role: "primary" | "secondary";
}

export const Button: React.FC<ButtonProps> = ({ children, role }) => {
  const classNames = cx(role, "btn");
  return <button className={classNames}>{children}</button>;
};
