import { useState } from 'react';


export function Login() {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO logic
        console.log('Mail:', mail);
        console.log('Password:', password);
    };

    return (
        <div className="justify-center flex">
            <div className="max-w-md mx-auto mt-8">
                <form onSubmit={handleSubmit} className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-white-700 text-sm font-bold mb-2">Mail</label>
                        <input
                            type="text"
                            id="mail"
                            value={mail}
                            onChange={(e) => setMail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your mail"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-white-700 text-sm font-bold mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Login!
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}