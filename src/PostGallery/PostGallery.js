import "./PostGallery.scss"
import pfp from '../ben-abstract.png'
import postImage from '../bens new laptop.jpg'
import {useEffect, useState} from "react";
// import {PostsRepo} from "../repositories/postsRepo";



function PostGallery(){
    const [posts, setPosts] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch("https://localhost:5001/posts")
            .then(response => response.json())
            .then(json => {
                console.log("camere here now");
                console.log(json);
                setPosts(json.items);})
            .catch(err => setError(err));
    }, []);

    return(
        <div className={"postGallery"}>
            {posts == null ?
                <div className={'error'}>
                    {error ? "Something's gone horribly wrong" : "loading..."}
                </div>
                :
                posts.map((post) => <Post
                    pfp={post.postedBy.profileImageUrl}
                    name={post.postedBy.displayName}
                    postText={post.message}
                    postImage={post.imageUrl}
                    postDate={post.postedAt}
                />)
            }
        </div>
    );
}

//  function PostGallery() {
//
//     const [posts, setPosts] = useState(null);
//     const [error, setError] = useState(false);
//
//     useEffect(() => {
//         fetch("https://localhost:5001/posts")
//             .then(response => response.json())
//             .then(json => {
//                 setPosts(json);
//                 console.log(json)})
//             .catch(err => setError(err));
//     }, []);
//
//     if (!posts) {
//         return <div>no posts here babey</div>
//     }
//     return (
//         <div>{posts}</div>
//     )
//
// };


function Post(props){
    return(
        <div className={"post"}>
            <div className={"posterProfile"}>
                <img src={props.pfp}/>
                <p>{props.name}</p>
            </div>
            <div className={"postContent"}>
                <p>{props.postText}</p>
                <img src={props.postImage}/>
            </div>
            <div className={"postInfo"}>
                <p>{props.postDate}</p>
            </div>
        </div>
    );
}

export default PostGallery;