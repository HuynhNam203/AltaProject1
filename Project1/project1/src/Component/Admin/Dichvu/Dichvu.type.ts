export interface ListDichvu {
    id: string;
    dich_vu: string;
    name: string;
    description: string;
    action: string;
    tang_tu_dong_dau: string;
    tang_tu_dong_sau: string;
    prefix: string;
    surfix: string;
}



export enum PageDichvu {
    list,
    add,
    edit
}