import React, { useEffect, useState } from 'react';
import './api.css';

const Api = () => {
    const [result, setResult] = useState(null);
    const [csrf, setCsrf] = useState('');
    const [session,setSession] = useState('');

    useEffect(() => {
        const init = async () => {
          try {
            const res = await fetch('https://bmbsiteapi.elvissoftware.com/ReqInit', {
              credentials: 'include',
            });
            const data = await res.json();
    
            if (data?.result) {
              setCsrf(data.result.csrfToken);
              setSession(data.result.sessionId);
             
              console.log('CSRF + Session initialized:', data.result.csrfToken, data.result.sessionId);
            } else {
              console.error('Unexpected response format:', data);
            }
          } catch (err) {
            console.error('Fetch error:', err);
          }
        };
    
        init();
      }, []);

    async function callApi() {
        if (!csrf || !session) {
            console.warn('Token not available yet.');
            setResult({ error: 'Token not available. Try again in a moment.' });
            return;
        }
    
        try {
            const res = await fetch('https://bmbsiteapi.elvissoftware.com/GetBox', {
                method: 'GET',
                credentials: 'include',
                headers: {
                    'x-csrf-token': csrf,
                    'x-session-token': session

                }
            });
    
            const json = await res.json();
            setResult(json);
            console.log('API response:', json);
        } catch (error) {
            console.error('API call error:', error);
            setResult({ error: 'API call failed' });
        }
    }
    

    return (
        <div className="api_main_div">
            <h1>Public API Test Page</h1>
            <button onClick={callApi}>Call API</button>
            <pre>{result ? JSON.stringify(result, null, 2) : 'Click the button to call the API.'}</pre>
        </div>
    );
};

export default Api; 