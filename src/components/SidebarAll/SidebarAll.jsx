
import i from "./Sidebar/Sidebar.module.css"
import Sidebar from "./Sidebar/Sidebar"


const SidebarAll = (props) => {

    let sitebarElements = props.sidebarItem.map( (s) => {  
        return <Sidebar friend={s.friend} id={s.id}/>
      })
      

      


    return (
        <div>
        <div className={`${i.sidebar}`}>Friends:</div>
        <div>{sitebarElements}</div>
        </div>
    )
}
export default SidebarAll;