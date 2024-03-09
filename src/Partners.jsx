import { useEffect, useState } from 'react'
import './Partners.css'
import Friend from './Friend'
export default function Partners(){
    
    const [friends,setFriends] = useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    } ,[])


    return (
        <div className='box'>
            <h3>Friends:{friends.length}</h3>
            {
              friends.map(friend => <Friend friend={friend}>

              </Friend>)
            }
        </div>
    )
}

/**
 * 1.state to hold data
 * 2.useEffect with dependency array
 */