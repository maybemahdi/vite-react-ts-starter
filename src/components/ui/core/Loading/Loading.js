import { jsx as _jsx } from "react/jsx-runtime";
import { Spin } from "antd";
const Loading = () => {
    return (_jsx("main", { className: "min-h-screen flex items-center justify-center", children: _jsx(Spin, { size: "large" }) }));
};
export default Loading;
