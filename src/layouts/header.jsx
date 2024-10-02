// import './header.css';
import { Link, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { HomeOutlined, UserOutlined, AccountBookOutlined } from '@ant-design/icons';
import { Menu } from 'antd';

const Header = () => {
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
    ];
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header