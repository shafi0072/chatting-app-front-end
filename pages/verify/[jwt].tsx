import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import decodeJWT from '@/src/config/jwtDecoder';
import { baseUrl } from '@/src/config/baseUrl';
const Jwt = () => {
  const router = useRouter()

  useEffect(() => {
    fetch(`${baseUrl}/auth/verify`,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({token:router.query.jwt})
    })
    .then(response => response.json())
    .then(data => {
      console.log(data)
      router.push('/auth')
    })
    .catch(err => {
      console.log(err)
    })
  })
  return (
    <div>
      
    </div>
  );
};

export default Jwt;