import { useEffect, useState } from 'react';

/**np
 * useEffect(<function>, <dependency>)
 *
 * Dùng để làm gì?
 * Gọi API để lấy các thông tin bổ sung cho Components
 * Thay đổi tiêu đề cho trang
 * Cập nhật các state của components.
 * và còn nhiều nhiều nữa
 *
 * Ý nghĩa các thành phần
 * function: sẽ được gọi trong useEffect sau khi quá trình render component hoàn tất
 * dependency: Là một mảng chứa các đối số mà useEffect sẽ phụ thuộc vào đó để thực thi
 * có nghĩa là mỗi lần dependency thay đổi useEffect sẽ gọi function
 */

export default function UseEffect() {
  const [count, setCount] = useState(0);

  const [account, setAccount] = useState({});

  const [searchInput, setSearchInput] = useState('');
  const [movies, setMovies] = useState([]);

  // ------------------------------------------
  // 1. không cung cấp dependency
  // function được chạy mỗi lần khi render
  // VD: đếm bộ đếm thời gian
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCount(count => count + 1);
  //   }, 1000);
  // });

  //-------------------------------------------
  // 2. Cung cấp 1 dependency rỗng
  // function chỉ chạy lần đầu tiên render
  // VD: kiểm tra đăng nhập tài khoản
  // useEffect(() => {
  //   // localStorage.clear();
  //   // localStorage.removeItem('account');
  //   // localStorage.setItem('account', JSON.stringify({signin: true}));
  //   const storage = localStorage.getItem('account');
  //   if (storage) setAccount(JSON.parse(storage));
  // }, []);

  // ------------------------------------------
  // 3. Cung cấp dependency
  // function chạy lần đầu tiên, và những lần dependency thay đổi
  // VD: search với api
  // useEffect(() => {
  //   // nếu searchInput rỗng thì không fetch nữa
  //   if (!searchInput) return;

  //   // chờ 2s để người dùng nhập giá trị
  //   setTimeout(() => {
  //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=19cceeb816328f42df0e6b332f489d75&language=vi&query=${searchInput}&page=1&include_adult=false`)
  //       .then(response => response.json())
  //       .then(json => setMovies(json.results));
  //   }, 2000);
  // }, [searchInput]);

  // ------------------------------------------
  // Đặc biệt: Một vài trường hợp cần phải Cleanup. Nếu cần phải Cleanup thì function chỉ cần return clean điều gì đó
  // điều đó sẽ được thực thi trước function đó và sau khi render component
  // VD:
  useEffect(() => {
    // nếu searchInput rỗng thì không fetch nữa
    if (!searchInput) return;

    // chờ 2s để người dùng nhập giá trị
    setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=19cceeb816328f42df0e6b332f489d75&language=vi&query=${searchInput}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(json => setMovies(json.results));
    }, 1000);

    return function cleanup () {
      // đưa mảng movie về rỗng có thể sử dụng icon loading hoặc bất cứ điều gì
      setMovies([]);
    }
  }, [searchInput]);

  const handlerKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearchInput(e.target.value);
    }
  }
  return (
    <>
      <h1>Mỗi lần render thì tăng lên {count}!</h1>

      <p>{account.signin ? 'Đăng nhập thành công' : 'Đăng nhập thất bại'}</p>

      <input type="text" placeholder="Search movie" onKeyDown={handlerKeyDown} />

      <div className="movie-list">{movies.length !== 0 && movies.map(movie => <p key={movie.id}>{movie.title}</p>)}</div>
    </>
  );
}
