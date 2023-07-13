import { useNavigate } from 'react-router-dom';

export function Logout({ setUser }) {
    const navigate = useNavigate();

    setUser({
        'mail': '',
        'token': false
    });
    navigate('/login');
}