import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Callback = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const code = urlParams.get('code');
    const scope = urlParams.get('scope');
    const state = urlParams.get('state');

    if (code && scope && state) {
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
  }, [location]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>Authenticating...</div>;
};

export default Callback;