export interface ListThietBi {
    id: string;
    thiet_bi: string;
    name_thiet_bi: string;
    loai_thiet_bi: string;
    ip_address: string;
    action_thiet_bi: string;
    connect_thiet_bi: string;
    dichvusd: string;
    Username: string;
    Password: string;
}




export enum PageThietBi {
    list,
    add,
    edit
}