import React from 'react'
import { formatISO9075 } from 'date-fns';
import { Link } from 'react-router-dom';
const Post = ({ _id, title, summary, content, cover, createdAt }) => {
    return (
        <div className='post'>
            <Link to={`/post/${_id}`} >
                <div className="image">
                    <img src={`https://github.com/sophiya02/Blog-Application-Not-a-Normal-One-/tree/main/backend/${cover}`} alt="" />
                </div>
            </Link>
            <div className='texts'>
                <Link to={`/post/${_id}`} >
                    <h2>{title}</h2>
                </Link>
                <p className='info'>
                    <a className='author'>Anubhav Agrawal</a>
                    <time>{formatISO9075(new Date(createdAt))} </time>
                </p>
                <p className='summary'>{summary}</p>
            </div>
        </div>
    )
}

export default Post