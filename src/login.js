import React from 'react';

const Login = ({
    email , setEmail , password,   setPassword, 
handleLogin, handleSignUp, hasAccount, setHasAccount, emailError, passwordError
}) => {
    return (
        <section className="login">
            <div className="loginContainer">
                <label>Username</label>
                <input type="text" onChange={e => setEmail(e.target.value)} autoFocus required value={email} />
            <p className="errorMsg">{emailError}</p>
                <label>password</label>
                <input type="password" onChange={e => setPassword(e.target.value)} autoFocus required value={password} />
            <p className="errorMsg">{passwordError}</p>
         
            <div className="btnContainer">
                {hasAccount ? (
<><button onClick={handleLogin}>Sign In</button>
<p>Dont have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
</>
                ) : (
<><button onClick={handleSignUp}>Sign up </button>
<p> Have an account ? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span> </p>
</>
                )}
            </div>
            </div>
        </section>
    )
}

export default Login;