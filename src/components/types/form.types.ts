export interface FormFieldProps {
    label?: string;
    id?: string;
    error?: string;
}

export interface FormInputProps extends FormFieldProps {
    modelValue: string;
}