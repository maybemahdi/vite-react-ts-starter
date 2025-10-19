import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RiDeleteBinLine } from "react-icons/ri";
const MyFormExcelUpload = ({ name, label, parentClassName = "", labelClassName = "", inputClassName = "", defaultValue, children, ...rest }) => {
    const { control, setValue, resetField } = useFormContext();
    const [fileName, setFileName] = useState(defaultValue?.name || null);
    const [fileInputKey, setFileInputKey] = useState(0);
    const handleFileChange = (file) => {
        setValue(name, file);
        setFileName(file.name);
    };
    const handleRemoveFile = () => {
        resetField(name);
        setFileName(null);
        setFileInputKey((prev) => prev + 1); // reset input
    };
    return (_jsxs("div", { className: cn("form-group", parentClassName), children: [label && _jsx("p", { className: cn("mb-2 text-base", labelClassName), children: label }), _jsx(Controller, { name: name, control: control, render: ({ fieldState: { error } }) => (_jsxs(_Fragment, { children: [fileName ? (_jsxs("div", { className: "relative flex items-center gap-2 border rounded-md p-2 bg-gray-100", children: [_jsx("span", { className: "text-sm truncate", children: fileName }), _jsx("button", { type: "button", onClick: handleRemoveFile, className: "ml-auto cursor-pointer text-red-600", children: _jsx(RiDeleteBinLine, { size: 18 }) })] })) : (_jsxs(_Fragment, { children: [children ? (_jsx("label", { htmlFor: name, className: "block w-full cursor-pointer", children: children })) : (_jsx("label", { htmlFor: name, className: cn("block w-full border border-gray-300 p-2 rounded-md text-center cursor-pointer", inputClassName), children: "Upload Excel File" })), _jsx("input", { id: name, type: "file", accept: ".xls,.xlsx,.csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv", onChange: (e) => {
                                        const file = e.target.files?.[0];
                                        if (file)
                                            handleFileChange(file);
                                    }, className: "hidden", ...rest }, fileInputKey)] })), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) })] }));
};
export default MyFormExcelUpload;
