import "./login.css";
import {useRef} from "react";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value);
    }
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
                        <h2 className="loginTitle">Bem-vindo de volta!</h2>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email}/>
                        <input placeholder="Senha" className="loginInput" type="password" minLength="6" required ref={password}/>
                        <button className="loginButton">Conecte-se</button>
                        <span className="loginForgot">Esqueceu sua senha?</span>
                        <button className="loginRegisterButton">
                            Criar uma nova conta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
