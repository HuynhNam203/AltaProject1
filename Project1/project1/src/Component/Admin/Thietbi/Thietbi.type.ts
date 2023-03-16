export interface ListThietBi {
    id: string;
    thiet_bi: string;
    name_thiet_bi: string;
    ip_address: string;
    action_thiet_bi: string;
    connect_thiet_bi: string;
}


export const childListThietBi: ListThietBi[] = [
    {
        id: new Date().toJSON().toString(),
    thiet_bi: "KIO_01",
    name_thiet_bi: "Kios",
    ip_address: "192.168.1.10",
    action_thiet_bi: "Hoạt đọnog",
    connect_thiet_bi: string,

    },
]

export enum PageThietBi {
    list,
    add,
    edit
}