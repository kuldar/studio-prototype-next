// Libraries
import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

// Redirect
export default () => {
  const router = useRouter()
  useEffect(() => router.push('/project'))
  return <></>
}