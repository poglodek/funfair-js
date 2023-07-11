import { Link } from "react-router-dom";

export function LinkButton({ destiny, className, text, customAdded }) {
    
    if (className == null) {
        className = ReturnDefaultClassName();
    }

    className += " " + customAdded

    return (<Link to={destiny} className={className}>{text}</Link>);
}


function ReturnDefaultClassName() {
    return "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
}