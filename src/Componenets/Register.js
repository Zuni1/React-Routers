import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import { Formik, Form } from "formik";
import * as yup from 'yup';
import TextEntry from "./TextEntry";

const Register = () => {

    const initialValues = {
        Email: '',
        Password: '',
        ConfirmPassword: '',
    }
    const validate = yup.object({
        Email: yup.string().required().email(),
        Password: yup.string().required().min(6),
        ConfirmPassword: yup.string().required('Confirm Password is a required field')
        .oneOf([yup.ref('Password'), null], "Password doesn't matches")
    })

    const style = {
        box: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#e7f3ff",
            padding: "25px",
        },
        card: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: 700,
            backgroundColor: "#0569c1",
            color: "white",
            paddingLeft: "100px",
            paddingRight: "100px",
            borderRadius: 3,
        },
        gridLeft: {
            backgroundColor: "#ffffff",
            color: "black",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "center",
        },
        form: {
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            width: "100%",
        },
        btn: {
            borderRadius: 10,
            border: 0,
            color: "white",
            padding: "8px",
            width: "100%",
            backgroundColor: "#0569c1",
            margin: "10px",
        },
    };

    return (
        <Box sx={style.box}>
        <Paper sx={style.card} elevation={20}>
            <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold", padding: "30px" }}>
                Report Sign In Form
            </Typography>
            </Box>

            <Grid container>
            <Grid item xs={6} sx={style.gridLeft}>
                <Typography
                    variant="h5"
                    sx={{ color: "#29253d", fontWeight: "bold" }}
                > Sign In </Typography><br /> 
                
                <Formik 
                    initialValues={initialValues}
                    validationSchema={validate}
                    onSubmit={(data, formikHelper) => {
                        console.log(data)
                        formikHelper.resetForm()
                    }}
                > 
                {() => (
                    <Form style={style.form}>
                        <TextEntry
                            name='Email'
                            label='User Email'
                            as={TextField}
                        />
                        <TextEntry
                            name='Password'
                            label='User Password'
                            as={TextField}
                            type='password'
                        />
                        <TextEntry
                            name='ConfirmPassword'
                            label='Confirm Password'
                            as={TextField}
                            type='password'
                        />

                    <Button type="submit" variant="contained" sx={style.btn}>Register</Button>

                    </Form> 
                )}
                </Formik><br />

                <Typography variant="subtitle2" sx={{ color: "#9a9590" }}>
                    Already have an account? <Link to="/login">Log In</Link>
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <img
                    src="../../signup.jpg"
                    style={{ width: "100%", height: "100%" }}
                />
            </Grid>
            </Grid>

            <Typography variant="body2" sx={{ color: "#afd0f2", padding: "40px" }}>
                © 2021 Report Login Form. All rights reserved | Designed by W3Layouts
            </Typography>
        </Paper>
        </Box>
    );
};

export default Register;
