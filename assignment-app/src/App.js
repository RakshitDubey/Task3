import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc');
      setUserData(response.data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {userData.map(user => (
        <div key={user.login.uuid} className="max-w-xl bg-white shadow-lg rounded-lg overflow-hidden m-4">
          <img className="w-1/3 float-left" src={user.picture.large} alt="user avatar" />
          <div className="p-4 w-2/3 float-left">
            <h2 className="text-xl font-semibold">{user.name.first} {user.name.last}</h2>
            <p className="text-gray-500">{user.gender}</p>
            <p className="text-gray-500">{user.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
