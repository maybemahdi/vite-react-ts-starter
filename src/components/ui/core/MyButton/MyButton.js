import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "@/lib/utils";
const MyButton = ({ isArrow = false, label, onClick, variant = "filled", fullWidth, type = "button", isDisabled = false, customIcon, iconPosition = "right", className, }) => {
    const baseClasses = cn("rounded-[10px] text-base font-medium transition-all duration-300 cursor-pointer", "flex items-center justify-center gap-2", "disabled:opacity-70 disabled:cursor-not-allowed", "px-6 py-3", {
        "w-full": fullWidth,
    }, className);
    const variantClasses = {
        outline: cn("border-2 border-secondary text-white", "hover:bg-secondary/10 active:bg-secondary/20", "px-[calc(24px-2px)]"),
        filled: cn("bg-secondary !text-white hover:bg-secondary"),
    };
    return (_jsxs("button", { disabled: isDisabled, type: type, onClick: onClick, className: cn(baseClasses, variantClasses[variant]), children: [(isArrow || customIcon) && iconPosition === "left" && (_jsxs("span", { className: "flex items-center", children: [isArrow && (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", className: cn({
                            "text-white": variant === "filled",
                            "text-primary": variant === "outline",
                        }), children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4489 11.1013C17.1085 11.1013 14.9753 8.96916 14.9753 6.62772V5.66772H13.0553V6.62772C13.0553 8.33076 13.8022 9.92819 14.9744 11.1013H3.12891V13.0213H14.9744C13.8022 14.1944 13.0553 15.7919 13.0553 17.4949V18.4549H14.9753V17.4949C14.9753 15.1535 17.1085 13.0213 19.4489 13.0213H20.4089V11.1013H19.4489Z", fill: "currentColor" }) })), customIcon] })), label, (isArrow || customIcon) && iconPosition === "right" && (_jsxs("span", { className: "flex items-center", children: [isArrow && (_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", className: cn({
                            "text-white": variant === "filled",
                            "text-primary": variant === "outline",
                        }), children: _jsx("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4489 11.1013C17.1085 11.1013 14.9753 8.96916 14.9753 6.62772V5.66772H13.0553V6.62772C13.0553 8.33076 13.8022 9.92819 14.9744 11.1013H3.12891V13.0213H14.9744C13.8022 14.1944 13.0553 15.7919 13.0553 17.4949V18.4549H14.9753V17.4949C14.9753 15.1535 17.1085 13.0213 19.4489 13.0213H20.4089V11.1013H19.4489Z", fill: "currentColor" }) })), customIcon] }))] }));
};
export default MyButton;
