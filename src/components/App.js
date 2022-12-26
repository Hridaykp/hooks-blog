import { Switch, Route} from "react-router-dom";
import { Navbar, Home, CreatePost, PostDetails} from './';

function App() {
  return (
    <div className="container"> 
        <Navbar /> 
        <Switch>
            <Route exact path='/' componenet={Home} />
            <Route exact path='/post/:postId' componenet={PostDetails} />
            <Route exact path='/create-post' componenet={CreatePost} />
        </Switch>
    </div>
  );
}

export default App;
