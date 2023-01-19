import { Button, Radio, Space, Form, Input, notification } from 'antd';
import { useState } from 'react';
import { postNewUser } from '../../../service/user.service';

const { TextArea } = Input;
const AddUser = () => {

    const onFinish = async (values) => {
        const data = await postNewUser(values);

        if (data.status >= 200 && data.status < 300) {
            notification.open({
                message: 'Dodavanje',
                description: 'Uspjesno dodan novi korisnik'
            });
        } else {
            notification.open({
                message: 'Dodavanje',
                description: 'Doslo je do greske prilikom dodavanja'
            })
        }
    };

    const [value, setValue] = useState(null);
    const onChange = (e) => {

        setValue(e.target.value);
    };

    return (
        <Form
            name="addUser"
            labelCol={{
                span: 9,
            }}
            wrapperCol={{
                span: 8,
            }}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                label="Ime"
                name="first_name"
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
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Gender"
                name="gender"
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
            >
                <TextArea />
            </Form.Item>



            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type="primary" htmlType="submit">
                    Dodaj
                </Button>
            </Form.Item>
        </Form>
    );
}

export default AddUser;
