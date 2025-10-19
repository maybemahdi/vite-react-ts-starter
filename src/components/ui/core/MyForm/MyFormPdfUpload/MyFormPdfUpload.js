import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RiDeleteBinLine } from "react-icons/ri";
const MyFormPdfUpload = ({ name, label, size = "medium", parentClassName = "", labelClassName = "", inputClassName = "", defaultValue, ...rest }) => {
    const { control, setValue, resetField } = useFormContext();
    const [fileName, setFileName] = useState(defaultValue || null);
    const [fileInputKey, setFileInputKey] = useState(0); // Used to force reset the file input
    const handleFileChange = (file) => {
        setFileName(file.name); // Display the uploaded file's name
        setValue(name, file); // Update form state with the uploaded file
    };
    const handleRemoveFile = () => {
        setFileName(null); // Clear the file name display
        resetField(name); // Reset the form field
        setFileInputKey((prev) => prev + 1); // Force input field reset
    };
    useEffect(() => {
        if (defaultValue) {
            setFileName(defaultValue);
        }
    }, [defaultValue]);
    return (_jsxs("div", { className: cn(`form-group ${size}`, parentClassName), children: [label && _jsx("p", { className: cn("mb-2", labelClassName), children: label }), _jsx(Controller, { control: control, name: name, render: ({ fieldState: { error } }) => (_jsxs(_Fragment, { children: [fileName ? (_jsxs("div", { className: "mb-2 flex items-center", children: [_jsx("span", { className: "mr-2 text-sm text-gray-700", children: fileName }), _jsx("button", { type: "button", onClick: handleRemoveFile, className: "px-1 py-1 bg-black bg-opacity-80 text-white rounded-md", children: _jsx(RiDeleteBinLine, { size: 20, className: "hover:text-red-500" }) })] })) : null, _jsx("input", { id: name, type: "file", accept: "application/pdf", onChange: (e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    handleFileChange(file);
                                }
                            }, className: cn("w-full rounded-md border border-gray-300 p-2", inputClassName), ...rest }, fileInputKey), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) })] }));
};
export default MyFormPdfUpload;
