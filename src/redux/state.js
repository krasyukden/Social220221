let state = { 
  profilePage: {
    posts: [
    { id: 1, message:"Hi, how are you?", likesCount: 12}, 
    { id: 2, message:"It's my first post", likesCount: 11}
    
  ]},
  
  dialogsPage:{

  dialogs: [
    { id: 1, name:"Den"}, 
    { id: 2, name:"Dima"},
    { id: 3, name:"Max"},
    { id: 4, name:"Valera"},
    { id: 5, name:"Andrey"}
  ],
  
  
  messages: [
    { id: 1, message:"Hi"}, 
    { id: 2, message:"How are your"},
    { id: 3, message:"Yo"}
  ]
  },


  sidebarAll: {
    sidebarItem: [
    {id: 1, friend: "Andrew"},
    {id: 2, friend: "Max"},
    {id: 3, friend: "Dima"}
    ]}

}


export let addPost = (postMessage) => {

   let newPost = {
    id: 5,
    message:  postMessage,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
}


export default state;