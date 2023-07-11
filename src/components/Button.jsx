
export function Button({ text, type, callBack }) {

    return (
        <button
            onClick={callBack}
            type={type}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            {text}
        </button>

    );
}