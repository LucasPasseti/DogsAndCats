// Register.jsx
import { useRef } from "react";
import axios from "axios";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const from = useRef();
    const breed = useRef();
    const size = useRef();
    const navigate = useNavigate();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            password.current.setCustomValidity("Suas senhas precisam ser iguais");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                from: from.current.value,
                breed: breed.current.value,
                size: size.current.value,
            };
            try {
                await axios.post("/auth/register", user);
                navigate("/login");
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
                    <form className="loginBox registerBox" onSubmit={handleClick}>
                        <input placeholder="Usuário" required ref={username} className="loginInput" />
                        <input placeholder="E-mail" type="email" required ref={email} className="loginInput" />
                        <input placeholder="Senha" type="password" required ref={password} className="loginInput" minLength={6} />
                        <input placeholder="Senha Novamente" type="password" required ref={passwordAgain} className="loginInput" />
                        <input placeholder="De onde você é" required ref={from} className="loginInput" />
                        <input placeholder="Animal/Raça" required ref={breed} className="loginInput" />
                        <input placeholder="Porte" required ref={size} className="loginInput" />
                        <button className="loginButton" type="submit">
                            Inscrever-se
                        </button>
                        <button className="loginRegisterButton">
                        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
                            Clique aqui para entrar
                        </Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
