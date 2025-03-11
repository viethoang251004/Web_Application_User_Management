// import React, { useState } from "react";
// import axios from "axios";
// import "../css/styles.css"

// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!email || !password) {
//             setMessage("Vui lòng nhập email và mật khẩu.");
//             return;
//         }

//         try {
//             const response = await axios.post("http://localhost:8000/api/login", {
//                 email,
//                 password,
//             });

//             if (response.data.success) {
//                 setMessage("Đăng nhập thành công!");
//             } else {
//                 setMessage("Sai email hoặc mật khẩu!");
//             }
//         } catch (error) {
//             setMessage("Lỗi kết nối server!");
//         }
//     };

//     return (
//         <div className="login-container">
//             <h2>Đăng Nhập</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Mật khẩu"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Đăng nhập</button>
//             </form>
//             <p>{message}</p>
//         </div>
//     );
// };

// export default Login;



import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Thêm useNavigate để chuyển trang
import "../../css/styles.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate(); // Hook dùng để chuyển hướng trang

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMessage("Vui lòng nhập email và mật khẩu.");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/api/login", {
                email,
                password,
            });

            if (response.data.success) {
                setMessage("Đăng nhập thành công!");
                
                // Kiểm tra nếu là admin thì chuyển hướng
                if (response.data.user.role === "admin") {
                    navigate("/admin");
                }
            } else {
                setMessage("Sai email hoặc mật khẩu!");
            }
        } catch (error) {
            setMessage("Lỗi kết nối server!");
        }
    };

    return (
        <div className="login-container">
            <h2>Đăng Nhập</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit">Đăng nhập</button>
            </form>
            <p>{message}</p>
        </div>
    );
};

export default Login;
