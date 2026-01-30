import {useState} from 'react';

const Login = (props) => {
    const[log, setLog] = useState({email : "", password : ""});
    
    const handleChange = (props) => {
        console.log(event.target.value);
    };
    const handleSubmit = (props) => {
        event.preventDefault();
        setLog(event.target.email.value, event.target.password.value);
    };
    if(log.email === "" || log.password === "") {
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlfor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlfor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={handleChange}/>
                </div>
                <button type="submit">Connexion</button>
            </form>   
        );
    }
    else if(log.email !== "" && log.password !== "") {
        return(
            <p>Vous êtes connecté.</p>
        );
    }
};

export default Login;