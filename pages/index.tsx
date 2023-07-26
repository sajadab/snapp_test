import type {NextPage} from 'next'
import styles from '../styles/Home.module.scss'
import React, {useEffect} from "react";
import {VendorService} from "../core/network/service/vendorService";
import {VendorResponseFinalResultModel} from "../core/network/model/VendorResponse.model";
import {FixedSizeList as List} from "react-window";
import InfiniteLoader from "react-window-infinite-loader";
import {ShimmerComponent} from "../core/component/shimmer.component";
import {VendorItemComponent} from "../core/component/vendorItem.component";

const VendorPage: NextPage = () => {

    const [vendorList, setVendorList] = React.useState<VendorResponseFinalResultModel[]>([])
    const [page, setPage] = React.useState(0)
    const [scrollStopIndex, setScrollStopIndex] = React.useState(0)
    const vendorService = new VendorService()

    useEffect(() => {
        vendorService.getVendorList(page).subscribe((data) => {
            if (data && data.data && data.data.finalResult && data.data.finalResult.length > 0) {
                if (page > 0) {
                    setVendorList(vendorList.concat(data.data.finalResult.filter((it) => it.type == "VENDOR")));
                } else {
                    setVendorList(data.data.finalResult.filter((it) => it.type == "VENDOR"));
                }
            }
        })
    }, [page])

    const loadMoreItems = (startIndex:number, stopIndex:number) => {
        if (stopIndex % 20 > 15 && (scrollStopIndex + 15) < stopIndex) {
            setScrollStopIndex(stopIndex)
            setPage(page + 1);
        }
    };

    const isItemLoaded = (index:number) => index < vendorList.length - 1;

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {vendorList && vendorList.length > 0 ?
                    <InfiniteLoader
                        isItemLoaded={isItemLoaded}
                        threshold={5}
                        itemCount={vendorList.length}
                        loadMoreItems={loadMoreItems}>
                        {({onItemsRendered, ref}) => (
                            <List
                                innerElementType="div"
                                className={styles.list}
                                height={(typeof window === 'undefined') ? 1000 : (window.innerHeight - 20)}
                                itemCount={vendorList.length}
                                itemSize={250}
                                direction={"rtl"}
                                onItemsRendered={onItemsRendered}
                                ref={ref}
                                width={"100%"}>
                                {({index, style}) => {
                                    return (
                                        <div style={style} key={index}>
                                            {(!isItemLoaded(index)) ?
                                                <ShimmerComponent width={Number(style.width)??0}/> :
                                                <VendorItemComponent item={vendorList[index].data}/>}
                                        </div>
                                    );
                                }}
                            </List>
                        )}
                    </InfiniteLoader>
                    : null}
            </div>
        </div>
    )
}

export default VendorPage
