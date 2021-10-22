import './App.scss';
import Header from "./Header/Header";
import PostGallery from "./PostGallery/PostGallery";
// import {PostsRepo} from "./repositories/postsRepo";

function App() {
  return (
    <div className="App">
      <Header/>
      <PostGallery/>
    </div>
  );
}

export default App;
