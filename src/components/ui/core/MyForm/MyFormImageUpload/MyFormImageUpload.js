import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RiDeleteBinLine } from "react-icons/ri";
const MyFormImageUpload = ({ name, label, size = "medium", parentClassName = "", labelClassName = "", inputClassName = "", previewImageClassName = "", defaultValue, children, ...rest }) => {
    const { control, setValue, resetField } = useFormContext();
    const [preview, setPreview] = useState(defaultValue || null);
    const [fileInputKey, setFileInputKey] = useState(0);
    // Handle file change (set preview and form value)
    const handleFileChange = (file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreview(reader.result); // Set preview
        };
        reader.readAsDataURL(file);
        setValue(name, file); // Update form value with the file
    };
    // Remove image and reset field
    const handleRemoveImage = () => {
        setPreview(null); // Clear preview
        resetField(name); // Clear form value
        setFileInputKey((prev) => prev + 1); // Force file input reset
    };
    // Effect to set default value in the form when the component mounts or defaultValue changes
    useEffect(() => {
        if (defaultValue) {
            // Only set if defaultValue is provided
            setValue(name, defaultValue, { shouldValidate: false });
            setPreview(defaultValue); // Set preview with the default value
        }
    }, [defaultValue, name, setValue]);
    return (_jsxs("div", { className: cn(`form-group h-full ${size}`, parentClassName), children: [label && _jsx("p", { className: cn("mb-2", labelClassName), children: label }), _jsx(Controller, { control: control, name: name, render: ({ fieldState: { error } }) => (_jsxs(_Fragment, { children: [preview ? (_jsxs("div", { className: cn(" relative w-fit", previewImageClassName), children: [_jsx("img", { height: 300, width: 300, src: preview, alt: "Preview", className: cn("rounded-md object-fill", previewImageClassName) }), _jsx("button", { type: "button", onClick: handleRemoveImage, className: "px-1 py-1 bg-black bg-opacity-80 text-white rounded-md absolute top-2 right-2", children: _jsx(RiDeleteBinLine, { size: 20, className: "hover:text-red-500" }) })] })) : (_jsxs(_Fragment, { children: [children && (_jsx("label", { htmlFor: name, className: "h-full w-full", children: children })), _jsx("input", { id: name, type: "file", accept: "image/*", onChange: (e) => {
                                        const file = e.target.files?.[0];
                                        if (file) {
                                            handleFileChange(file);
                                        }
                                    }, className: cn("w-full rounded-md border border-gray-300 p-2", inputClassName, children && "hidden"), ...rest }, fileInputKey)] })), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) })] }));
};
export default MyFormImageUpload;
