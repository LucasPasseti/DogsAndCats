import "./login.css";

export default function Login() {
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
                    <div className="loginBox">
                        <h2 className="loginTitle">Bem-vindo de volta!</h2>
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Senha" className="loginInput" type="password" />
                        <button className="loginButton">Conecte-se</button>
                        <span className="loginForgot">Esqueceu sua senha?</span>
                        <button className="loginRegisterButton">
                            Criar uma nova conta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
