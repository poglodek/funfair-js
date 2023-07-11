import { useState } from 'react';
import { Submit } from '../components/Submit';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '../components/Input';

export function Register() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(new Date());
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(dateOfBirth);

    };


    return (

        <div className="justify-center flex">
            <div className="max-w-md mx-auto mt-8">
                <form onSubmit={handleSubmit} className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <Input id="firstName" type="text" placeholder="First name" value={firstName} setValue={setFirstName} />
                <Input id="lastName" type="text" placeholder="Last name" value={lastName} setValue={setLastName} />
                <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} className="block text-gray-700 text-sm font-bold mb-2 mb-4"  />
                <Input id="mail" type="mail" placeholder="Mail" value={mail} setValue={setMail} />
                <Input id="password" type="password" placeholder="Password" value={password} setValue={setPassword} />
                    <div className="flex items-center justify-between">
                        <Submit text="Register Now!"/>
                    </div>
                </form>
            </div>
        </div>
    )
}