import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://blog-application-backend-09l7.onrender.com/api/post').then(response => {
            response.json().then(posts => {
                setPosts(posts.data);
            })
        })
    }, [])
    console.log(posts)
    return (
        <>
            {posts.length && posts.map((post, index) => (
                <Post key={index} {...post} />
            ))}
        </>
    )
}

export default HomePage