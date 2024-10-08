// import './header.css';
import { Link, NavLink } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { HomeOutlined, UserOutlined, AccountBookOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { AuthContext } from '../components/context/auth.context';

const Header = () => {
    const { user } = useContext(AuthContext);
    console.log("Check data: ", user);



    const items = [
        {
            label: <Link to={"/"}>Home</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>User</Link>,
            key: 'user',
            icon: <UserOutlined />,
        },
        {
            label: <Link to={"/products"}>Products</Link>,
            key: 'Products',
            icon: <AccountBookOutlined />
        },
        ...(!user.id ? [{
            label: <Link to={"/login"}>Đăng nhập</Link>,
            key: 'login',
            icon: <LoginOutlined />,
        }] : []),
        ...(user.id ? [{
            label: `Welcome ${user.fullName}`,
            key: 'setting',
            icon: <AliwangwangOutlined />,
            children: [
                {
                    label: 'Đăng xuất',
                    key: 'logout',
                },
            ],
        }] : []),
    ];
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header