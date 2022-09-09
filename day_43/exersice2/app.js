const menus = [
  { path: '/', label: 'Trang chủ' },
  { path: '/shop', label: 'Cửa hàng' },
  { path: '/about', label: 'Về chúng tôi' },
  { path: '/contact', label: 'Liên hệ' },
];

const Content = ({ menus }) => {
  return React.createElement(
    'div',
    { className: 'menu-list' },
    menus.map((menu, key) => {
      return React.createElement(Preview, { menu, key }, null);
      // <Preview menu:menu key:key />
    })
  );
};

const Preview = ({ menu }) => {
  return React.createElement('a', { href: menu.path, className: 'menu-item' }, menu.label);
  // <a href:.. class:.. > .. </a>
};

// Tạo root DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render
root.render(React.createElement(Content, { menus }, null));
// <Content menus:menus />
