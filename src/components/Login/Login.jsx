import {
    Button,
    Form,
    Input,
    notification
} from 'antd';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const Login = () => {
    const dispatch = useDispatch();

    const onFinish = (values) => {
        if (values.username === 'admin' && values.password === 'admin') {
            dispatch(authActions.login());
        } else {
            notification.open({
                message: 'Login',
                description: 'Korisnicko ime/lozinka su pogresni.'
            });
        }
    };


    return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

            <Form
                name="loginForm"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Korisnicko ime"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Unesite korisnicko ime!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Lozinka"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Unesite lozinku!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Login
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
