import { Link } from "react-router-dom";


const ErrorElement = () => {
    return (
        <div className="h-[90vh] flex items-center justify-center">
            <div className="flex flex-col text-center ">
            <h1 className="text-5xl font-bold text-slate-800">404</h1>
            <p className="text-xl mt-2">Page Not Found</p>
            <Link to='/' className="btn btn-warning mt-20">Go to home</Link>
            </div>
        </div>
    );
};

export default ErrorElement;