import { useState } from 'react';
import { Submit } from '../components/Submit';
import { LinkButton } from '../components/LinkButton';
import { Input } from '../components/Input';
import { useNavigate } from 'react-router-dom';
import ScreenPopup from '../components/ScreenPopup';
import { apiRequest } from '../utilities/api/apiHandler';
import { API_USERS } from '../utilities/helpers/Consts';



export function Login({ setUser }) {
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [errorMessage, setErrorMessage] = useState('Server Error!');
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const request =  {
            endpoint: `${API_USERS}SignIn`,
            method: 'POST',
            body:  {
                Email: mail,
                password: password
            }
        };

        const response = await apiRequest(request);

        console.log(response);

        if(response.statusCode === 200)
        {
            setUser({
                'mail': { mail },
                'token': true,
                'bearerToken' : response.JWT,
                'userId': response.UserId
            });
    
            setErrorMessage('Login successfully!');
            setIsOpen(true);
            navigate('/');
        }

        setErrorMessage('Invalid password or mail');
        setIsOpen(true);
        

    };


    return (
        <div className="justify-center flex">
        <ScreenPopup text={errorMessage} isOpen={isOpen} setIsOpen={setIsOpen}  />
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