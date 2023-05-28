import './App.css'
import Post from './components/Post.jsx';
import Header from './components/Header.jsx';
import Layout from './Layout/Layout.jsx';
import HomePage from './Pages/HomePage.jsx';
import CreatePost from './Pages/CreatePost.jsx';
import Login from './Pages/Login.jsx';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from './Pages/RegisterPage';
import PostDetails from './Pages/PostDetails';
import EditPost from './Pages/EditPost';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/post' element={<CreatePost />} />
        <Route path='/post/:id' element={<PostDetails />} />
        <Route path='/edit/:id' element={<EditPost />} />
      </Route>
    </Routes>

  )
}

export default App
