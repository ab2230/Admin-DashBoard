import './single.scss'
import Sidebar from '../../componets/sidebar/Sidebar'
import Navbar from '../../componets/navbar/Navbar'
import Chart from '../../componets/chart/Chart'
import Datatable from '../../componets/datatable/Datatable'

function Single() {
  return (
    <div className='single'>
      <Sidebar/>
      <div className="singleContainer">
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="item">
              <h1 className="itemTitle">Abrham Tesfaye</h1>
              <div className="detailItem">
                <span className='itemKey'>Email:</span>
                <span className="itemValue">Aberhamtesfaye@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3/1} title={"User Spending (Last 6 months)"}/>
          </div>
        </div>
        <div className="bottom">
          <Datatable />
        </div>
      </div>
    </div>
  )
}

export default Single
