
"use client"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../app/AuthContext';
import Image from 'next/image';
const LoginForm = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        login();
        router.push('/products');
        // Handle successful login here
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Fetch error:', error);
      setError('An error occurred');
    }
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      <h1 className='text-2xl text-center'>
        Login Page
      </h1>
      <div className='flex '>
      <div className='w-1/2 border rounded-lg mx-4 my-12'>
      <div>
      <input
      className='w-2/3  dark:bg-gray-700 bg-gray-200 p-4 mt-12 mb-6 mx-32 rounded-lg'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div>
      <input
            className='w-2/3  dark:bg-gray-700 bg-gray-200 p-4 my-6 mx-32 rounded-lg'


        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      </div>
      <button className=' my-6 mx-32 rounded-lg dark:bg-gray-700 px-10 py-2' type="submit">Login</button>
      {error && <p>{error}</p>}
      </div>
<div className='mx-8 my-16'>
  <Image src="/images/slide2.jpg" width={500} height={500} alt="login image" className='w-full rounded-lg' />
</div>
</div>
    </form>
  );
};

export default LoginForm;





  