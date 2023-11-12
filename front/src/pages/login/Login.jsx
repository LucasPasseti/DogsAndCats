import "./login.css";
import { loginCall } from "../../apiCalls"
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching,  dispatch } = useContext(AuthContext);


    const handleClick = (e) => {
        e.preventDefault();
        loginCall({ email: email.current.value, password: password.current.value }, dispatch);
    };

    console.log(user)

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
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Senha" className="loginInput" type="password" minLength="6" required ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching} >{isFetching ? <CircularProgress color="primary" size="20px" /> : "Conecte-se"}</button>
                        <span className="loginForgot">Esqueceu sua senha?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? <CircularProgress color="primary" size="20px" /> : "Criar uma nova conta"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
