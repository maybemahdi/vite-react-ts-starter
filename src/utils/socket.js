import { io } from "socket.io-client";
const BASE_URL = import.meta.env.VITE_SOCKET_URL || "http://10.0.10.79:5000";
let socket = null;
// Connects socket
export const connectSocket = (id) => {
    if (!socket) {
        socket = io(BASE_URL, {
            query: { id },
        });
        // console.log("Socket connected", socket);
    }
};
// Disconnects socket
export const disconnectSocket = () => {
    if (socket) {
        socket.disconnect();
        socket = null;
        console.log("Socket disconnected");
    }
};
// Returns the active socket instance
export const getSocket = () => {
    return socket;
};
