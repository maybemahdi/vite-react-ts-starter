import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "@/lib/utils";
import { RiDeleteBinLine } from "react-icons/ri";
const MyFormVideoUpload = ({ name, label, size = "medium", parentClassName = "", labelClassName = "", inputClassName = "", previewClassName = "", defaultValue, children, ...rest }) => {
    const { control, setValue, resetField } = useFormContext();
    const [previewUrl, setPreviewUrl] = useState(defaultValue || null);
    const [fileInputKey, setFileInputKey] = useState(0);
    const handleFileChange = (file) => {
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
        setValue(name, file);
    };
    const handleRemoveVideo = () => {
        setPreviewUrl(null);
        resetField(name);
        setFileInputKey((prev) => prev + 1);
    };
    useEffect(() => {
        if (defaultValue) {
            setValue(name, defaultValue, { shouldValidate: false });
            setPreviewUrl(defaultValue);
        }
    }, [defaultValue, name, setValue]);
    return (_jsxs("div", { className: cn(`form-group ${size}`, parentClassName), children: [label && _jsx("p", { className: cn("mb-2 text-base", labelClassName), children: label }), _jsx(Controller, { control: control, name: name, render: ({ fieldState: { error } }) => (_jsxs(_Fragment, { children: [previewUrl ? (_jsxs("div", { className: cn("relative w-fit", previewClassName), children: [_jsx("video", { controls: true, className: "h-[200px] w-full rounded-md object-fill", src: previewUrl }), _jsx("button", { type: "button", onClick: handleRemoveVideo, className: "px-1 py-1 cursor-pointer bg-black bg-opacity-80 text-white rounded-md absolute top-2 right-2", children: _jsx(RiDeleteBinLine, { size: 20, className: "hover:text-red-500" }) })] })) : (_jsxs(_Fragment, { children: [children && (_jsx("label", { htmlFor: name, className: "h-full w-full cursor-pointer", children: children })), _jsx("input", { id: name, type: "file", accept: "video/*", onChange: (e) => {
                                        const file = e.target.files?.[0];
                                        if (file)
                                            handleFileChange(file);
                                    }, className: cn("w-full rounded-md border border-gray-300 p-2", inputClassName, children && "hidden"), ...rest }, fileInputKey)] })), error && _jsx("small", { style: { color: "red" }, children: error.message })] })) })] }));
};
export default MyFormVideoUpload;
