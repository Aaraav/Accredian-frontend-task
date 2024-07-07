// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios'; // Import axios for HTTP requests
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

// eslint-disable-next-line react/prop-types
export default function Referform({ onCancel }) {
  const [myName, setMyName] = useState('');
  const [myEmail, setMyEmail] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [message, setMessage] = useState('');
const {user}=useKindeAuth();
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'myName') {
      setMyName(value);
    } else if (name === 'myEmail') {
      setMyEmail(value);
    } else if (name === 'userEmail') {
      setUserEmail(value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://accredian-backend-task-od6a.onrender.com/api/user/referal', {
        my_name: myName,
        my_email: myEmail,
        user_email: userEmail,
      });
      setMessage(response.data.message);
      // Clear form fields after successful submission (optional)
      setMyName('');
      setMyEmail('');
      setUserEmail('');
    } catch (error) {
      console.error('Error submitting referral:', error);
      setMessage(`Failed to submit referral : ${error.response.data.message}`);
    }
  };

  const handleCancel = () => {
    onCancel(); // Call parent function to handle cancel action
  };

  const autofill=()=>{
setMyEmail(user.email);
setMyName(`${user.given_name}${user.family_name}`);
  }

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center  z-50 bg-black bg-opacity-75">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-blue-600">Refer a User</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="myName" className="block text-sm font-medium text-gray-700">Your Name:</label>
            <input
              type="text"
              id="myName"
              name="myName"
              value={myName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="myEmail" className="block text-sm font-medium text-gray-700">Your Email:</label>
            <input
              type="email"
              id="myEmail"
              name="myEmail"
              value={myEmail}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
             {/* eslint-disable-next-line react/no-unescaped-entities */}
            <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">User's Email:</label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={userEmail}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              required
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700 mr-2"
            >
              Refer
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:bg-gray-400 ml-2"
            >
              Cancel
            </button>
          </div>
        </form>

        {message && <p className="mt-4 text-sm text-blue-600">{message}</p>}
        <button onClick={()=>autofill()} className=' m-2 hover:text-blue-600 '>Autofill</button>

      </div>
    </div>
  );
}
