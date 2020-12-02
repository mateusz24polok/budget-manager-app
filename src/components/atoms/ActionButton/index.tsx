import React from "react";
import { IconButton } from "@material-ui/core";

interface ActionButtonProps {
  children: React.ReactElement;
  color: "primary" | "secondary";
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, color, onClick }) => {
  return (
    <IconButton onClick={onClick} size="small" color={color}>
      {children}
    </IconButton>
  );
};

export default ActionButton;
