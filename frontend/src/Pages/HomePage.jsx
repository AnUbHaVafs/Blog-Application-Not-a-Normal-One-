import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const HomePage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/post').then(response => {
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