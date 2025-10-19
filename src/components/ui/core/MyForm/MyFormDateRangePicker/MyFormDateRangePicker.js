import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Form, DatePicker } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
const MyFormDateRangePicker = ({ name, label, labelClassName, inputClassName, value, onValueChange, disablePastDate = false, disableSpecificDays = [], // Add a new prop for specific days to disable
 }) => {
    const { setValue, control } = useFormContext();
    // Watch the DatePicker field's value
    const selectedDateRange = useWatch({
        control,
        name,
    });
    const disabledDate = (current) => {
        // Disable past dates if disablePastDate is true
        if (disablePastDate && current && current < dayjs().startOf('day')) {
            return true;
        }
        // Disable specific days if provided
        if (disableSpecificDays.length > 0) {
            return disableSpecificDays.some((disabledDate) => current.isSame(disabledDate, 'day'));
        }
        return false;
    };
    useEffect(() => {
        if (value) {
            setValue(name, [dayjs(value[0]), dayjs(value[1])], { shouldValidate: true });
        }
    }, [value, name, setValue]);
    useEffect(() => {
        if (onValueChange) {
            onValueChange([
                selectedDateRange ? dayjs(selectedDateRange[0]) : null,
                selectedDateRange ? dayjs(selectedDateRange[1]) : null,
            ]);
        }
    }, [selectedDateRange, onValueChange]);
    return (_jsx("div", { children: _jsx(Controller, { name: name, control: control, rules: {
                required: "This field is required",
            }, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "flex flex-col justify-center w-full", children: [label && (_jsx("p", { className: cn("ps-1 mb-2 text-[#101828] text-base font-normal leading-6", labelClassName), children: label })), _jsx(Form.Item, { style: { marginBottom: "4px" }, children: _jsx(DatePicker.RangePicker, { ...field, size: "large", className: cn("w-full", inputClassName), value: field.value
                                ? [dayjs(field.value[0]), dayjs(field.value[1])]
                                : null, onChange: (dates) => {
                                field.onChange(dates && dates[0] && dates[1] ? [dates[0].toISOString(), dates[1].toISOString()] : null);
                                if (onValueChange)
                                    onValueChange([
                                        dates ? dayjs(dates[0]) : null,
                                        dates ? dayjs(dates[1]) : null,
                                    ]);
                            }, disabledDate: disabledDate }) }), error && _jsx("small", { style: { color: "red " }, children: error.message })] })) }) }));
};
export default MyFormDateRangePicker;
