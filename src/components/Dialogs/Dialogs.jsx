import { NavLink } from "react-router-dom"
import s from "./Dialogs.module.css"
import DialogsItem from "./DialogItem/DialogItem"
import Message from "./Message/Message";
import React from 'react';


const Dialogs = (props) => {

  /*данные с сервера */


  let dialogsElements = props.dialogs.map((d) => {
    return <DialogsItem name={d.name} id={d.id} />
  })

  let messagesElements = props.messages.map((m) => {
    return <Message message={m.message} />
  });

  let linkTextMessage = React.createRef();
  let addMessages = () => {
    let textMessage  = linkTextMessage.current.value;
    
    alert(textMessage); 
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        {dialogsElements}

        {/* <DialogsItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItem name={dialogsData[1].name} id={dialogsData[1].id} />*/}
      </div>

      <div className={s.messages}>
        {messagesElements}
      </div>
      <div className={s.addMessages}>
      <div><input ref={linkTextMessage}/></div>
      <div><button onClick={addMessages}>Add Message</button></div>
      </div>
    </div>
  )
}

export default Dialogs;