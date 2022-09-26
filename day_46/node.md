pwd: hiển thị đường dẫn
cd : truy cập đường dẫn
mkdir: tạo folder
touch: tạo file
ls: xem danh sách

về tìm hiểu
dùng để làm gì
cú pháp
các lưu ý
demo 1 ví dụ

useState
useEffect *
useRef
useMemo
useCallback

useEffect
useEffect(<function>, <dependency>)

1. No dependency passed: 1. Không cung cấp
useEffect(() => {
  // được chạy mỗi lần khi render 
});
2. An empty array:
useEffect(() => {
  // chỉ chạy lần render đầu tiên
}, []);
3. Props or state values:
useEffect(() => {
  // chạy lần render đầu tiên
  // và mỗi lần giá trị dependency thay đổi
}, [prop, state]);

Timeouts, subscriptions, event listeners, and other effects nên được xử lý bằng cách bao gồm một hàm trả về ở cuối useEffect Hook.

Dùng để làm gì
Gọi API để lấy các thông tin bổ sung cho Components
Thay đổi tiêu đề cho trang
Cập nhật các state của components.
và còn nhiều nhiều nữa

lưu ý: useEffect được kích hoạt sau khi quá trình render của React component hoàn tất

ví dụ:
```js
useEffect(() => {
		document.title = "Tieu De";
	})
```
```js
useEffect(callback, dependencies);
```
Callback: sẽ được gọi trong useEffect sau khi return thực thi nhiệm vụ kết xuất giao diện của nó.
Dependencies: Là một mảng chứa các đối số mà useEffect sẽ phụ thuộc vào đó để thực thi. Trong ví dụ trên là một mảng trống, nó đồng nghĩa với việc chỉ thực hiện một lần duy nhất sau khi component render.

1. Không cung cấp
Trong trường hợp bạn không cung cấp bất kỳ đôi số nào. useEffect sẽ được gọi thực thi các tính toán bên trong nó môi khi thành phần render.

2. Một mảng trống []
Khi bạn truyền một mảng trống vào, nó sẽ chỉ thực thi một lần duy nhất sau khi thành phần đó render lần đầu tiên, cách hoạt động tương tự như componentDidMount của Class Component

3. Khi truyền các Props, State
Khi dependencies là các props, state bên trong một mảng [props1, props2,.. stateA]. React useEffect sẽ dựa vào giá trị props, state. Trong lần render tiếp theo, nó sẽ kiểm tra giá trị của props, state mới với giá trị props, state trước đó. Nếu khác nhau sẽ thực hiện useEffect callback sẽ được gọi. Ngược lại thì không có gì xảy ra

Clean up useEffect
Một vài side-effect hoặc hầu như chúng ta sẽ cần phải clean-up các side-effect để tránh các vấn đề về hiệu xuất như memory-leak. Vấn đề này thường thấy trong quá trình bạn phát triển React app.

----------------------------------------------------------
useMemo giải quyết vấn đề gì ?

useMemo là một React hook giúp ghi nhớ kết quả đầu ra của một hàm. useMemo cho phép truyền vào 2 tham số: callback và dependencies. useMemo sẽ gọi hàm và trả về giá trị trả về của nó. Sau đó, mỗi khi bạn gọi lạ useMemo, nó sẽ kiểm tra nếu bất kì khi nào dependencies thay đổi nó sẽ gọi lại callback để thực thi nó. Nếu không, nó sẽ trả về giá trị cũ đã được lưu trong bộ nhớ cache, không gọi hàm callback. 

Chính xác, nếu giá trị truyền vào dependencies thay đổi, chúng ta gọi lại hàm đã được cung cấp để thực thi các logic bên trong. Đó là cách hoạt động của useMemo.

Điều này sẽ nhắc nhở bạn về useEffect, cả useMemo và useEffect đều chấp nhận nhóm dependencies. Sự khác biệt duy nhất là useEffect được dành cho side-effects, trong khi các chức năng của useMemo được cho là tinh khiết (pure) và không có side-effects.