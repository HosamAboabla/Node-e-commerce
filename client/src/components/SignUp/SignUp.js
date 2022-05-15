import './SignUp.css'
const SignUp = () => {
    return ( 
    <div className='signup-body'>    
        <div className="signup-container">
            <div className="signup-title">Registration</div>
            <div className="signup-content">
            <form className='signup-form' >
                <div className="user-details">
                <div className="input-box">
                    <span className="signup-details">first Name</span>
                    <input type="text" placeholder="Enter your first name" required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Last Name</span>
                    <input type="text" placeholder="Enter your Last name" required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Email</span>
                    <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Phone Number</span>
                    <input type="text" placeholder="Enter your number" required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Password</span>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="input-box">
                    <span className="signup-details">Confirm Password</span>
                    <input type="password" placeholder="Confirm your password" required />
                </div>
                </div>
                <div className="gender-details">
                <input type="radio" name="gender" id="dot-1"/>
                <input type="radio" name="gender" id="dot-2"/>
                <span className="gender-title">Gender</span>
                <div className="category">
                    <label for="dot-1">
                        <span className="dot one"></span>
                        <span className="gender">Male</span>
                    </label>
                    <label for="dot-2">
                        <span className="dot two"></span>
                        <span className="gender">Female</span>
                    </label>
                </div>
                </div>
                <div className="button">
                <input type="submit" value="Register"/>
                </div>
            </form>
            </div>
        </div>
    </div>
    );
}
export default SignUp;