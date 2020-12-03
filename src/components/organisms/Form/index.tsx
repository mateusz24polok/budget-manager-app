import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  makeStyles,
  Theme,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const categories = [
  "category1",
  "category2",
  "category3",
  "category4",
  "category5",
];

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: "16px 0",
      display: "flex",
      flexDirection: "column",
    },
  },
}));

const Form = () => {
  const classes = useStyles();
  return (
      <form className={classes.root}>
        <TextField
          fullWidth
          variant="outlined"
          label="Expense"
          name="fullName"
        />

        <TextField
          variant="outlined"
          label="Cost"
          name="fullName"
          type="number"
          fullWidth
        />

        <FormControl fullWidth variant="outlined">
          <InputLabel>Category</InputLabel>
          <Select label="Category">
            <MenuItem value="">None</MenuItem>
            {categories.map((item) => (
              <MenuItem key={item} value={item}>
                {item}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            fullWidth
            disableToolbar
            variant="inline"
            inputVariant="outlined"
            format="MMM/dd/yyyy"
            name="hireDate"
            label="Hire Date"
            onChange={() => {}}
            value={new Date()}
          />
        </MuiPickersUtilsProvider>
      </form>
  );
};

export default Form;
