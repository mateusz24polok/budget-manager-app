import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { useStyles } from "./styles";

interface SearchInputProps {
  value?: string;
  onChange?: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.margin}
      value={value}
      onChange={onChange}
      variant="outlined"
      label="Find your expense"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
