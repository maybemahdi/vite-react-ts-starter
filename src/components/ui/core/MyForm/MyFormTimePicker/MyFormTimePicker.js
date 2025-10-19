/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Form, TimePicker } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
const MyFormTimePicker = ({ name, label, labelClassName, timePickerClassName, placeHolder, defaultValue, onValueChange }) => {
    const { setValue, control } = useFormContext();
    // Watch the time field's value
    const timeValue = useWatch({
        control,
        name,
    });
    useEffect(() => {
        setValue(name, defaultValue, { shouldValidate: false });
    }, [defaultValue, name, setValue]);
    useEffect(() => {
        if (onValueChange) {
            onValueChange(timeValue);
        }
    }, [timeValue, onValueChange]);
    return (_jsx("div", { children: _jsx(Controller, { name: name, control: control, rules: {
                required: true,
            }, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "flex flex-col justify-center w-full", children: [label && (_jsx("p", { className: cn("ps-1 mb-2 text-[#101828] text-base font-normal leading-6", labelClassName), children: label })), _jsx(Form.Item, { style: { marginBottom: "0px" }, children: _jsx(TimePicker, { size: "large", ...field, format: "HH:mm", className: cn("w-full", timePickerClassName), placeholder: placeHolder, showNow: false, value: field.value ? dayjs(field.value) : null, onChange: (time) => {
                                field.onChange(time ? dayjs(time).toISOString() : null);
                                if (onValueChange)
                                    onValueChange(time ? dayjs(time) : null);
                            } }) }), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) }) }));
};
export default MyFormTimePicker;
