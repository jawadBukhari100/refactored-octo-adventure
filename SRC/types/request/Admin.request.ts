export interface SaveReqADMIN {
    FirstName: string;
    LastName: string;
    Desgination: string;
    cell: string;
    JoinDate: string;
    adress: string;
}
export interface UpdateReqADMIN {
    _id: string;
    FirstName: string;
    LastName: string;
    Desgination: string;
    cell: string;
    JoinDate: string;
    adress: string;
}
export interface GetAdmin {
    id: string
}
export interface DeleteAdmin {
    id: string
}
