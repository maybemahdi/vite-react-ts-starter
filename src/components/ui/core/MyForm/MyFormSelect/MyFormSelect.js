/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form, Select } from "antd";
import { Controller, useFormContext, useWatch } from "react-hook-form";
import "./MyFormSelect.css";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
const MyFormSelect = ({ label, labelClassName, name, options, disabled, mode, placeHolder, className, isSearch = false, defaultValue, getSelectedValue, isLoading = false, }) => {
    const { setValue, control } = useFormContext();
    const inputValue = useWatch({
        control,
        name,
    });
    useEffect(() => {
        if (getSelectedValue) {
            getSelectedValue(inputValue);
        }
    }, [inputValue, getSelectedValue]);
    useEffect(() => {
        setValue(name, defaultValue, { shouldValidate: false });
    }, [defaultValue, name, setValue]);
    return (_jsx(Controller, { name: name, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "flex flex-col justify-center gap-1", children: [label && (_jsx("p", { className: cn("ps-1 mb-1 text-[#101828] text-base font-normal leading-6", labelClassName), children: label })), _jsxs(Form.Item, { style: { marginBottom: "0px" }, children: [_jsx(Select, { mode: mode, style: { width: "100%" }, className: cn(className, "placeholder:!text-text-secondary"), ...field, ref: null, value: field.value ?? defaultValue, onChange: (value) => field.onChange(value), options: options, size: "large", disabled: disabled, placeholder: placeHolder, showSearch: isSearch, loading: isLoading, filterOption: isSearch
                                ? (input, option) => (option?.label ?? "")
                                    ?.toString()
                                    ?.toLowerCase()
                                    ?.includes(input?.toLowerCase())
                                : undefined }), error && _jsx("small", { style: { color: "red" }, children: error.message })] })] })) }));
};
export default MyFormSelect;
