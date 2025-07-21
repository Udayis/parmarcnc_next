import React, { useEffect, useState } from 'react';

const ApiDemo = () => {
  const [result, setResult] = useState(null);
  const [csrf, setCsrf] = useState('');
  const [session, setSession] = useState('');

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
          // console.log('CSRF + Session initialized:', data.result.csrfToken, data.result.sessionId);
        } else {
          // console.error('Unexpected response format:', data);
        }
      } catch (err) {
        // console.error('Fetch error:', err);
      }
    };
    init();
  }, []);

  async function callApi() {
    if (!csrf || !session) {
      setResult({ error: 'Token not available. Try again in a moment.' });
      return;
    }
    try {
      const res = await fetch('https://bmbsiteapi.elvissoftware.com/GetBox', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'x-csrf-token': csrf,
          'x-session-token': session,
        },
      });
      const json = await res.json();
      setResult(json);
    } catch (error) {
      setResult({ error: 'API call failed' });
    }
  }

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: '0 auto' }}>
      <h1>Public API Test Page</h1>
      <button onClick={callApi} style={{ marginBottom: '1rem' }}>Call API</button>
      <pre style={{ background: '#f4f4f4', padding: '1rem', borderRadius: 4, minHeight: 100 }}>
        {result ? JSON.stringify(result, null, 2) : 'Click the button to call the API.'}
      </pre>
    </div>
  );
};

export default ApiDemo; 