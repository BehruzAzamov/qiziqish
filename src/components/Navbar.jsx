import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className="navbar mb-10">
        <div className="max-w-screen-lg w-full mx-auto flex justify-between items-center">
            <Link className="btn btn-primary btn-lg font-bold text-2xl px-2" to="/">MyK</Link>
            <Link to="/create" className="btn btn-secondary">Create</Link>
        </div>
    </div>
  )
}

export default Navbar