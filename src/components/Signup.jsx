import { useKindeAuth } from '@kinde-oss/kinde-auth-react';
import React from 'react';

export default function Signup() {
    const { register } = useKindeAuth();

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-10 rounded-xl shadow-2xl">
                <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">Accredian Signup</h1>
                <p className="text-center text-gray-700 mb-8">
                    Join Accredian and start your journey today!
                </p>
                <button
                    className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={register}
                    type="button"
                >
                    Register
                </button>
            </div>
        </div>
    );
}
