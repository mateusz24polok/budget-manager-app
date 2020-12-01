import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";

interface AddExpenseButtonProps {
  onClick: () => void;
}

const AddExpenseButton: React.FC<AddExpenseButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      startIcon={<Add />}
      color="primary"
      variant="contained"
    >
      Add Item
    </Button>
  );
};

export default AddExpenseButton;
