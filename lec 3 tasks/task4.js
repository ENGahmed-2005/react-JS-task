const posts = [
  { id: 1, title: "First post", content: "Content of post 1", image: "post1.jpg" },
  { id: 2, title: "Second post", content: "Content of post 2", image: "" },
  { id: 3, title: "Third post", content: "Content of post 3", image: "post3.jpg" },
  { id: 4, title: "Fourth post", content: "Content of post 4" },
  { id: 5, title: "Fifth post", content: "Content of post 5", image: "post5.jpg" },
];

posts.forEach(function (post){
const image = post.image ? post.image : "default image";

  console.log(post.id + ' ' + post.title +  ' '  + post.content + ' ' + image);
  
})

