import "./register.css";

export default function Register() {
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
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Inscrever-se</button>
                        <button className="loginRegisterButton">
                            Entre com sua Conta
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
