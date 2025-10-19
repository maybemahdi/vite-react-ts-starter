import { jsx as _jsx } from "react/jsx-runtime";
const MyContainer = ({ children, className, }) => {
    return _jsx("div", { className: "max-w-[1200px] w-[90%] mx-auto", children: children });
};
export default MyContainer;
