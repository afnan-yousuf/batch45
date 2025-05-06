import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState(null);
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data)
        setIsloading(false)
      });
  }, []);

  console.log("Rednering");

  return (
    <div>
      <h1>Posts</h1>

        {isloading && <h1>Loading....</h1>}

      <table border="1">
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Details</th>
            </tr>
        </thead>
        <tbody>
          {posts &&
            posts.map((p) => {
              return (
                <tr>
                  <td>{p.id}</td>
                  <td>{p.title}</td>
                  <td>{p.body}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Posts;
