import { Button, Input, notification, Modal } from "antd";

import { useState } from "react";
import { createUserAPI } from "../../services/api.services";


const UserForm = (props) => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { loadUser } = props;


    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, password, phone);
        if (res.data) {
            notification.success({
                message: "create user",
                description: "Tạo user thành công"
            })
            handleResetForm();
            await loadUser();
        }

    }

    const handleResetForm = () => {
        setIsModalOpen(false);
        setFullName("");
        setEmail("");
        setPhone("");
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }} >
                <div >User Table</div>
                <Button onClick={() => setIsModalOpen(true)} type="primary">Create user</Button>
            </div>

            <Modal title="Create user" open={isModalOpen} onOk={() => handleSubmitBtn()} onCancel={() => handleResetForm()}>
                <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
                    <div>
                        <span>Full Name</span>
                        <Input
                            value={fullName}
                            onChange={(event) => { setFullName(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Email</span>
                        <Input
                            value={email}
                            onChange={(event) => { setEmail(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <Input.Password
                            value={password}
                            onChange={(event) => { setPassword(event.target.value) }}
                        />
                    </div>
                    <div>
                        <span>Phone number</span>
                        <Input
                            value={phone}
                            onChange={(event) => { setPhone(event.target.value) }}
                        />
                    </div>
                </div>

            </Modal>

        </div >
    )
}

export default UserForm