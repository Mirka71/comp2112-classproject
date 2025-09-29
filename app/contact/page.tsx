'use client';
import PageTitle from "../components/PageTitle";

import { useState } from "react";

export default function Contact() {
    const [ name, setName] = useState<string>('');

    // watch name input and update state var as input value changes
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }
    // create var for message 
   const [message, setMessage] = useState<string>('');
    const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
    }
    // create var for message
 const [confirmation, setConfirmation] = useState<string>('');

    // show confirmation when button clicked
    const handleSubmit = () => {
         setConfirmation(`Your Name: ${name} Nice to meet you, ${message} `)
    }

    return (
        <main>
            <PageTitle title="Contact" />
            <h1>Contact Us</h1>
            <p>Contact us at 705.000.0000 or send us a message below</p>
            <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} />
            <p>Your name is: {name}</p>

            {/* Make new input for the message*/}
            <input type="text" placeholder="Message" value={message} onChange={handleMessageChange}/>
            <p>Your message is: {message}</p>
            <button onClick={handleSubmit}>Submit</button>
            <p>{confirmation}</p>
        </main>
    );

       


}