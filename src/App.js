import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

export const App = () => {
  const [users, setUsers] = useState([]);

  const ProfileData =() => {
    axios.get("https://randomuser.me/api")
      .then((response) => {
        setUsers(response.data);
        
      })
     
  };

  useEffect(() => {
    ProfileData();
  }, []);

  return (
    <>
      {users.results?.map((user) => (
      <div className="container">
        <div className="user-container" key={user.id}>
          <img src={user.picture.large} alt="user" />
          <h3>{user.gender}</h3>
          <h1>
            {user.name.first} {user.name.last}
          </h1>
          <h3>{user.phone}</h3>
          <p>{user.email}</p>
          <span>{user.location.timezone.description}</span>
          <button onClick={() => ProfileData()}>Get Users</button>
        </div>
      </div>
      ))}
    </>
  );
};
export default App;
