import * as Yup from "yup";

const supplierValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  //   address: Yup.string().required("address is required"),
  phone: Yup.number().required("phone number is required"),
});

export default supplierValidationSchema;
