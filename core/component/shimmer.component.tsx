import React, {FC} from "react";
import styles from "../../styles/Home.module.scss";
import {Shimmer} from "react-shimmer";

interface Props{
    width:number
}
export const ShimmerComponent:FC<Props>=(props)=>{

    return(
        <div className={styles.card}>
            <Shimmer width={props.width} height={130} className={styles.coverImage}/>
            <Shimmer width={60} height={60} className={styles.imageLogo}/>
            <div className={styles.shimmerContainer}>
                <Shimmer width={props.width/2} height={15} className={styles.foodDesc}/>
                <Shimmer width={props.width/3} height={10} className={styles.foodDesc}/>
            </div>
        </div>
    )
}