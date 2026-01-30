import {useState} from 'react';
const Note = (props) => {
    const[textNote, setTextNote] = useState("");
    
    const handleChange = (event) => {
        console.log(event.target.value);
        setTextNote(event.target.value);
    };
    return (
        <>
            <p>Votre message : {textNote}</p>
            <form>
                <label htmlfor="message">
                    Message :
                </label>
                <input type="text" name="message" id="message" onChange={handleChange}/>
                <button type="submit">Valider</button>
            </form>
        </>
    
    )
};
export default Note;