import React from "react";
import { FormControl, InputLabel, MenuItem, Grid } from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form as FormikForm, Field } from "formik";
import { TextField, Select } from "formik-material-ui";
import { DatePicker } from "formik-material-ui-pickers";
import DialogButton from "../../atoms/DialogButton";
import { categories } from "../../../data/categories";
import { useStyles } from "./styles";
import {
  closeAddExpenseModal,
  closeEditExpenseModal,
  selectIsAddExpenseModalOpen,
  selectIsEditExpenseModalOpen,
  addExpense,
  selectNewOrEditedExpense,
  editExpense,
} from "../../../slices/ExpensesSlice";
import {
  ErrorTypes,
  DataIdTypes,
  SingleExpenseInterface,
} from "../../../interfaces";

interface FormProps {
  formType: "add" | "edit";
}

const Form: React.FC<FormProps> = ({ formType }) => {
  const dispatch = useDispatch();
  const isAddExpenseModalOpen = useSelector(selectIsAddExpenseModalOpen);
  const isEditExpenseModalOpen = useSelector(selectIsEditExpenseModalOpen);
  const newOrEditExpense = useSelector(selectNewOrEditedExpense);
  const classes = useStyles();

  const handleSubmit = (values: SingleExpenseInterface) => {
    if (isAddExpenseModalOpen) {
      dispatch(addExpense({ ...values, id: Math.random()}));
      dispatch(closeAddExpenseModal());
    } else if (isEditExpenseModalOpen) {
      dispatch(editExpense(values));
      dispatch(closeEditExpenseModal());
    }
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Formik
        initialValues={newOrEditExpense}
        validate={(values) => {
          const errors: ErrorTypes = {};
          if (!values.expense.trim()) {
            errors.expense = "Expense is required";
          }
          if (!values.cost) {
            errors.cost = "Cost is required";
          }
          return errors;
        }}
        onSubmit={values => handleSubmit(values)}
      >
        {({ submitForm, resetForm }) => (
          <FormikForm className={classes.root}>
            <Field
              fullWidth
              variant="outlined"
              label="Expense"
              name={DataIdTypes.Expense}
              component={TextField}
            />

            <Field
              variant="outlined"
              label="Cost"
              name={DataIdTypes.Cost}
              type="number"
              fullWidth
              component={TextField}
              InputProps={{ inputProps: { min: 0 } }}
            />

            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Field
                component={Select}
                label="Category"
                name={DataIdTypes.Category}
              >
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
              name={DataIdTypes.Date}
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
                  type="button"
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
