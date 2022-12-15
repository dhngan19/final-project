import { FormikProps } from "formik";

export interface CustomTextFieldProps {
    formik: FormikProps<any>;
    showRequireSymbol?: boolean;
}