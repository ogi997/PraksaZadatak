import { useEffect } from 'react';
import { deleteById, getAll, getUserById, updateById } from '../../../service/user.service';
import { useState } from 'react';
import {
    Button,
    notification,
    Table,
    Modal,
    Form,
    Input,
    Radio,
    Space,
} from 'antd';
import {
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';

const { TextArea } = Input;

const AllUsers = () => {

    const [value, setValue] = useState(null);
    const onChange = (e) => {

        setValue(e.target.value);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [users, setUsers] = useState([]);
    const [idUpdate, setIdUpdate] = useState(null);
    const onFinish = async (values) => {

        const data = await updateById(idUpdate, values);

        if (data.status >= 200 && data.status < 300) {
            notification.open({
                message: 'Azuriranje',
                description: 'Uspjesno azurirano'
            })
        } else {
            notification.open({
                message: 'Azuriranje',
                description: 'Doslo je do greske'
            })
        }

        setIsModalOpen(false);
        const res = await getAll();
        res.forEach((item, index) => {
            item.key = index;
        });
        setUsers(res);
    };

    const [form] = Form.useForm();
    const handleUpdate = async (id) => {

        showModal();
        const response = await getUserById(id);
        const data = response.data;
        setIdUpdate(id);

        form.setFieldsValue({
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            gender: data.gender,
            description: data.description,
        });

    };

    const handleDelete = async (id) => {
        const data = await deleteById(id);

        const res = await getAll();
        res.forEach((item, index) => {
            item.key = index;
        })
        setUsers(res);

        if (data.status >= 200 && data.status < 300) {
            notification.open({
                message: 'Brisanje',
                description: 'Uspjesno obrisano'
            })
        } else {
            notification.open({
                message: 'Brisanje',
                description: 'Greska prilikom brisanja'
            })
        }

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
        {
            title: 'Action',
            dataIndex: 'action',
            key: 'action',
            render: (_, record) => <div key={record.id}>
                <Button icon={<EditOutlined />} onClick={() => handleUpdate(record.id)}>Update</Button>
                <Button style={{ marginLeft: '5px' }} icon={<DeleteOutlined />} danger onClick={() => handleDelete(record.id)}>Delete</Button>
            </div>,
        },
    ];

    useEffect(() => {
        const getData = async () => {
            const data = await getAll();

            data.forEach((item, index) => {
                item.key = index;
            });
            setUsers(data);
        };

        getData();
    }, []);


    return (
        <>
            <Table
                columns={columns}
                dataSource={users}
            />

            <Modal footer={null} title="Azuriranje" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="editUser"
                    labelCol={{
                        span: 9,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    form={form}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Ime"
                        name="first_name"
                        key="1"
                        rules={[
                            {
                                required: true,
                                message: 'Unesite ime!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Prezime"
                        name="last_name"
                        key="2"
                        rules={[
                            {
                                required: true,
                                message: 'Unesite prezime!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        key="3"
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        name="gender"
                        key="4"
                    >
                        <Radio.Group onChange={onChange} value={value}>
                            <Space direction="vertical">
                                <Radio value="Agender">Agender</Radio>
                                <Radio value="Genderfluid">Genderfluid</Radio>
                                <Radio value="Polygender">Polygender</Radio>
                                <Radio value="Non-binary">Non-binary</Radio>
                                <Radio value="Genderqueer">Genderqueer</Radio>
                                <Radio value="Bigender">Bigender</Radio>
                                <Radio value="Female">Female</Radio>
                                <Radio value="Male">Male</Radio>
                            </Space>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        label="Description"
                        name="description"
                        key="5"
                    >
                        <TextArea />
                    </Form.Item>



                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                        key="6"
                    >
                        <Button type="primary" htmlType="submit">
                            Azuriraj
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}

export default AllUsers;
