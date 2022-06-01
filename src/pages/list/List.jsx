import "./list.scss"
import Navbar from "../../componets/navbar/Navbar"
import Sidebar from '../../componets/sidebar/Sidebar'
import Datatable from "../../componets/datatable/Datatable"

function List({type}) {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable type={type}/>
      </div>
    </div>
  )
}

export default List