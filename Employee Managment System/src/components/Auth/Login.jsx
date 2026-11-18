import { useState } from 'react'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitbutton = (event) => {
    event.preventDefault()
    console.log("Email is " ,email)
    console.log("Password is" ,password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <div className="login-header">
          <span className="brand-badge">EMS</span>
          <h1>Welcome Back</h1>
          <p>Sign in to your employee dashboard</p>
        </div>

        <form className="login-form" onSubmit={submitbutton}>
          <label className="input-group">
            <span>Email</span>
            <input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>

          <label className="input-group">
            <span>Password</span>
            <input
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="#">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login