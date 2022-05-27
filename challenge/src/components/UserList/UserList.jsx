import style from './userlist.module.css';
import {Link} from 'react-router-dom';

const UserList = ({users}) => {
    return(
        <div>
            {
                users.map(u => (
                    <Link className={style.link} to={`/detail/${u.login}`} key={u.id}>
                    <div className={style.userDiv}>
                        <span className={`${style.icon} material-symbols-outlined`}>account_circle</span>
                        <p className={style.nameId}>Name:</p> <p className={style.info}>{u.login}</p>
                        <p className={style.nameId}>ID:</p> <p className={style.info}>{u.id}</p>
                    </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default UserList;