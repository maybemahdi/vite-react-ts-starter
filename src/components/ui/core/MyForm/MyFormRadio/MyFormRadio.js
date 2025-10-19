/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Radio, Form } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
const MyFormRadio = ({ name, label, labelClassName, radioGroupClassName, options, value, onValueChange, direction = "row", }) => {
    const { setValue, control } = useFormContext();
    // Watch the radio value
    const radioValue = useWatch({
        control,
        name,
    });
    useEffect(() => {
        setValue(name, value, { shouldValidate: false });
    }, [value, name, setValue]);
    useEffect(() => {
        if (onValueChange) {
            onValueChange(radioValue); // Trigger the callback whenever the value changes
        }
    }, [radioValue, onValueChange]);
    return (_jsx("div", { children: _jsx(Controller, { name: name, control: control, rules: {
                required: "This field is required", // Adjust validation as needed
            }, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "flex flex-col justify-center w-full", children: [label && (_jsx("p", { className: cn("ps-1 mb-2 text-[#101828]   text-base font-normal leading-6", labelClassName), children: label })), _jsx(Form.Item, { style: { marginBottom: "0px" }, children: _jsx(Radio.Group, { ...field, className: cn("flex gap-1", direction == "row" && "flex-row", direction == "col" && "flex-col", radioGroupClassName), onChange: (e) => field.onChange(e.target.value), value: field.value, children: options.map((option) => (_jsx(Radio, { value: option.value, children: option.label }, option.value))) }) }), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) }) }));
};
export default MyFormRadio;
