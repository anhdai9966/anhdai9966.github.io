let data = [
  {
    id: 1,
    name: 'Bùi Hiên',
    email: 'hien@gmail.com',
    address: 'Thái Bình',
  },
  {
    id: 2,
    name: 'Thu Hằng',
    email: 'hang@gmail.com',
    address: 'Hải Dương',
  },
  {
    id: 3,
    name: 'Minh Duy',
    email: 'duy@gmail.com',
    address: 'Hưng Yên',
  },
];

const numberRamdom = function (users) {
  return Math.floor(Math.random() * users.length);
};

const App = function () {
  const [users, setUsers] = React.useState(data);
  const [user, setUser] = React.useState(users[numberRamdom(users)]);

  const randomUser = function () {
    setUser(users[numberRamdom(users)]);
  };

  React.useEffect(() => {
    randomUser();
  }, [users]);

  const deleteUser = function () {
    const userArr = users.filter(u => user.id !== u.id);

    setUsers(userArr);
  };

  return (
    <React.Fragment>
      {users.length > 0 && <React.Fragment>
        <h1>Name: {user.name}</h1>
        <ul>
          <li>Email: {user.email}</li>
          <li>Address: {user.address}</li>
        </ul>
  
        <button onClick={randomUser}>Random user</button>
        <button onClick={deleteUser}>Delete user</button>
      </React.Fragment>
      }
    </React.Fragment>
  )
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
