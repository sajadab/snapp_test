import Api from "./Api";
import {Observable} from "rxjs";
import {VendorResponseModel} from "../model/VendorResponse.model";


export class VendorService{
    public getVendorList(page:number):Observable<VendorResponseModel>{
        return Api.get("restaurant/vendors-list",{page:page,page_size:20})
    }
}