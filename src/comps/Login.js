import { useRef, useState } from "react";

const Login = () => {

    const [emailErr, setEmailErr] = useState();
    const [pwdErr, setPwdErr] = useState();

    const emailRef = useRef()
    const pwdRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value
        const password = pwdRef.current.value
        console.log(email, password)
    }


    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <h1>Login</h1>
            <input type="email" ref={emailRef} placeholder="email" />
            {emailErr && <div class="email-error error"></div>}
            <input type="password" ref={pwdRef} placeholder="password" />
            {pwdErr && <div class="password-error error"></div>}
            <button>SUBMIT</button>
        </form>
    );
}

export default Login;