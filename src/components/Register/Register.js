import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="login-form">
      {/* shob jinish gula amra pore center flex korte chai tai amra shob gula jinish ekta div er vitore rakhbo eita e hocche idea amader ekta additional div create korar */}
      <div>
        <h2>Regsiter: Create Account</h2>
        <form onSubmit="">
       <input type="email" name="" id="" placeholder="Your Email" />
       <br/>
       <input type="password" name="" id="" placeholder="Your password"/>
       <br/>
       <input type="password" name="" id="" placeholder="Re-enter password"/>
       <br/>
       <input type="submit" value="Submit" />

        </form>
        <p>Already have an account?<Link to="/login">Login</Link></p>
        <div>----------or------</div>
        <button className="btn-regular">Google sign in</button>
      </div>
    </div>
  );
};

export default Register;