import React from 'react'
import { getDoc,collection } from 'firebase/firestore' 
import { db } from '../config/firebase'

export const Main = () => {
  const postref = collection(db,"post")
  return (
    <div>Home page</div>
  )
}
