import { Routes, Route} from "react-router-dom";
import { Navbar, Home, CreatePost, PostDetails} from './';

function App() {
  return (
    <div className="container"> 
        <Navbar /> 
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/post/:postId' element={<PostDetails/>} />
            <Route exact path='/create-post' element={<CreatePost/>} />
        </Routes>
    </div>
  );
}

export default App;
