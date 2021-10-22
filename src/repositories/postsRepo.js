// import {useState, useEffect} from "react";
//
//
// export function PostsRepo() {
//
//     const [posts, setPosts] = useState(null);
//
//     useEffect(() => {
//         fetch("https://localhost:5001/posts").then(
//             response => {
//                 setPosts(response.elements)
//             },
//         );
//     }, []);
//
//     if (!posts) {
//         return <div>no posts here babey</div>
//     }
//     return (
//         <div>{posts}</div>
//     )
//
// }