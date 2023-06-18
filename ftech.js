// const postApi = "https://jsonplaceholder.typicode.com/albums/1/photos";
// fetch(postApi)
//   .then((respone) => {
//     return respone.json();
//   })
//   .then((posts) => {
//     let htmls = posts
//       .map((post) => {
//         return `<li>
//                     <h2>${post.title}</h2>
//                     <img src="${post.thumbnailUrl}" alt="">
//                 </li>`;
//       })
//       .join("");

//     document.getElementById("comments-box").innerHTML = htmls;
//   });

// let CoursesApi = "http://localhost:3000/courses";
// fetch(CoursesApi, {
//   method: "POST",
//   body: JSON.stringify({
//     id: 5,
//     title: "Học Lập Trình Java",
//     author: "Hoàng Văn E",
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => console.log(response));

// delete api by id
// fetch("http://localhost:3000/courses/${id}", {
//   method: "DELETE",
// });

fetch("http://localhost:3000/courses")
  .then((response) => response.json())
  .then((response) => console.log(response));
