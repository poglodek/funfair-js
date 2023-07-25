
import { API_BASE_URL, API_USERS_URL } from './constants';


export const apiRequest = async (requestData) => {
    const { method, endpoint, body } = requestData;
  
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    if (body) {
      requestOptions.body = JSON.stringify(body);
    }
  
    try {
      const response = await fetch(endpoint, requestOptions);
  
      const Response = {
        statusCode: response.status,
        isSuccess: response.ok,
      };
  
      if (response.status === 400) {
        Response.ErrorMessage = await response.text();
      } else if (response.status === 401) {
        Response.UnAuthorized = true;
      } else if (response.status === 200) {

        if(response.bodyUsed){
          Response.Object = await response.json();
        }
        
      } else {
        console.log(await response.text());
        Response.ErrorMessage = await response.text();//'Unexpected response from the server. Try again later!';
      }
  
      return Response;

    } catch (error) {
        console.error('Error:', error);
      return Response = {
        statusCode: 500,
        isSuccess: false,
        ErrorMessage: 'Unexpected response from the server. Try again later!'
      };
    }
  };
  