import { Button, Input } from "antd";
import axios from "axios";
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = () => {
        const URL_BACKEND = "http://localhost:8080/api/v1/user";
        const data = {
            fullName: fullName,
            email: email,
            password: password,
            phone: phone
        }
        axios.post(URL_BACKEND, data);
        console.log("Check data: ", { fullName, email, password, phone });
    }

    return (
        <div className="user-form" style={{ margin: "20px 0" }}>
            <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>

                <div>
                    <span>Full Name</span>
                    <Input onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>

                    <span>Email</span>
                    <Input onChange={(event) => setEmail(event.target.value)} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password onChange={(event) => setPassword(event.target.value)} />
                </div>
                <div>
                    <span>Phone number</span>
                    <Input onChange={(event) => setPhone(event.target.value)} />
                </div>
                <Button onClick={handleClick} type="primary">Create user</Button>
            </div>
        </div >
    )
}

export default UserForm