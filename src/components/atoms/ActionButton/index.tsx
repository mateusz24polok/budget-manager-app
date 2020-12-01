import React from "react";
import { IconButton } from "@material-ui/core";

interface ActionButtonProps {
  children: React.ReactElement;
  color: "primary" | "secondary";
}

const ActionButton: React.FC<ActionButtonProps> = ({ children, color }) => {
  return (
    <IconButton size="small" color={color}>
      {children}
    </IconButton>
  );
};

export default ActionButton;
