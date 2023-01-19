import { Menu, Layout } from 'antd';

import { useState } from 'react';
import {
    UserAddOutlined,
    UnorderedListOutlined,
    LogoutOutlined,
    SortAscendingOutlined,
    SearchOutlined
} from '@ant-design/icons';
import { authActions } from '../../store/auth-slice';
import {
    Routes,
    Route
} from 'react-router-dom';
import {
    useNavigate
} from 'react-router-dom';
import AllUsers from '../User/AllUsers/AllUsers';
import AddUser from '../User/AddUser/AddUser';
import SortedUsers from '../User/SortedUsers/SortedUsers';
import { useDispatch } from 'react-redux';
import NotFound from '../NotFound/NotFound';
import SearchUser from '../User/SearchUser/SearchUser';

const items = [
    {
        label: 'Pregled svih korisnika',
        key: '/',
        icon: <UnorderedListOutlined />,
    },
    {
        label: 'Dodaj korisnika',
        key: 'addUser',
        icon: <UserAddOutlined />,
    },
    {
        label: 'Sortirani korisnici',
        key: 'sortUser',
        icon: <SortAscendingOutlined />
    },
    {
        label: 'Pretrazivanje korisnika',
        key: 'searchUser',
        icon: <SearchOutlined />
    },
    {
        label: 'Odjava',
        key: 'logout',
        icon: <LogoutOutlined />,
    },
];

const { Header, Footer, Content } = Layout;

const Home = () => {

    const nav = useNavigate();
    const dispatch = useDispatch();

    const [current, setCurrent] = useState('/');
    const onClick = (e) => {
        if (e.key === 'logout') {
            dispatch(authActions.logout());
            nav('/');
            return;
        }
        setCurrent(e.key);
        nav(e.key);
    };

    return (
        <>
            <Layout>
                <Header style={{backgroundColor: '#fff'}}>
                    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
                </Header>

                <Content style={{ padding: '50px', minHeight: '80vh' }}>

                    <Routes>
                        <Route exact path='/' element={<AllUsers />} />

                        <Route exact path="/addUser" element={<AddUser />} />
                        <Route exact path='/sortUser' element={<SortedUsers />} />
                        <Route exact path='/searchUser' element={<SearchUser />} />
                        <Route exact path='*' element={<NotFound />} />


                    </Routes>
                </Content>

                <Footer
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    Praksa
                </Footer>
            </Layout>

        </>
    );
}

export default Home;
