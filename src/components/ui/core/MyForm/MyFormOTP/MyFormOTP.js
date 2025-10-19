import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "antd";
const MyFormOTP = ({ name, label, labelClassName, className, rules, length, }) => {
    const { control } = useFormContext(); // Use react-hook-form context to access methods
    // Shared properties for the OTP input component
    const sharedProps = {
        size: "large",
        length,
        className,
        formatter: (str) => str.toUpperCase(), // Format OTP to uppercase
    };
    return (_jsxs("div", { className: "flex flex-col justify-center gap-1", children: [label && (_jsx("p", { className: labelClassName || "ps-1 mb-2 text-[#101828] text-base font-normal leading-6", children: label })), _jsx(Controller, { name: name, control: control, rules: rules, render: ({ field, fieldState: { error } }) => (_jsxs("div", { className: "w-fit flex flex-col", children: [_jsx(Input.OTP, { ...field, ...sharedProps, size: "large" }), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) })] }));
};
export default MyFormOTP;
