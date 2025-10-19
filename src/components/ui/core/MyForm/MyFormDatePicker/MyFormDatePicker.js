import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-unused-vars */
import { cn } from "@/lib/utils";
import { Form, DatePicker } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
const MyFormDatePicker = ({ name, label, labelClassName, picker = "date", // Allows selection of "date", "month", "week", "year"
inputClassName, value, onValueChange, disablePastDate = false, }) => {
    const { setValue, control } = useFormContext();
    // Watch the DatePicker field's value
    const selectedDate = useWatch({
        control,
        name,
    });
    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current < dayjs().endOf('day');
    };
    useEffect(() => {
        if (value) {
            setValue(name, dayjs(value), { shouldValidate: true });
        }
    }, [value, name, setValue]);
    useEffect(() => {
        if (onValueChange) {
            onValueChange(selectedDate ? dayjs(selectedDate) : null);
        }
    }, [selectedDate, onValueChange]);
    return (_jsx("div", { children: _jsx(Controller, { name: name, control: control, rules: {
                required: "This field is required",
            }, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "flex flex-col justify-center w-full", children: [label && (_jsx("p", { className: cn("ps-1 mb-2 text-[#101828] text-base font-normal leading-6", labelClassName), children: label })), _jsx(Form.Item, { style: { marginBottom: "4px" }, children: _jsx(DatePicker, { ...field, picker: picker, id: name, size: "large", className: cn("w-full", inputClassName), value: field.value ? dayjs(field.value) : null, onChange: (date) => {
                                field.onChange(date ? dayjs(date).toISOString() : null);
                                if (onValueChange)
                                    onValueChange(date ? dayjs(date) : null);
                            }, 
                            // disabledDate={disablePastDate ? disabledDate : undefined}
                            disabledDate: (current) => disablePastDate ? current && current < dayjs().startOf('day') : false }) }), error && _jsx("small", { style: { color: "red " }, children: error.message })] })) }) }));
};
export default MyFormDatePicker;
