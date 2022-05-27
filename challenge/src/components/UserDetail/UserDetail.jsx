import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import style from './userdetail.module.css';
import {Link} from 'react-router-dom';

const UserDetail = () => {

    const [user, setUser] = useState({});
    const params = useParams();

    useEffect(() => {
        fetch(`https://api.github.com/users/${params.user}`)
        .then(response => response.json())
        .then(response => setUser(response))
    }, [params.user])

    return(
        <div className={style.container}>
            <div className={style.divImg}>
                {user.avatar_url && <img src={user.avatar_url} alt='avatar' />}
            </div>
            <div className={style.details}>
                {user.login && <p>User: {user.login} </p>}
                {user.name && <p>Name: {user.name} </p>}
                {user.location && <p>Location: {user.location}</p>}
                <a href={user.html_url} className={style.iconLink}>
                    <i className={`${style.icon} devicon-github-original`}></i>
                </a>
                <Link to='/'>
                    <button className={style.back}>Go Back</button>
                </Link>
            </div>
        </div>
    )
}

export default UserDetail;