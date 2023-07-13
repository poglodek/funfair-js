import { useState } from 'react';
import { Submit } from '../components/Submit';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '../components/Input';
import { ErrorList } from '../components/ErrorList';
import StringHelper from '../utilities/helpers/StringHelper';
import EmailValidator from '../utilities/helpers/MailHelper';

export function Register() {

    const minmalDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18));


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(minmalDate);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(['']);

    const handleSubmit = () => {

        const validErrors = [];

        if (StringHelper.isStringEmptyOrWhitespace(firstName) || firstName.length < 3) {
            validErrors.push('First name is not valid');
        }
        if (StringHelper.isStringEmptyOrWhitespace(lastName) || lastName.length < 3) {
            validErrors.push('Last name is not valid');
        }
        if (!EmailValidator.validate(mail)) {
            validErrors.push('Mail  is not valid');
        }
        if (StringHelper.isStringEmptyOrWhitespace(password) || password.length < 5) {
            validErrors.push('Password is not valid');
        }

        setErrors(validErrors);

    };

    return (

        <div className="justify-center flex mb-5">
            <div className="max-w-md mx-auto mt-8">
                <form className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Input id="firstName" type="text" placeholder="First name" value={firstName} setValue={setFirstName} />
                    <Input id="lastName" type="text" placeholder="Last name" value={lastName} setValue={setLastName} />
                    <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} className="block text-gray-700 text-sm font-bold" maxDate={minmalDate} />
                    <Input id="mail" type="mail" placeholder="Mail" value={mail} setValue={setMail} />
                    <Input id="password" type="password" placeholder="Password" value={password} setValue={setPassword} />


                    <div className="flex items-center justify-between">
                        <Submit text="Register Now!" onSubmit={handleSubmit} />
                    </div>
                    <ErrorList list={errors} />
                </form>
            </div>
        </div>
    )
}