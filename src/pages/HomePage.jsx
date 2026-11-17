import { useContext } from "react";
import { Link } from "react-router";
import { UserContext } from "../lib/globalContext";

export default function HomePage() {
    const { user } = useContext(UserContext);
    return (
        <div>
            <Link to="/login">Login</Link>
            <h1>{ user.email }</h1>
        </div>
    );
}
