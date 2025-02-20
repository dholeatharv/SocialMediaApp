import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import {useForm} from 'react-hook-form'
import * as yup from 'yup'
import './CreateForm.css'
import { auth, db } from '../../config/firebase'
import { addDoc,collection } from 'firebase/firestore'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'
const CreateForm = () => {
    const navigate = useNavigate()
    const postRef = collection(db, "post")
    const[user] = useAuthState(auth)

    const schems = yup.object().shape({
        title : yup.string().required("You must add title"),
        description : yup.string().required("You must add description")
    })
    const {register, handleSubmit,formState:{errors}} = useForm({
        resolver: yupResolver(schems)
    })

    const onCreatePost = async(data)=>{
        await addDoc(postRef, {
            title : data.title,
            description : data.description,
            username : user?.displayName,
            userId : user?.uid
        })
        navigate('/')
    }
  return (
    user ? 
   ( <form onSubmit={handleSubmit(onCreatePost)} className='create-form'>
        <input placeholder='Title...' {...register('title')}/>
        <p>{errors.title?.message}</p>
        <textarea placeholder='Description...' {...register('description')}/>
        <p>{errors.description?.message}</p>
        <input type='submit' value="Submit" />
    </form>) : null
  )
}

export default CreateForm