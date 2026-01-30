import {useState} from 'react';

const Login = (props) => {
    const[log, setLog] = useState({email : "", password : ""});
    const handleChange = (event) => {
        console.log(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let newLog = Object.assign({}, log, {email : event.target.email.value, password : event.target.password.value });
        setLog(newLog);
    };
    if(log.email === "" || log.password === "") {
        return(
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">
                        Email :
                    </label>
                    <input type="email" name="email" id="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">
                        Password :
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