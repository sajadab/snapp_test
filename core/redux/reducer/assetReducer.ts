import {AnyAction} from "redux";
import {VendorResponseResultDetailModel} from "../../network/model/VendorResponse.model";

export const VENDOR_ACTION="VENDOR_ACTION"

interface VendorState {
    item: VendorResponseResultDetailModel|null,
}

const initialVendorState: VendorState = {
    item: null,
};


export function vendorReducer(state = initialVendorState, action: AnyAction) {
    switch (action.type) {
        case VENDOR_ACTION:
            return {
                item: action.item,
            };
        default :
            return state
    }
}