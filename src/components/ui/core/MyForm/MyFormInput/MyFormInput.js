/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Form, Input } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
const MyFormInput = ({ type = "text", name, label, labelClassName, inputClassName, placeHolder, value, onValueChange, readOnly = false, }) => {
    const { setValue, control } = useFormContext();
    // Watch the input field's value
    const inputValue = useWatch({
        control,
        name,
    });
    useEffect(() => {
        setValue(name, value, { shouldValidate: false });
    }, [value, name, setValue]);
    useEffect(() => {
        if (onValueChange) {
            onValueChange(inputValue); // Trigger the callback whenever the value changes
        }
    }, [inputValue, onValueChange]);
    return (_jsx("div", { children: _jsx(Controller, { name: name, control: control, rules: {
                required: true,
            }, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "flex flex-col justify-center w-full", children: [label && (_jsx("p", { className: cn("ps-1 mb-2 text-text-primary text-base font-normal leading-6", labelClassName), children: label })), _jsx(Form.Item, { style: { marginBottom: "0px" }, children: type == "password" ? (_jsx(Input.Password, { ...field, type: type, id: name, size: "large", className: cn("w-full placeholder:!text-text-secondary", inputClassName), placeholder: placeHolder })) : (_jsx(Input, { ...field, type: type, id: name, size: "large", className: cn("w-full placeholder:!text-text-secondary font-poppins", readOnly && "cursor-not-allowed", inputClassName), placeholder: placeHolder, readOnly: readOnly })) }), error && (_jsx("small", { className: "mt-1", style: { color: "red" }, children: error.message }))] })) }) }));
};
export default MyFormInput;
