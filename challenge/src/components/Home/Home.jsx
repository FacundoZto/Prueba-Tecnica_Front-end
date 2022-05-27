import style from './home.module.css';
import {useState} from 'react';
import {validate} from './validate.js';
import UserList from '../UserList/UserList.jsx';
import Graphic from './Graphic.jsx';

const Home = () => {

    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [users, setUsers] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();
        setInput(event.target.value);
        setError(validate(event.target.value));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(error.length > 0) return;

        fetch(`https://api.github.com/search/users?q=${input}`)
        .then(response => response.json())
        .then(response => {
            if(response.items.length > 0) {
                setUsers(response.items.slice(0, 10))
            }
        });

        setInput('');
    }
    

    return(
        <div className={style.container}>
            <div>
                <h1 className={style.title}>GITHUB USERS</h1>
            </div>

            <div className={style.formDiv}>
                <form onSubmit={handleSubmit} className={style.form}>
                    <span className={`${style.icon} material-symbols-outlined`}>person_search</span>
                    <input 
                    className={style.searchInput} 
                    type='text' value={input} 
                    onChange={handleChange} 
                    placeholder='Search User...'
                    >
                    </input>
                    {error.length > 0 && <section className={style.errorMessage} >{error}</section>}
                    <button className={style.searchButton} type='submit' >SEARCH</button>
                </form>
            </div>

            <div className={style.userList}>
                <UserList users={users} />
            </div>

            <div className={style.graphic}>
                <Graphic users={users}/>
            </div>
        </div>
    )
}

export default Home;