
export function LoginForm() {
  
    return (
      <>
        <section className="loginFormContent">
          <div className="formHeader">
            <h1>Log in</h1>
            <h2>Welcome back! Please enter your details.</h2>
          </div>
          <div className="formContent">
            <form>
              <div className="formContentItem">
                <label>Email</label>
                <input type="email" id="email" placeholder="Enter your email"></input>
              </div>
              <div className="formContentItem">
                <label>Password</label>
                <input type="password"></input>
              </div>
              <a>Forgot password</a>
            </form>
            <div className="formAction">
              <button className="signIn">Sign in</button>
              <button className="signInFacebook">Sign in with Facebook</button>
              <button className="signInApple">Sign in with Apple</button>
            </div>
          </div>
          <div className="signInInvitation">
            Don't have an account? <a>Sign up</a>
          </div>
        </section>
      </>
      
    );
  }