import {NextPage} from "next";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../../core/redux/store";
import styles from "../../styles/Home.module.scss";
import React, {useEffect} from "react";
import {VendorResponseResultDetailModel} from "../../core/network/model/VendorResponse.model";
import {VendorDetailComponent} from "../../core/component/vendorDetail.component";


const DetailPage: NextPage = () => {
    const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
    const vendorState = useAppSelector((state) => state.vendorReducer);
    const [vendorDetail, setVendorDetail] = React.useState<VendorResponseResultDetailModel>()

    useEffect(()=>{
        if (vendorState.item) {
            setVendorDetail(vendorState.item)
        }
    },[vendorState])

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {vendorDetail?
                    <VendorDetailComponent item={vendorDetail}/>
                    :null}
            </div>
        </div>
    )
}

export default DetailPage