export interface ListDichvu {
    id: string;
    dich_vu: string;
    name: string;
    description: string;
    action: string;
}


export const childListDichvu: ListDichvu[] = [
    {
        id: new Date().toJSON().toString(),
        dich_vu: "KIO_01",
        name: "Kiosk",
        description: "Hoạt động",
        action: "Hoạt động"

    },
]

export enum PageDichvu {
    list,
    add,
    edit
}