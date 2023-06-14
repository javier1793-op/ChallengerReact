import '../CSS/login.scss'
import userLogin from '../img/userLogin.png'
import video from '../video/loginLeveling.mp4'

const Login = () => {
  return (
    <>
        <div className="cardLogin">
            <div className="boxLogin">
            <div className="imgBoxLogin">
                    <video src={video}
                    type='video/mp4'
                    loop
                    autoPlay
                    muted
                    ></video>
                </div>
            </div>
            <div className="boxLogin">
                <div className="contentLogin">
                    <h2>Login <br />
                    <span>Welcome</span>
                     </h2>
                     <div className="boxInput">
                        <input type="text" placeholder='User name' />
                        <input type="password" placeholder='password' />
                     </div>
                     <button>let me in</button>
                </div>
            </div>
            <div className="circleLogin">
                <div className="imgBoxLogin">
                    <img src={userLogin} alt="userLogin" />
                </div>
            </div>
        </div>
    </>
  )
}

export default Login