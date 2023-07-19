import * as yup from "yup";

export const getInTouchFormSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid Email Address")
    .required("Email Address is required"),
  message: yup.string().required("Message is required"),
});
