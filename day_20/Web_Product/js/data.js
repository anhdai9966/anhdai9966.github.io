/* liệt kê
chức năng
tìm kiếm 
hiển thị
chức năng
lựa chọn size
thay đổi số lượng
thêm giỏ hàng
xem thông tin chi tiết sản phẩm

đối tượng
id (id - numbet)
tiêu đề (name - string)
ảnh (image - array - string)
giá thành (price - number)
đánh giá (rating - number)
size (sizes - array - string)
mô tả (description - string)
*/

let products = [
  {
    id: 1,
    name: "Cái gì cũng được",
    image: [
      "https://images.unsplash.com/photo-1644982653424-1bfed7f972a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1089&q=80",
      "https://images.unsplash.com/photo-1655461078832-117d004de269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      "https://images.unsplash.com/photo-1649859396073-13ff3244ec1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    ],
    price: 5000000,
    rating: 5,
    size: ["S", "M", "L", "XL", "XXL"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa facilis illum doloremque eaque magni consectetur eligendi laudantium necessitatibus ab possimus omnis eum, nobis quam laboriosam odit optio fugiat sint!",
  },
  {
    id: 2,
    name: "Tên gì cũng được",
    image: [
      "https://images.unsplash.com/photo-1655465184678-548fb85fa74a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1655461078832-117d004de269?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    ],
    price: 1000000,
    rating: 4.5,
    size: ["M", "L", "XL", "XXL"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa facilis illum doloremque eaque magni consectetur eligendi laudantium necessitatibus ab possimus omnis eum, nobis quam laboriosam odit optio fugiat sint! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa facilis illum doloremque eaque magni consectetur eligendi laudantium necessitatibus ab possimus omnis eum, nobis quam laboriosam odit optio fugiat sint!",
  },
  {
    id: 3,
    name: "Tên gì đó mây mây",
    image: [
      "https://images.unsplash.com/photo-1655469791360-e83bd76b7e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1638913972776-873fc7af3fdf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1648737119359-510d4f551382?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    ],
    price: 800000,
    rating: 4,
    size: ["S", "M", "L", "XL"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae culpa facilis illum doloremque eaque magni consectetur eligendi laudantium necessitatibus ab possimus omnis eum, nobis quam laboriosam odit optio fugiat sint! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
