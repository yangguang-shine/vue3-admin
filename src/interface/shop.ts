export interface MinusItemI {
    reach: number,
    reduce: number
}
export interface ShopItemOriginI {
    "shopID": number,
    "shopName": string,
    "address": string,
    "startTime": string,
    "endTime": string,
    "imgUrl": string,
    "minus": string,
    "businessTypes": string,
    "manageID": number,
    "latitude": string,
    "longitude": string,
    "location": string,
    "description": string,
    "mainColor": string,
    "deliverPrice": number,
    "startDeliverPrice": number,
    "mode": 'vertical' | 'horizontal'
}

export interface ShopItemI extends ShopItemOriginI {
    openTime: string,
    minusList: MinusItemI[],
    minusStr: string,
    modeStr:  '垂直' | '水平',
    businessTypesList: string[]
    businessTypesStr: string,
}



