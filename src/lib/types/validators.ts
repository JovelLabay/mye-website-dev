import * as yup from "yup";

export const getInTouchFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email Address is required"),
  message: yup.string().required("Message is required"),
});

export const joinourTeamFormSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email Address is required"),
  message: yup.string().required("Message is required"),
});
