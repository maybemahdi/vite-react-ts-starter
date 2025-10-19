import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rootReducer } from "./rootReducer";
import { baseApi } from "./api/baseApi";
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"], // Persist only the auth slice
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares({
        serializableCheck: false,
        //   serializableCheck: {
        //     ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        //   },
    }).concat(baseApi.middleware),
});
export const persistor = persistStore(store);
