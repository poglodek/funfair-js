export  const apiResponseMessages = (key) => {
    const translations = {
        invalid_password: 'Invalid user password',
        invalid_name: 'Invalid user name!',
        user_exists: 'User with that emial exists'
    };
  
    return translations[key] || ''; 
  };
  