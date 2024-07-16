import { Box, Button, TextField, useMediaQuery, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../components/Header";
import { tokens } from "../../theme";
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  mobileNo: "",
  address1: "",
  address2: "",
};

const mobNoRegexExp = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/;
const userSchema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email is required"),
  mobileNo: yup
    .string()
    .matches(mobNoRegexExp, "Mobile Number is Invalid")
    .required("Mobile Number is required"),
  address1: yup.string().required("Address 1 is required"),
  address2: yup.string().required("Address 2 is required"),
});
const Form = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <Box m="20px">
      <Header title="CREATE USER" subTitle="Create a new user profile" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0,1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              {/* FIRST NAME */}
              <TextField
                variant="filled"
                type="text"
                label="First Name"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              {/* LAST NAME */}
              <TextField
                variant="filled"
                type="text"
                label="Last Name"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              {/* EMAIL ADDRESS */}
              <TextField
                variant="filled"
                type="text"
                label="Email Address"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              {/* MOBILE NUMBER */}
              <TextField
                variant="filled"
                type="number"
                label="Mobile Number"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.mobileNo}
                name="mobileNo"
                error={!!touched.mobileNo && !!errors.mobileNo}
                helperText={touched.mobileNo && errors.mobileNo}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              {/* ADDRESS 1 */}
              <TextField
                variant="filled"
                type="text"
                label="Address 1"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address1}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{
                  gridColumn: "span 2",
                }}
              />
              {/* ADDRESS 2 */}
              <TextField
                variant="filled"
                type="text"
                label="Address 2"
                autoComplete="off"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.address2}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{
                  gridColumn: "span 2",
                }}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end" mt="10px">
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: colors.greenAccent[700],
                }}
              >
                Create New User
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
