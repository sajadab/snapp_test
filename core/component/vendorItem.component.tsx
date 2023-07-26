import React, {FC} from "react";
import {VendorResponseResultDetailModel} from "../network/model/VendorResponse.model";
import styles from "../../styles/Home.module.scss";
import {toPersianNumber} from "../number.utils";
import {DETAIL_PAGE_PATH, HOLDER_IMAGE_PATH, STAR_SVG_PATH} from "../CONSTANTS";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {VENDOR_ACTION} from "../redux/reducer/assetReducer";

interface Props{
    item:VendorResponseResultDetailModel
}

export const VendorItemComponent:FC<Props>=(props)=>{
    const router=useRouter();
    let dispatch = useDispatch<AppDispatch>();
    function vendorItemClick() {
        dispatch({
            type:VENDOR_ACTION,
            item:props.item
        })
        router.push(DETAIL_PAGE_PATH)
    }

    return(
        <div className={styles.card} onClick={()=>vendorItemClick()}>
            <img alt={"cardImage"} src={props.item.backgroundImage}
                 className={styles.coverImage}
                 onError={() => props.item.backgroundImage = HOLDER_IMAGE_PATH}/>
            <img alt={"cardLogo"} src={props.item.logo}
                 onError={() => props.item.logo = HOLDER_IMAGE_PATH}
                 className={styles.imageLogo}/>
            <div className={styles.titleContainer}>
                <div
                    className={styles.foodTitle}>{props.item.title}</div>
                <div
                    className={styles.commentCount}>({toPersianNumber(`${props.item.commentCount}`)})
                </div>
                <div className={styles.starBackground}
                     style={{backgroundColor: `rgba(${Math.max(250 - 10 * Math.pow(2, Number(props.item.rate)), 0)},${Math.max(Math.min(Math.pow(2, Number(props.item.rate)) * 20, 250) - 50, 0)},0,.1)`}}>
                    <div
                        style={{color: `rgb(${Math.max(250 - 10 * Math.pow(2, Number(props.item.rate)), 0)},${Math.max(Math.min(Math.pow(2, Number(props.item.rate)) * 20, 250) - 50, 0)},0)`}}>{toPersianNumber(`${props.item.rate}`)}</div>
                    <svg
                        fill={`rgb(${Math.max(250 - 10 * Math.pow(2, Number(props.item.rate)), 0)},${Math.max(Math.min(Math.pow(2, Number(props.item.rate)) * 20, 250) - 50, 0)},0)`}
                        className={styles.star} viewBox={"0 -960 960 960"}>
                        <path d={STAR_SVG_PATH}/>
                    </svg>
                </div>
            </div>
            <div
                className={styles.foodDesc}>{props.item.description}</div>
            <div className={styles.foodDesc}>
                <span>{props.item.isZFExpress ? "ارسال اکسپرس" : "پیک فروشنده"}</span> {props.item.deliveryFee > 0 ? toPersianNumber(props.item.deliveryFee.toLocaleString()) + " تومان " : "رایگان"}
            </div>
        </div>
    )
}