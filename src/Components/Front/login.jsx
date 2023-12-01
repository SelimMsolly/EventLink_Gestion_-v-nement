import React ,{useState }from 'react';
import './login.css'
import image from './logo.png'
import { useNavigate} from 'react-router-dom';
import axios from 'axios'


const LoginForm = () => { 

  const [email, setEmail] = useState() //storing the email
  const [password, setPassword] = useState() //storing the password
  const [emailError, setEmailError] = useState(''); 
  const [passwordError, setPasswordError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post('http://localhost:3000/login', { email, password })
      .then(result => {
        if (result.data.status === 'success') {
          navigate('/home');
        } else {
          if (result.data.field === 'email') {
            setEmailError(result.data.message);
            setPasswordError('');
          } else if (result.data.field === 'password') {
            setPasswordError(result.data.message);
            setEmailError('');
          } else {
            setErrorMessage(result.data.message);
            setEmailError('');
            setPasswordError('');
          }
        }
      })
      .catch(err => console.log(err));
  };


  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">

                    <div className="text-center">
                      <img src={image} style={{ width: '200px' }} alt="logo"/>
                    </div>

                    <form onSubmit={handleSubmit}>
                      
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example11"><h5>Email address</h5></label>
                        <input type="email" id="form2Example11" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        <div style={{ color: 'red' }}>{emailError}</div>
                      </div>

                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example22"><h5>Password</h5></label>
                        <input type="password" id="form2Example22" className="form-control" onChange={(e) => setPassword(e.target.value)} />
                        <div style={{ color: 'red' }}>{passwordError}</div>
                      </div>

                      <div style={{ color: 'red' }}>{errorMessage}</div>


                      <div className="text-center pt-1 mb-5 pb-1">
                        <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit" style={{ width: '200px' }}>Login</button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2"><b>Don't have an account?</b></p>
                        <button type="button" className="btn btn-outline-danger custom-btn" onClick={() => navigate('/registration-form')}>Create new</button>
                      </div>

                    </form>

                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a platform</h4>
                    <p className="small mb-0" style={{ fontSize: '18px', lineHeight: '1.5', color: 'white', textAlign: 'justify' }}>Empower your college experience with our event management platform. Seamlessly organize and discover campus events tailored to your interests. From workshops to social gatherings, never miss an opportunity to connect. Elevate your college journey with our comprehensive event solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;