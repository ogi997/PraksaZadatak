import useSort from "../../../hooks/useSort";
import { Table } from 'antd';

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
const SortedUsers = () => {
    const data = useSort();

    return (
        <>
            <h1>Sortirano po imenu</h1>
            <Table columns={columns} dataSource={data} />
        </>
    );
}

export default SortedUsers;
