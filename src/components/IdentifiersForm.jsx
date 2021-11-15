import React from "react";
import { Grid, Button, TextField, Container } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../schemas/IdentifiersErrors";
import "../styles.css";

export const IdentifiersForm = () => {
  const initialValues = {
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const test = () => {
    console.log(window.location.pathname);
    console.log(window.location.href);
  };

  return (
    <Container>
      <Grid>
        <Grid style={{ backgroundColor: "white", padding: 15 }} md={12}>
          <legend className="legende">
            <span>Mes identifiants</span>
          </legend>
        </Grid>
        <hr
          style={{
            borderBottom: 1,
            borderColor: "#f86263",
            width: "80%"
          }}
        />
        <Grid
          style={{
            backgroundColor: "white",
            padding: 15
          }}
        >
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {(props) => (
              <Form>
                <Grid container spacing={4}>
                  <Grid item md={3} xs={3} />
                  <Grid item md={6} xs={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      name="email"
                      label="Email"
                      fullWidth
                      error={props.errors.email && props.touched.email}
                      helperText={<ErrorMessage name="email" />}
                      required
                    />
                  </Grid>
                  <Grid item md={3} xs={3} />
                  <Grid item md={3} xs={3} />
                  <Grid item md={6} xs={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      name="confirmEmail"
                      label="Confirmation Email"
                      fullWidth
                      error={
                        props.errors.confirmEmail && props.touched.confirmEmail
                      }
                      helperText={<ErrorMessage name="confirmEmail" />}
                      required
                    />
                  </Grid>
                  <Grid item md={3} xs={3} />
                  <Grid item md={3} xs={3} />
                  <Grid item md={6} xs={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      name="password"
                      label="Password"
                      type="password"
                      fullWidth
                      error={props.errors.password && props.touched.password}
                      helperText={<ErrorMessage name="password" />}
                      required
                    />
                  </Grid>
                  <Grid item md={3} xs={3} />
                  <Grid item md={3} xs={3} />
                  <Grid item md={6} xs={6}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      name="confirmPassword"
                      label="Confirm Password"
                      type="password"
                      fullWidth
                      error={
                        props.errors.confirmPassword &&
                        props.touched.confirmPassword
                      }
                      helperText={<ErrorMessage name="confirmPassword" />}
                      required
                    />
                  </Grid>
                </Grid>
                <Button type="submit" variant="contained" color="primary">
                  Register
                </Button>
              </Form>
            )}
          </Formik>
          <Button variant="contained" color="primary" onClick={test}>
            Register
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
