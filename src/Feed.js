import React, { useEffect, useState } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import Post from './Post'
import { db } from './firebase'
import firebase from 'firebase'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import FlipMove from 'react-flip-move'
function Feed() {
    const user=useSelector(selectUser)
    const [posts,setPosts]=useState([])
    const [input,setInput]=useState('')
    useEffect(()=>{
        db.collection('posts').orderBy('timestamp','desc').onSnapshot((snaphot)=>(
            setPosts(snaphot.docs.map((doc)=>(
                {
                    id:doc.id,
                    data:doc.data(),
                }
            )))
        ))
    },[])
    const sendPost=(e)=>{
        e.preventDefault()
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message:input,
            photoUrl:user.photoUrl || '',
            timestamp:firebase.firestore.FieldValue.serverTimestamp()



        })
        setInput('')
    }
    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={input} onChange={(e)=> setInput(e.target.value)} type='text' />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className='feed__inputOptions'>
                    <InputOption title='Photo' Icon={ImageIcon} color='#7885F9' />
                    <InputOption title='Video' Icon={SubscriptionsIcon} color='#E7A33E' />
                    <InputOption title='Event' Icon={EventNoteIcon} color='#C0CCBCD' />
                    <InputOption title='Write Article' Icon={CalendarViewDayIcon} color='#7FC15E' />
                </div>
            </div>
            <FlipMove>
            {posts.map(({id,data:{name,description,message,photoUrl}})=>(
                <Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
            ))}
            </FlipMove>
        </div>
    )
}

export default Feed
