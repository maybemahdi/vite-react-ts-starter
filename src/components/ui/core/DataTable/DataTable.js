"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import MyButton from "../MyButton/MyButton";
export function DataTable({ title, navigateInfo, data, columns, keyField, onRowClick, renderActions, }) {
    const [activeMenu, setActiveMenu] = useState(null);
    const handleActionClick = (e, id) => {
        e.stopPropagation();
        setActiveMenu(activeMenu === id ? null : id);
    };
    const closeMenu = () => {
        setActiveMenu(null);
    };
    return (_jsxs("div", { className: "w-full", children: [_jsxs("div", { className: "flex justify-between gap-5 items-center mb-4", children: [title && (_jsx("h2", { className: "text-2xl md:text-[32px] font-semibold text-text-primary", children: title })), navigateInfo && (_jsx(MyButton, { onClick: navigateInfo.onClick, label: navigateInfo?.btnLabel, customIcon: _jsx(PlusIcon, { className: "w-5 h-5 text-white" }), iconPosition: "left" }))] }), _jsx("div", { className: "bg-white rounded-lg border border-gray-200 overflow-hidden", children: _jsx("div", { className: "overflow-x-auto", children: _jsxs("table", { className: "w-full", children: [_jsx("thead", { children: _jsxs("tr", { className: "bg-primary border-b border-gray-200", children: [columns.map((column, index) => (_jsx("th", { className: `px-6 py-4 text-left text-sm md:text-[20px] font-medium md:font-semibold text-white ${column.className || ""}`, children: column.header }, index))), renderActions && (_jsx("th", { className: "px-6 py-4 text-right text-sm md:text-[20px] font-medium md:font-semibold text-white w-20", children: "Action" }))] }) }), _jsx("tbody", { className: "divide-y divide-gray-200", children: data.map((item) => {
                                    const id = String(item[keyField]);
                                    return (_jsxs("tr", { className: `hover:bg-gray-50 ${onRowClick ? "cursor-pointer" : ""}`, onClick: () => onRowClick && onRowClick(item), children: [columns.map((column, index) => {
                                                const value = typeof column.accessor === "function"
                                                    ? column.accessor(item)
                                                    : item[column.accessor];
                                                return (_jsx("td", { className: `px-6 py-4 text-sm ${column.className || ""}`, children: value }, index));
                                            }), renderActions && (_jsx("td", { onClick: (e) => e.stopPropagation(), className: "px-6 py-4 text-sm", children: renderActions(item, closeMenu) }))] }, id));
                                }) })] }) }) })] }));
}
