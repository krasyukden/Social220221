import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import SidebarAll from "./components/SidebarAll/SidebarAll";
import Sidebar from "./components/SidebarAll/Sidebar/Sidebar";//delete

const App = (props) => {




  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="" render={() => <SidebarAll sidebarItem={props.state.sidebarAll.sidebarItem} />} />
        {/*<Profile />*/}
        <div className="app-wrapper-content">
          <Route path='/dialogs'
            render={() => <Dialogs dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages} />} />
          <Route path='/profile' render={() => <Profile 
          posts={props.state.profilePage.posts} 
          addPost={props.addPost}/>} />

          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
