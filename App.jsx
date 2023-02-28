import { Routes, Route, useNavigate } from 'react-router-dom'
import Nav from './routes/Nav'
import Feed from './routes/Feed'
import ProfileView from './routes/ProfileView'
import ProfileUserView from './routes/ProfileUserView'
import ProfileEdit from './routes/ProfileEdit'
import Notifications from './routes/Notifications'
import RecipeUserView from './routes/RecipeUserView'
import RecipeView from './routes/RecipeView'
import RecipeEdit from './routes/RecipeEdit'
import DiscussionPost from './routes/DiscussionPost'
import DiscussionRecipe from './routes/DiscussionRecipe'
import PostNew from './routes/PostNew'
import Search from './routes/Search'
import Login from './routes/Login'
import Signup from './routes/Signup'
import Explore from './routes/Explore'
import Saved from './routes/Saved'

function App() {

  return (<div id="app">
    <Nav/>
    <Routes>
      <Route path="/feed" element={<Feed/>} />
      <Route path="/explore" element={<Explore/>} />
      <Route path="/profile/view" element={<ProfileView/>} />
      <Route path="/profile/user-view" element={<ProfileUserView/>} />
      <Route path="/profile/edit" element={<ProfileEdit/>} />
      <Route path="/notifications" element={<Notifications/>} />
      <Route path="/recipe/user-view" element={<RecipeUserView/>} />
      <Route path="/recipe/view" element={<RecipeView/>} />
      <Route path="/recipe/edit" element={<RecipeEdit/>} />
      <Route path="/discussion/post" element={<DiscussionPost/>} />
      <Route path="/discussion/recipe" element={<DiscussionRecipe/>} />
      <Route path="/post/new" element={<PostNew/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/" element={<Feed/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/saved" element={<Saved/>} />
    </Routes>
  </div>);
}

export default App
