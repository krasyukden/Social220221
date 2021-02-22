import MyPosts from "./MyPosts/MyPosts";
import Post from "./MyPosts/Post/Post";
import s from "./Profile.module.css"
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {

  //debugger;



  return <div>
     <ProfileInfo />
    
    
      <MyPosts posts={props.posts} addPost={props.addPost}/> {/*через props передаем */}
      
    
  </div>;
}

export default Profile;