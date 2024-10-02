import UserForm from "../components/user/user.form"
import UserTable from "../components/user/user.table"
import { useEffect, useState } from 'react';
import { fetchGetAllUser } from '../services/api.services';

const User = () => {
    const [dataUsers, setDataUSer] = useState([]);

    useEffect(() => {
        console.log("Run render 11111");
        loadUser();
    }, [])

    const loadUser = async () => {
        const res = await fetchGetAllUser();
        setDataUSer(res.data);
    }
    console.log(">>>>Run render");
    return (
        <div>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={dataUsers}
                loadUser={loadUser}
            />
        </div>

    )
}

export default User