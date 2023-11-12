import { useRef } from "react";
import axios from "axios";
import "./register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const navigate = useNavigate(); // Change from history to navigate

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Suas senhas precisam ser iguais");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login"); // Change from history.push to navigate
            } catch (err) {
                console.log(err);
            }
        }
    };

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Fluff</h3>
                    <span className="loginDesc">
                        Conecte-se com seus animais de estimação preferidos e com o mundo ao seu redor no Fluff.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" type="email" required ref={email} className="loginInput" />
                        <input placeholder="Password" type="password" required ref={password} className="loginInput" minLength={6} />
                        <input placeholder="Password Again" type="password" required ref={passwordAgain} className="loginInput" />
                        <button className="loginButton" type="submit">
                            Inscrever-se
                        </button>
                        <button className="loginRegisterButton">
                            Entre com sua Conta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
