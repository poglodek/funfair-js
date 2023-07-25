import { useState } from 'react';
import { Submit } from '../components/Submit';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '../components/Input';
import { ErrorList } from '../components/ErrorList';
import StringHelper from '../utilities/helpers/StringHelper';
import EmailValidator from '../utilities/helpers/MailHelper';
import { apiRequest } from '../utilities/api/apiHandler';
import { API_USERS } from '../utilities/helpers/Consts';
import { apiResponseMessages } from '../utilities/helpers/ApiErrorMessage';
import ScreenPopup from '../components/ScreenPopup';

export function Register() {

    const minmalDate = new Date(new Date().setFullYear(new Date().getFullYear() - 18));


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(minmalDate);
    const [mail, setMail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(['']);
    const [popupInfo, setPopupInfo] = useState('Server Error');
    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async () => {

        
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

        

        if(validErrors.length === 0)
        {
            console.log('API');

            const request =  {
                endpoint: `${API_USERS}SignUp`,
                method: 'POST',
                body:  {
                    FirstName: firstName,
                    LastName: lastName,
                    DateOfBirth: dateOfBirth,
                    Email: mail,
                    password: password
                }
            };

            const response = await apiRequest(request);
           
            console.log(response);

            if(!response.isSuccess){
                setPopupInfo(apiResponseMessages(response.ErrorMessage));
            }else{
                setPopupInfo('Register successfully');
            }

            setIsOpen(true);
        }

    };

    return (

        <div className="justify-center flex mb-5">
            <ScreenPopup text={popupInfo} isOpen={isOpen} setIsOpen={setIsOpen}  />
            <div className="max-w-md mx-auto mt-8">
                <div className="bg-gray-600 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <Input id="firstName" type="text" placeholder="First name" value={firstName} setValue={setFirstName} />
                    <Input id="lastName" type="text" placeholder="Last name" value={lastName} setValue={setLastName} />
                    <DatePicker selected={dateOfBirth} onChange={(date) => setDateOfBirth(date)} className="block text-gray-700 text-sm font-bold" maxDate={minmalDate} />
                    <Input id="mail" type="mail" placeholder="Mail" value={mail} setValue={setMail} />
                    <Input id="password" type="password" placeholder="Password" value={password} setValue={setPassword} />


                    <div className="flex items-center justify-between">
                        <Submit text="Register Now!" onSubmit={handleSubmit} />
                    </div>
                    <ErrorList list={errors} />
                </div>
            </div>
        </div>
    )
}