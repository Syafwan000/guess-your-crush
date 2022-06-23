import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Page404.css";

function Page404() {
    return (
        <>
            <div className="page-404">
                <div className="display-404">
                    <h1 className="text-error">Error</h1>
                    <h1 className="text-404">404</h1>
                </div>
                <Link className="btn-beranda" to="/"><AiFillHome className="home-icon" />&nbsp;&nbsp;Beranda</Link>
            </div>
        </>
    )
}

export default Page404;