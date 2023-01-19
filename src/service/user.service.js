import base from './base.service';

const instance = base.service();

export const getAll = () => {
    return instance.get('/users').then((res) => res.data);
};

export const deleteById = (id) => {
    return instance.delete(`/users/${id}`).then((res) => res).catch((err) => console.log(err));
};

export const updateById = (id, data) => {
    return instance.put(`/users/${id}`, data).then((res) => res).catch((err) => console.error(err));
};

export const postNewUser = (data) => {
    return instance.post(`/users`, data).then((res) => res).catch((err) => console.log(err));
};

export const getUserById = (id) => {
    return instance.get(`/users/${id}`).then((res) => res).catch((err) => console.log(err));
};

export default {
    getAll,
    deleteById,
    updateById,
    getUserById,
};
