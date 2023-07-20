import { useState } from 'react';
import { Submit } from '../components/Submit';
import { LinkButton } from '../components/LinkButton';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';
import ScreenPopup from '../components/ScreenPopup';
import { apiRequest } from '../utilities/api/apiHandler';



export function Login({ setUser }) {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const request =  {
            endpoint: 'http://localhost:5146/SignUp',
            method: 'POST',
            body:  {
                mail: mail,
                password: password
            }
        };

        const response = await   apiRequest(request);

        alert(response.statusCode);
        alert(response.ErrorMessage);

        setUser({
            'mail': { mail },
            'token': true
        });

        setIsOpen(true);
      //  navigate('/');
    };


    return (
        <div className="justify-center flex">
        <ScreenPopup text="Login successfully!" isOpen={isOpen} setIsOpen={setIsOpen}  />
            <div className="max-w-md mx-auto mt-8">
                <form onSubmit={handleSubmit} className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Input id="mail" type="mail" placeholder="Mail" value={mail} setValue={setMail} />
                    <Input id="password" type="password" placeholder="Password" value={password} setValue={setPassword} />
                    <div className="flex items-center justify-between">
                        <Submit text="Login!" />
                        <LinkButton text="Register!" destiny="/register" />
                    </div>
                </form>
            </div>
        </div>
    );
}