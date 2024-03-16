import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import TopPage from '../../Top-and-Bottom-comp/TopPage.tsx';
import BottomPage from '../../Top-and-Bottom-comp/BottomPage.tsx';
import { Link, useNavigate } from 'react-router-dom';
import UserModel from '../../../Models/UserModal';
import ErrorMessageComp from '../../ErrorComponents/ErrorMessagePopup.tsx';
import { SpinnerLoading } from '../../utils/SpinnerLoading.tsx';

// Define Role interface and ERole enum
interface Role {
  id: number;
  name: ERole;
}

enum ERole {
  ROLE_USER = "ROLE_USER",
  ROLE_EMPLOYEE = "ROLE_EMPLOYE",
  ROLE_ADMIN = "ROLE_ADMIN"
}

export default function Signup() {
  const [user, setUser] = useState<UserModel>({
    userId: 0,
    email: '',
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    roles: [],
    confirmPass: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const baseUrl: string = 'http://localhost:8090/api/auth/signup';

      try {
        const response = await fetch(baseUrl);

        if (!response.ok) {
          throw new Error('Something went wrong');
        }

        const responseJson = await response.json();

        if (responseJson.empty) {
          // Alert or message to the user that there is no information
          return;
        }

        const loadedUsers: UserModel[] = responseJson.content.map((item: any) => ({
          userId: item.userId,
          firstName: item.firstName,
          lastName: item.lastName,
          userName: item.userName,
          email: item.email,
          password: item.password,
          roles: item.roles,
        }));

        setUser(loadedUsers[0]); // Assuming you only need one user
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleUserInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const saveUser = async (event: FormEvent) => {
    event.preventDefault();

    // Check if passwords match
    if (user.password !== user.confirmPass) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8090/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: user.username,
          firstname: user.firstName,
          lastname: user.lastName,
          email: user.email,
          password: user.password,
          role: [1]
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const responseData = await response.json();

      console.log('response', responseData);

      // Redirect to the homepage on successful registration
      navigate('/');
    } catch (error) {
      console.error('Error registering user:', error);
      setErrorMessage('An error occurred during registration.');
    }
  };

  if (isLoading) {
    return <SpinnerLoading />;
  }

  return (
      <div>
        <main className="main">
          <section className="main-section">
            <div className="form-part">
              <h1>Register to Steakbuds</h1>
              <span className="span">Enter your details to create an account at Steakbuds</span>

              <form onSubmit={saveUser} className="form">
                <label className="label" htmlFor="Fname">First name</label>
                <input type="text" id="Fname" placeholder="First name" onChange={handleUserInput} name="firstName"
                       value={user.firstName}/>

                <label className="label" htmlFor="Lname">Last name</label>
                <input type="text" id="Lname" placeholder="Last name" onChange={handleUserInput} name="lastName"
                       value={user.lastName}/>

                <label className="label" htmlFor="Uname">User name</label>
                <input type="text" id="Uname" placeholder="Username" onChange={handleUserInput} name="username"
                       value={user.username}/>

                <label className="label" htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email" onChange={handleUserInput} name="email"
                       value={user.email}/>

                <label className="label" htmlFor="passw">Password</label>
                <input type="password" placeholder="Password" onChange={handleUserInput} name="password"
                       value={user.password}/>

                <label className="label" htmlFor="ConfirmPass">Confirm password</label>
                <input type="password" id="ConfirmPass" placeholder="Confirm password" onChange={handleUserInput}
                       name="confirmPass"/>

                <input type="submit" value="CREATE AN ACCOUNT" id="login" className="login-btn"/>
              </form>
              {errorMessage && (
                  <p className="ErrorMessage">
                    {errorMessage}
                  </p>
              )}
            </div>
          </section>
        </main>
        {errorMessage && <ErrorMessageComp removeComp={() => setErrorMessage('')} />}
      </div>
  );
}

// Function to generate default role object
// function getDefaultRole(): Role {
//   return { id: 2, name: ERole.ROLE_USER };
// }
