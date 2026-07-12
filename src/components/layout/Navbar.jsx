import { Link } from "react-router-dom";
import Button from "../common/Button";

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-5 flex justify-between">

      <h1 className="text-2xl font-bold text-blue-500">
        Placement Navigator
      </h1>

      <div className="space-x-8">

        <Link to="/">Home</Link>

        <Link to="/dashboard">Dashboard</Link>

        <Link to="/login">Login</Link>

        <Link to="/signup">Signup</Link>

      </div>

    </nav>
  );
}