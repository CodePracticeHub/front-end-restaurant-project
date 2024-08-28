import React, { useEffect, useState } from "react";
import "./AccInfoStyle.css";
import YourAccount from "../Profile_header/YourAccount.tsx";

export default function AccouInfo() {
    const [userData, setUserData] = useState({
        id: '',
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        contactNumber: ''
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('token');
                console.log('Retrieved token:', token); // Debugging token retrieval

                if (!token) {
                    throw new Error('No token found, please log in.');
                }

                const response = await fetch('http://localhost:8090/api/v1/user/current', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json',
                    },
                    signal: abortController.signal, // Attach the abort signal
                });

                if (!response.ok) {
                    throw new Error(`Failed to fetch user data: ${response.statusText}`);
                }

                const data = await response.json();
                setUserData({
                    id: data.id,
                    username: data.username,
                    firstname: data.firstname,
                    lastname: data.lastname,
                    email: data.email,
                    contactNumber: data.contactNumber || '', // Adjust based on your data structure
                });
                setLoading(false);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    console.error('Error fetching user data:', error); // Debug: Output error details
                    setError(error.message);
                    setLoading(false);
                }
            }
        };

        fetchUserData();

        // Cleanup function to abort the fetch if the component unmounts
        return () => {
            abortController.abort();
        };
    }, []);

    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('No token found, please log in.');
            }

            const response = await fetch(`http://localhost:8090/api/v1/user/${userData.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    username: userData.username,
                    firstname: userData.firstname,
                    lastname: userData.lastname,
                    email: userData.email,
                    contactNumber: userData.contactNumber, // Adjust as per your backend's expected data
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to update user');
            }

            const updatedUser = await response.json();
            console.log('User updated successfully:', updatedUser);
        } catch (error) {
            console.error('Error updating user:', error);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return(
        <section>
            <YourAccount/>
            <div className="user_data_container">
                <form >

                    <div className="form-row avatar" >
                        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>
                    </div>

                    <div className="form-row">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={userData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <label htmlFor="firstname">First name</label>
                        <input
                            type="text"
                            name="firstname"
                            id="firstname"
                            value={userData.firstname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <label htmlFor="lastname">Last name</label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            value={userData.lastname}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={userData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-row">
                        <label htmlFor="contactNumber">Contact number</label>
                        <input
                            type="text"
                            name="contactNumber"
                            id="contactNumber"
                            value={userData.contactNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <button className="save_changes" type="submit">
                        Save changes
                    </button>
                </form>
            </div>
        </section>
    );
}
