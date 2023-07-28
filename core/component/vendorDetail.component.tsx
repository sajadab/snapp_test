import React, {FC} from "react";
import {VendorResponseResultDetailModel} from "../network/model/VendorResponse.model";
import styles from "../../styles/Home.module.scss";
import {toPersianNumber} from "../number.utils";
import {DETAIL_PAGE_PATH, HOLDER_IMAGE_PATH, STAR_SVG_PATH} from "../CONSTANTS";
import {useRouter} from "next/navigation";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../redux/store";
import {VENDOR_ACTION} from "../redux/reducer/assetReducer";
import {useTranslation} from "react-i18next";

interface Props {
    item: VendorResponseResultDetailModel
}

export const VendorDetailComponent: FC<Props> = (props) => {
    const router = useRouter();
    const { t } = useTranslation();
    let dispatch = useDispatch<AppDispatch>();

    function vendorItemClick() {
        dispatch({
            type: VENDOR_ACTION,
            item: props.item
        })
        router.push(DETAIL_PAGE_PATH)
    }

    return (
        <div className={styles.detailFrame} onClick={() => vendorItemClick()}>
            <img alt={"cardImage"} src={props.item.backgroundImage}
                 className={styles.coverImage}
                 onError={() => props.item.backgroundImage = HOLDER_IMAGE_PATH}/>
            <img alt={"cardLogo"} src={props.item.logo}
                 onError={() => props.item.logo = HOLDER_IMAGE_PATH}
                 className={styles.imageLogo}/>
            <div className={styles.titleContainer}>
                <div
                    className={styles.foodTitle}>{props.item.title}</div>
            </div>
            <div
                className={styles.foodDesc}>{props.item.description}</div>
            <div className={styles.titleContainer}>
                <div className={styles.columnContainer}>
                    <div>{toPersianNumber(`${props.item.rate} ${t('fromFive')} `)}</div>
                    <div className={styles.starBackground}>
                        <svg
                            fill={`#a3a3a3`}
                            className={styles.star} viewBox={"0 -960 960 960"}>
                            <path d={STAR_SVG_PATH}/>
                        </svg>
                        <div
                            className={styles.commentCount}>{toPersianNumber(`${t('from')} ${props.item.commentCount} ${t('score')}`)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}