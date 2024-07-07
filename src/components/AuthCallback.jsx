import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthCallback = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    if (code) {
      // Exchange the authorization code for an access token
      const tokenEndpoint = `${import.meta.env.VITE_KINDE_DOMAIN}/oauth2/token`;
      const params = {
        client_id: import.meta.env.VITE_KINDE_CLIENT_ID,
        client_secret: '<your_kinde_client_secret>',
        grant_type: 'authorization_code',
        redirect_uri: import.meta.env.VITE_REDIRECT_URI,
        code: code
      };

      fetch(tokenEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
      })
      .then(response => response.json())
      .then(data => {
        const accessToken = data.access_token;
        // Use the access token to authenticate the user
        navigate('/home', { replace: true });
      })
      .catch(error => {
        setError(error.message);
      });
    }
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Authenticating...</div>;
};

export default AuthCallback;