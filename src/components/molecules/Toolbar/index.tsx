import React from "react";
import { Toolbar as MuiToolbar } from "@material-ui/core";
import SearchInput from "../../atoms/SearchInput";

const Toolbar = () => {
  return (
    <MuiToolbar>
      <SearchInput />
    </MuiToolbar>
  );
};

export default Toolbar;
