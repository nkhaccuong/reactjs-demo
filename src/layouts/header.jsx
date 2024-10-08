// import './header.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import { HomeOutlined, UserOutlined, AccountBookOutlined, LoginOutlined, AliwangwangOutlined } from '@ant-design/icons';
import { Menu, message } from 'antd';
import { AuthContext } from '../components/context/auth.context';
import { logoutAPI } from '../services/api.services';

const Header = () => {
    const { user, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    console.log("Check data: ", user);

    const handleLogout = async () => {
        const res = await logoutAPI();
        if (res.data) {
            localStorage.removeItem("access_token");
            setUser({
                email: "",
                phone: "",
                fullName: "",
                role: "",
                avatar: "",
                id: ""
            })
            message.success("Log out success");
            navigate("/")
        }
    }


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
                    label: <span onClick={() => handleLogout()}>Log out</span>,
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