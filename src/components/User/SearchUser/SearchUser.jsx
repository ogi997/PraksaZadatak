
import { Divider, Input, Table } from "antd";
import useSearch from "../../../hooks/useSearch";
import { useState } from 'react';

const SearchUser = () => {
    const [name, setName] = useState(null);
    let data = useSearch(name);

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const columns = [
        {
            title: 'First name',
            dataIndex: 'first_name',
            key: 'first_name',
        },
        {
            title: 'Last_name',
            dataIndex: 'last_name',
            key: 'last_name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Gender',
            dataIndex: 'gender',
            key: 'gender',
        },
        {
            title: 'ip_address',
            dataIndex: 'ip_address',
            key: 'ip_address',
        },
    ];
    if (!name) data = [];
    return (
        <>
            <h1>Pretrazivanje po imenu</h1>
            <Input onChange={handleChange} />

            <Divider />
            <Table columns={columns} dataSource={data} />
        </>
    );
}

export default SearchUser;
