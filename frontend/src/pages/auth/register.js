import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setMessage("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/register", {
                name,
                email,
                password,
            });

            if (response.data.success) {
                setMessage("Đăng ký thành công! Bạn có thể đăng nhập ngay.");
            } else {
                setMessage("Email đã tồn tại hoặc có lỗi xảy ra!");
            }
        } catch (error) {
            setMessage("Lỗi kết nối server!");
        }
    };

    return (
        <div className="register-container">
            <h2>Đăng Ký</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Họ và Tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Đăng Ký</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Register;
