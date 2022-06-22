import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import {
  columns,
  rows,
  columnsForMusics,
  columnsForAlbum,
  columnsForPodcasts,
  columnsForAudiobooks
} from "./dataTableSource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
const Datatable = ({ type }) => {
  const [row, setRow] = useState([]);
  const url='http://localhost:8000/';

  useEffect(() => {
    const getData = async () => {
      try {
        if(type!=='listener'){
          const res = await axios.get(url+type+'/');
          setRow(res.data)
       
        }
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [type]);
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to={"/data/"+row._id} style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];

  let column=[]
  let rowHolder=[];
  
  if (type === "listener") {
    column = columns;
    rowHolder = rows;
    return (
      <div className="datatable">
        <div className="dataTableTitle">
          Listeners
        </div>
  
  
  
        <DataGrid
          className="datagrid"
          rows={rowHolder}
          columns={column.concat(actionColumn)}
          getRowId= {(row)=>row._id}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
  
  
  
      </div>
    );


  } else if (type === "music") {
    column = columnsForMusics.concat(actionColumn);
    rowHolder=row;
    return (
      <div className="datatable">
        <div className="dataTableTitle">
          Musics
          <Link to='/audios/newMusic' className='link'>
          Add Music
          </Link>
        </div>
  
  
  
        <DataGrid
         experimentalFeatures={{ newEditingApi: true }}
          className="datagrid"
          rows={rowHolder}
          columns={column}
          getRowId= {(row)=>row._id}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
  
  
  
      </div>
    );
  } else if (type === "album") {
    column = columnsForAlbum.concat(actionColumn);
    rowHolder=row;
    return (
      <div className="datatable">
        <div className="dataTableTitle">
          Albums
          <Link to='/audios/newAlbum' className='link'>
          Add album
          </Link>
        </div>
  
  
  
        <DataGrid
          className="datagrid"
          rows={rowHolder}
          columns={column}
          getRowId= {(row)=>row._id}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
  
  
  
      </div>
    );
  }else if(type==="podcast"){
    column = columnsForPodcasts.concat(actionColumn);
    rowHolder=row;
    return (
      <div className="datatable">
        <div className="dataTableTitle">
          Podcasts
          <Link to='/audios/newPodcast' className='link'>
          Add Podcasts
          </Link>
        </div>
  
  
        <DataGrid
          className="datagrid"
          rows={rowHolder}
          columns={column}
          getRowId= {(row)=>row._id}
          pageSize={9}
          rowsPerPageOptions={[9]} 
          checkboxSelection
        />
  
  
  
      </div>
    )
    
  }else if(type==='audiobook'){
    column = columnsForAudiobooks.concat(actionColumn);
    rowHolder=row;
    return (
      <div className="datatable">
        <div className="dataTableTitle">
          AudioBooks
          <Link to='/audios/newAudiobook' className='link'>
          Add AudioBooks
          </Link>
        </div>
  
  
  
        <DataGrid
          className="datagrid"
          rows={rowHolder}
          columns={column}
          getRowId= {(row)=>row._id}
          pageSize={9}
          rowsPerPageOptions={[9]}
          checkboxSelection
        />
  
  
  
      </div>
    )
  }
  
};

export default Datatable;
