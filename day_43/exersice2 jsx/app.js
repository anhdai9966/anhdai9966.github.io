const menus = [
  { path: '/', label: 'Trang chủ' },
  { path: '/shop', label: 'Cửa hàng' },
  { path: '/about', label: 'Về chúng tôi' },
  { path: '/contact', label: 'Liên hệ' },
];

const Menu = ({ menus }) => {
  return (
    <ul className="menu-list">
      {
        menus.map((menu, key) => {
          return <a key={key} href={menu.path} className='menu-item'>{menu.label}</a>
        })
      }
    </ul>
  )
};

const App = () => {
  return <Menu menus={menus}/>
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render
root.render(<App />);
// <Content menus:menus />
