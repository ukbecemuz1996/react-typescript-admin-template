import { AxiosResponse } from 'axios';

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export type Support = {
    url: string;
    text: string;
};

export type PageType<T> = {
    page?: number;
    per_page?: number;
    total?: number;
    total_pages?: number;
    data?: T[];
    support?: Support;
};

interface AxiosResponseCustom<T, D>
    extends Omit<
        AxiosResponse<T, D>,
        'data' | 'status' | 'statusText' | 'headers' | 'config' | 'request'
    > {}

export type Page<T> = PageType<T> & AxiosResponseCustom<T, any>;
