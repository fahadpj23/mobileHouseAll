import * as Yup from "yup";

const supplierValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.number()
    .required("phone number is required")
    .min(1000000000, "invalid phone number"),
});

export default supplierValidationSchema;
