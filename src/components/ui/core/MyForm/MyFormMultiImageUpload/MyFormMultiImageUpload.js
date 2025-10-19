import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { RiDeleteBinLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
const MyFormMultiImageUpload = ({ name, label, maxImages = 5, defaultValue = [], inputClassName = "", previewImageClassName = "", labelClassName = "", parentClassName = "", size = "medium", }) => {
    const { control, setValue, resetField } = useFormContext();
    const [previews, setPreviews] = useState([]);
    const [files, setFiles] = useState([]);
    const inputRef = useRef(null);
    // Create preview URLs
    const generatePreview = (file) => new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
    });
    const handleAddFiles = async (selectedFiles) => {
        if (!selectedFiles)
            return;
        const fileArray = Array.from(selectedFiles).slice(0, maxImages - files.length);
        const newPreviews = await Promise.all(fileArray.map(generatePreview));
        const updatedFiles = [...files, ...fileArray];
        const updatedPreviews = [...previews, ...newPreviews];
        setFiles(updatedFiles);
        setPreviews(updatedPreviews);
        setValue(name, updatedFiles, { shouldValidate: true });
    };
    const handleRemoveImage = (index) => {
        const updatedFiles = [...files];
        const updatedPreviews = [...previews];
        updatedFiles.splice(index, 1);
        updatedPreviews.splice(index, 1);
        setFiles(updatedFiles);
        setPreviews(updatedPreviews);
        setValue(name, updatedFiles);
    };
    useEffect(() => {
        if (defaultValue?.length && typeof defaultValue[0] === "string") {
            setPreviews(defaultValue);
        }
    }, [defaultValue]);
    return (_jsxs("div", { className: cn(`form-group ${size}`, parentClassName), children: [label && _jsx("p", { className: cn("mb-2", labelClassName), children: label }), _jsx(Controller, { name: name, control: control, render: ({ fieldState: { error } }) => (_jsxs(_Fragment, { children: [_jsx("div", { className: "flex flex-wrap gap-3 mb-2", children: previews.map((src, index) => (_jsxs("div", { className: "relative w-[100px] h-[100px]", children: [_jsx("img", { src: src, alt: `preview-${index}`, className: cn("object-cover rounded-md w-full h-full", previewImageClassName) }), _jsx("button", { type: "button", className: "absolute top-1 right-1 bg-black bg-opacity-70 text-white rounded-full p-1", onClick: () => handleRemoveImage(index), children: _jsx(RiDeleteBinLine, { size: 16 }) })] }, index))) }), previews.length < maxImages && (_jsx("input", { ref: inputRef, type: "file", accept: "image/*", multiple: true, onChange: (e) => handleAddFiles(e.target.files), className: cn("block w-full border p-2 rounded-md", inputClassName) })), error && _jsx("small", { className: "text-red-500", children: error.message })] })) })] }));
};
export default MyFormMultiImageUpload;
