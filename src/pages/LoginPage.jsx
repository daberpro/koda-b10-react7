import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserContext } from "../lib/globalContext";

export default function LoginPage() {
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        setUser({
            email: data.get("email"),
            password: data.get("password")
        });
        navigate("/");
    }

    return (
        <div>
            <div>
                <Link to={"/"}>Home</Link>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <label htmlFor="email">email</label>
                        <input name="email" id="email" type="email" />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input name="password" id="password" type="password" />
                    </div>

                    <button type="submit">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}
