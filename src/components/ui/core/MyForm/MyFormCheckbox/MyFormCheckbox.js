/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Checkbox, Form } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
const MyFormCheckbox = ({ name, label, labelClassName, checkboxClassName, value, onValueChange, }) => {
    const { setValue, control } = useFormContext();
    // Watch the checkbox value
    const checkboxValue = useWatch({
        control,
        name,
    });
    useEffect(() => {
        setValue(name, value, { shouldValidate: false });
    }, [value, name, setValue]);
    useEffect(() => {
        if (onValueChange) {
            onValueChange(checkboxValue); // Trigger the callback whenever the value changes
        }
    }, [checkboxValue, onValueChange]);
    return (_jsx("div", { children: _jsx(Controller, { name: name, control: control, rules: {
                required: false, // Adjust validation as needed
            }, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "flex flex-col justify-center w-full", children: [_jsx(Form.Item, { style: { marginBottom: "0px" }, children: _jsx(Checkbox, { ...field, id: name, checked: field.value, className: cn("text-[#101828]  ", checkboxClassName), children: _jsx("span", { className: cn("text-base font-normal leading-6", labelClassName), children: label }) }) }), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) }) }));
};
export default MyFormCheckbox;
