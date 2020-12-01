import { Button } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import React from "react";

const AddExpenseButton = () => {
  return (
    <Button startIcon={<Add />} color="primary" variant="contained">
      Add Item
    </Button>
  );
};

export default AddExpenseButton;
