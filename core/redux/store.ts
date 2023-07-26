import {configureStore} from "@reduxjs/toolkit";
import {vendorReducer} from "./reducer/assetReducer";

export const store = configureStore({
    reducer: {
        vendorReducer: vendorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;