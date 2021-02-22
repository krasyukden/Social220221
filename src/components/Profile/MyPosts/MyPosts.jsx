import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import React from 'react';

const MyPosts = (props) => {

  //debugger;
  let postsElements = props.posts.map( (p) => {
    return <Post message={p.message} likesCount={p.likesCount}/>
  });
  
  let newPostElement = React.createRef();

  let addPost = () =>  {
   let text = newPostElement.current.value;
   props.addPost(text);
  
  }

  return <div className={s.postsBlock}>
    <h3>My post</h3>
    <div>
      <div>
      <textarea ref={newPostElement}></textarea> {/*v 31 привязка ссылки к конкр. textarea*/}
      
      </div>
      <div><button onClick={addPost}>Add post</button>
      </div>
      

      <div className={s.posts}>
        {postsElements}
        
        
      </div>
        
    </div>
  </div>  
}

export default MyPosts;