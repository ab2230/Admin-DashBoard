import Chart from '../../componets/chart/Chart'
import Featured from '../../componets/featured/Featured'
import Navbar from '../../componets/navbar/Navbar'
import Sidebar from '../../componets/sidebar/Sidebar'
import Widget from '../../componets/widget/Widget'
import './home.scss'

const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className='homeContainer'>
        <Navbar/>
       <div className="widgets">
         <Widget type='user'/>
         <Widget type='music'/>
         <Widget type='podcast'/>
         <Widget type='audiobook'/>
         <Widget type='creator'/>
       </div>
       <div className='charts'>
         <Featured/>
         <Chart aspect={2/1} title='Number of listeners'/>
       </div>
        </div>
    </div>
  )
}

export default Home
