import { useState, useEffect } from 'react';
import { getAll } from '../service/user.service';

const useSort = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await getAll();
            res.forEach((item, index) => {
                item.key = index;
            });
            setData(res);
        };

        getData();
    }, []);

    return [...data].sort((a, b) => (a['first_name'] > b['first_name']) ? 1 : ((b['first_name'] > a['first_name']) ? -1 : 0));
}

export default useSort;
