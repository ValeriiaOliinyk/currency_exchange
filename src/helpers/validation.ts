import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  fromAmount: Yup.number().required("Field is required"),
  toAmount: Yup.number().required("Field is required"),
});
