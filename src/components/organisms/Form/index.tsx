import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  makeStyles,
  Grid,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import DialogButton from "../../atoms/DialogButton";
import { useDispatch, useSelector } from "react-redux";
import {
  closeAddExpenseModal,
  closeEditExpenseModal,
  selectIsAddExpenseModalOpen,
  selectIsEditExpenseModalOpen,
  addExpense,
  selectNewOrEditedExpense,
  editExpense,
} from "../../../slices/ExpensesSlice";
import { Formik, Form as FormikForm, Field } from "formik";
import { TextField, Select } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";

interface FormProps {
  formType: "add" | "edit";
}

const categories = ["Electronics", "Grocery", "Bills", "Hobby", "Hygiene"];

const useStyles = makeStyles({
  root: {
    "& .MuiFormControl-root": {
      width: "100%",
      margin: "16px 0",
      display: "flex",
      flexDirection: "column",
    },
  },
});

const Form: React.FC<FormProps> = ({ formType }) => {
  const dispatch = useDispatch();
  const isAddExpenseModalOpen = useSelector(selectIsAddExpenseModalOpen);
  const isEditExpenseModalOpen = useSelector(selectIsEditExpenseModalOpen);
  const newOrEditExpense = useSelector(selectNewOrEditedExpense);
  const classes = useStyles();

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={newOrEditExpense}
        validate={(values) => {}}
        onSubmit={(values, { setSubmitting }) => {
          if (isAddExpenseModalOpen) {
            dispatch(addExpense(values));
            dispatch(closeAddExpenseModal());
          } else if (isEditExpenseModalOpen) {
            dispatch(editExpense(values));
            dispatch(closeEditExpenseModal());
          }
        }}
      >
        {({ submitForm, isSubmitting, touched, errors, resetForm }) => (
          <FormikForm className={classes.root}>
            <Field
              fullWidth
              variant="outlined"
              label="Expense"
              name="expense"
              component={TextField}
            />

            <Field
              variant="outlined"
              label="Cost"
              name="cost"
              type="number"
              fullWidth
              component={TextField}
              InputProps={{ inputProps: { min: 0 } }}
            />

            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Field component={Select} label="Category" name="category">
                <MenuItem value="">None</MenuItem>
                {categories.map((item) => (
                  <MenuItem key={item} value={item}>
                    {item}
                  </MenuItem>
                ))}
              </Field>
            </FormControl>

            <Field
              component={DatePicker}
              fullWidth
              inputVariant="outlined"
              format="MMM/dd/yyyy"
              name="date"
              label="Date"
            />

            <Grid container justify="center" spacing={2}>
              <Grid item xs={5}>
                <DialogButton
                  variant="contained"
                  onClick={resetForm}
                  color="primary"
                  fullWidth
                  type="reset"
                >
                  Reset
                </DialogButton>
              </Grid>
              <Grid item xs={5}>
                <DialogButton
                  variant="contained"
                  onClick={submitForm}
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  {formType === "add" ? "Add" : "Edit"}
                </DialogButton>
              </Grid>
            </Grid>
          </FormikForm>
        )}
      </Formik>
    </MuiPickersUtilsProvider>
  );
};

export default Form;
