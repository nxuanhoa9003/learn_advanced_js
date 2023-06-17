let users = [
  {
    id: 1,
    name: "Thùy Linh",
  },
  {
    id: 2,
    name: "Trần Hoa",
  },
  {
    id: 3,
    name: "Thu Trang",
  },
];

let comments = [
  {
    id: 1,
    user_id: 1,
    content: "Hello Hoa",
  },
  {
    id: 2,
    user_id: 2,
    content: "Hí Chào Linh",
  },
  {
    id: 3,
    user_id: 3,
    content: "Hello Hòa",
  },

  {
    id: 4,
    user_id: 2,
    content: "Hoa ăn cơm chưa",
  },
];

function getComments() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });
}

function getUsersbyIds(UserIds) {
  return new Promise((resolve, reject) => {
    let result = users.filter((user) => {
      return UserIds.includes(user.id);
    });
    setTimeout(() => {
      resolve(result);
    }, 1000);
  });
}

getComments()
  .then((comments) => {
    let user_ids = comments.map((comment) => {
      return comment.user_id;
    });

    return getUsersbyIds(user_ids).then((users) => {
      return {
        users: users,
        comments: comments,
      };
    });
  })
  .then((data) => {
    const commentsBlock = document.getElementById("comments-box");
    let htmls = "";
    data.comments.forEach((comment) => {
      let user = data.users.find((user) => {
        return user.id === comment.user_id;
      });

      htmls += `<li>${user.name} : ${comment.content}</li>`;
    });

    commentsBlock.innerHTML = htmls;
  });
