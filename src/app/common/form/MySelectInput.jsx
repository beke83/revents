import React from "react";
import { useField } from "formik";
import { FormField, Label, Select } from "semantic-ui-react";

export default function MySelectInput({ label, ...props }) {
    const [field, meta, helpers] = useField(props);
    return (
        //the error is a string
        // ' !! ': means that we are casting it to a boolean
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <Select
                clearable
                value={field.value || null}
                onChange={(e, d) => helpers.setValue(d.value)}
                onBlur={() => helpers.setTouched(true)}
                {...props}
            />
            {meta.touched && meta.error ? (
                <Label basic color='red'>
                    {meta.error}
                </Label>
            ) : null}
        </FormField>
    );
}
