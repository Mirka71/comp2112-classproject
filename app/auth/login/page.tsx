'use client';
import PageTitle from "../../components/PageTitle"

// import useState in order to create a state var
import { useState } from "react";
// Lab 4 - Login Form

// Login function

export default function Login() {

    // Make state variable
    const [message, setMessage] = useState<string>('');

    return(
        <section>
        <PageTitle title="Login" />
        
            <h1>Login</h1>

        <form>
            {/* username text input */}
            <input type="text" placeholder="Enter your username"/>

            {/* password input */}
            <input type="password" placeholder="Please enter your password"/>

            {/* submit button */}
            <button type="submit"/>

        </form>

        </section>

    )
}