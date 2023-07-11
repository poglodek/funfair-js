

export function Input({ id, type, value, setValue,placeholder }) {

    return (

        <div className="mb-4">
            <label htmlFor={id} className="block text-white-700 text-sm font-bold mb-2">{placeholder}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={`Enter your ${placeholder}`}
                required
            />
        </div>

    );

}