import React from 'react'
import './login.scss'

export default function Login() {
  return (
    <div className="wrapper fadeInDown">
      <div id="formContent">

        <div className="fadeIn first">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/1200px-User_font_awesome.svg.png" id="icon" alt="User Icon" />
        </div>

        <form>
          <input type="text" id="login" className="fadeIn second" name="login" placeholder="login"/>
          <input type="text" id="password" className="fadeIn third" name="login" placeholder="password"/>
          <input type="submit" className="fadeIn fourth" value="Log In"/>
        </form>

        <div id="formFooter">
          <a className="underlineHover" href="#">Forgot Password?</a>
        </div>

      </div>
    </div>
  )
}
