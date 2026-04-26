import axios from 'axios';
import queryString from 'query-string';
import { DataProvider, fetchUtils, RaRecord } from 'react-admin';
import apiSource from '../config/apiSource';

const apiUrl = apiSource;

const httpClient = (url: string, options: any = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    if (token) {
        options.headers.set('Authorization', `Bearer ${token}`);
    }
    return fetchUtils.fetchJson(url, options);
};

// Map resource names to actual API endpoints if different
const resourceMap: { [key: string]: string } = {
    users: 'user',
    sessions: 'sessions',
    trainers: 'trainers',
    bookings: 'bookings',
    progress: 'progress',
    reviews: 'reviews',
};

export const dataProvider: DataProvider = {
    getList: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            ...params.filter,
            _page: page,
            _limit: perPage,
            _sort: field,
            _order: order,
        };
        const endpoint = resourceMap[resource] || resource;
        const url = `${apiUrl}/${endpoint}?${queryString.stringify(query)}`;
        return httpClient(url).then(({ headers, json }) => {
            const data = Array.isArray(json) ? json : (json.data && Array.isArray(json.data) ? json.data : []);
            return {
                data: data,
                total: parseInt(headers.get('x-total-count') || headers.get('content-range')?.split('/').pop() || data.length.toString(), 10),
            };
        });
    },

    getOne: (resource, params) => {
        const endpoint = resourceMap[resource] || resource;
        return httpClient(`${apiUrl}/${endpoint}/${params.id}`).then(({ json }) => ({
            data: json.data || json,
        }));
    },

    getMany: (resource, params) => {
        const endpoint = resourceMap[resource] || resource;
        const query = {
            id: params.ids,
        };
        const url = `${apiUrl}/${endpoint}?${queryString.stringify(query)}`;
        return httpClient(url).then(({ json }) => {
            const data = Array.isArray(json) ? json : (json.data && Array.isArray(json.data) ? json.data : []);
            return { data };
        });
    },

    getManyReference: (resource, params) => {
        const endpoint = resourceMap[resource] || resource;
        const query = {
            [params.target]: params.id,
        };
        const url = `${apiUrl}/${endpoint}?${queryString.stringify(query)}`;
        return httpClient(url).then(({ headers, json }) => {
            const data = Array.isArray(json) ? json : (json.data && Array.isArray(json.data) ? json.data : []);
            return {
                data: data,
                total: parseInt(headers.get('content-range')?.split('/').pop() || data.length.toString(), 10),
            };
        });
    },

    update: (resource, params) => {
        const endpoint = resourceMap[resource] || resource;
        let method = 'PUT';
        let url = `${apiUrl}/${endpoint}/${params.id}`;

        if (resource === 'bookings') {
            method = 'PATCH';
            url = `${apiUrl}/${endpoint}/${params.id}/status`;
        }

        return httpClient(url, {
            method: method,
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json.data || json.user || json }));
    },

    updateMany: (resource, params) => {
        const endpoint = resourceMap[resource] || resource;
        return Promise.all(
            params.ids.map(id => {
                let method = 'PUT';
                let url = `${apiUrl}/${endpoint}/${id}`;

                if (resource === 'bookings') {
                    method = 'PATCH';
                    url = `${apiUrl}/${endpoint}/${id}/status`;
                }

                return httpClient(url, {
                    method: method,
                    body: JSON.stringify(params.data),
                });
            })
        ).then(responses => ({ data: responses.map(({ json }) => (json.data?.id || json.user?.id || json.id)) }));
    },

    create: <RecordType extends Omit<RaRecord, "id"> = any, ResultRecordType extends RaRecord = RecordType & { id: any }>(resource: string, params: any) => {
        let endpoint = resourceMap[resource] || resource;
        
        // For users and trainers, use the /create endpoint
        if (resource === 'users' || resource === 'trainers') {
            endpoint = 'user/create';
        }

        return httpClient(`${apiUrl}/${endpoint}`, {
            method: 'POST',
            body: JSON.stringify(params.data),
        }).then(({ json }) => {
            const returnedData = json.data || json.user || json;
            return { data: { ...params.data, id: returnedData.id || json.id } as ResultRecordType };
        });
    },

    delete: (resource, params) => {
        const endpoint = resourceMap[resource] || resource;
        return httpClient(`${apiUrl}/${endpoint}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json.data || json }));
    },

    deleteMany: (resource, params) => {
        const endpoint = resourceMap[resource] || resource;
        return Promise.all(
            params.ids.map(id =>
                httpClient(`${apiUrl}/${endpoint}/${id}`, {
                    method: 'DELETE',
                })
            )
        ).then(responses => ({ data: responses.map(({ json }) => (json.data?.id || json.id)) }));
    },
};
