// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export default function Navbar() {
    const {  user,logout } = useKindeAuth();
//https://accredian-backend-task-od6a.onrender.com
    const senddata = async () => {
        try {
            const response = await fetch('https://accredian-backend-task-od6a.onrender.com/api/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: `${user.given_name} ${user.family_name}`, // Assuming user object has given_name and family_name
                    email: user.email,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to create user');
            }

            const data = await response.json();
            console.log('User created:', data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    useEffect(() => {
        // Call senddata function on component mount
        if (user && user.given_name && user.family_name && user.email) {
            senddata();
        }
    }, [user]);

    return (
        <>
            <div className='w-[100vw] h-24  flex justify-between'>
                <h1 className='mt-[20px] ml-[150px] font-semibold text-blue-500 text-3xl'>accredian</h1>
                <ul className='flex mt-[2%] mr-[10%] text-lg'>
                    <li className='mr-10'>Refer & Earn</li>
                    <li className='mr-10'>Resources</li>
                    <li className='mr-10'>About us</li>
                    <li className='mr-10'>
                        <button className='border-black bg-blue-500 text-white p-1 text-base rounded-md w-24' onClick={logout} type='button'>
                            Logout
                        </button>
                    </li>
                </ul>
            </div>
        </>
    );
}
