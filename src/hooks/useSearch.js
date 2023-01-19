import { useState, useEffect } from 'react';
import { getAll } from '../service/user.service';
const useSearch = (searchName) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const res = await getAll();
            const array = [];

            res.forEach((item, index) => {
                if (item.first_name.startsWith(searchName)) {
                    item.key = index;
                    array.push(item);
                }

            });


            setData(array);
        };

        getData();
    }, [searchName]);

    return data;

}

export default useSearch;
