import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { fetchGetAllUser } from '../../services/api.services';


const UserTable = () => {
    const [dataUsers, setDataUSer] = useState([]);
    useEffect(() => {
        console.log("Run render 11111");
        loadUser();
    }, [])

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
            key: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        }
    ];
    const loadUser = async () => {
        const res = await fetchGetAllUser();
        setDataUSer(res.data);
    }
    console.log(">>>>Run render");
    return (
        <Table columns={columns} dataSource={dataUsers} rowKey="_id" />
    )
}

export default UserTable;
