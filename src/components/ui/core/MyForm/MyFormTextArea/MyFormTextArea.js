/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Form } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
const MyFormTextArea = ({ name, label, labelClassName, inputClassName, placeHolder, value, watchValue, }) => {
    const { setValue, control } = useFormContext();
    // Watch the input field's value
    const inputValue = useWatch({
        control,
        name,
    });
    useEffect(() => {
        if (watchValue) {
            watchValue(inputValue); // Trigger the callback whenever the value changes
        }
    }, [inputValue, watchValue]);
    useEffect(() => {
        if (value) {
            setValue(name, value, { shouldValidate: false });
        }
    }, [value, name, setValue]);
    return (_jsx("div", { children: _jsx(Controller, { name: name, control: control, rules: {
                required: true,
            }, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "flex flex-col justify-center gap-2 w-full", children: [_jsx("p", { className: cn("ps-1 text-text-primary text-base font-normal leading-6", labelClassName), children: label }), _jsx(Form.Item, { style: { marginBottom: "0px" }, children: _jsx(TextArea, { ...field, id: name, size: "large", rows: 4, className: cn("w-full", inputClassName), placeholder: placeHolder }) }), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) }) }));
};
export default MyFormTextArea;
