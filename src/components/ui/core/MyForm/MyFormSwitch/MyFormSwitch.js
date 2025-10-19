'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Form, Switch } from "antd";
import { useEffect } from "react";
import { Controller, useFormContext, useWatch } from "react-hook-form";
const MyFormSwitch = ({ name, label, labelClassName, switchClassName, defaultChecked = false, onValueChange, }) => {
    const { setValue, control } = useFormContext();
    // Watch the switch field's value
    const switchValue = useWatch({
        control,
        name,
    });
    useEffect(() => {
        setValue(name, defaultChecked, { shouldValidate: false });
    }, [defaultChecked, name, setValue]);
    useEffect(() => {
        if (onValueChange) {
            onValueChange(switchValue);
        }
    }, [switchValue, onValueChange]);
    return (_jsx("div", { children: _jsx(Controller, { name: name, control: control, rules: { required: false }, render: ({ field }) => (_jsxs("div", { className: "flex items-center gap-2", children: [label && (_jsx("p", { className: cn("text-[#101828] text-base font-normal leading-6", labelClassName), children: label })), _jsx(Form.Item, { style: { marginBottom: "0px" }, children: _jsx(Switch, { ...field, checked: field.value, onChange: (checked) => field.onChange(checked), className: cn(switchClassName) }) })] })) }) }));
};
export default MyFormSwitch;
