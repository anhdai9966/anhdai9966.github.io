const App = function () {
  const hobbyList = [
    { id: 1, name: 'Chơi game' },
    { id: 2, name: 'Đá bóng' },
    { id: 3, name: 'Nghe nhạc' },
  ];

  const showInfo = name => {
    alert(name);
  };

  const user = {
    name: 'cd',
    email: 'cd@gmail.com',
    status: true,
  }

  return (
    <React.Fragment>
      <Hobby hobbyList={hobbyList} showInfo={showInfo} />
      <User user={user} {...user}/>
    </React.Fragment>
  );
};

App.displayName = 'Ứng dụng';

// Hiển thị thông tin User
const User = props => {
  const {name, email} = props.user;
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Email: {email}</p>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
  })
}

// hiển thị danh sách sở thích
const Hobby = props => {
  const { hobbyList, showInfo } = props;
  return (
    <ul>
      {hobbyList.length > 0 &&
        hobbyList.map(hobby => (
          <li key={hobby.id} onClick={() => showInfo(hobby.name)}>
            {hobby.name}
          </li>
        ))}
      {hobbyList.length == 0 && <li>Không có sở thích</li>}
    </ul>
  );
};

Hobby.propTypes = {
  hobbyList: PropTypes.array.isRequired,
  showInfo: PropTypes.func.isRequired,
};

Hobby.defaultProps = {
  hobbyList: [],
  showInfo: () => {
    alert('Clicked');
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
