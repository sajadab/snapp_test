

export interface VendorResponseModel {
    data:VendorResponseDataModel
}

interface VendorResponseDataModel {
    count:number
    finalResult:VendorResponseFinalResultModel[]
}

export interface VendorResponseFinalResultModel {
    type:string
    data:VendorResponseResultDetailModel
}

export interface VendorResponseResultDetailModel {
    id:number
    title:string
    description:string
    deliveryFee:number
    logo:string
    isOpen:boolean
    address:string
    rate:string
    backgroundImage:string
    isZFExpress:boolean
    commentCount:number
}