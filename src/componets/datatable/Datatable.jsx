import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Box, styled } from '@mui/system';
import { Button, Grid } from '@mui/material';
import  PaginationTable  from "./PaginationTable";
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

 const deleteRow=async(id)=>{ 
  try {
      const res = await axios.delete(url+type+'/'+id);
      alert("deleted successfully");
    }
   catch (err) {
    console.log(err);
  }
 }

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
      function createData(_id,title, artist_name, email,cell, edit, del) {
          return {
             _id:_id,
             title: title,
             artist_name: artist_name,
             email: email,
             cell:cell,
             edit: edit,
             del: del,
        }
     }

     const rowHolder = row.map((item, index) => {
     const container = {}
      createData(
          (container._id = item._id),
          (container.title = item.title),
          (container.artist_name = item.artist_name),
          (container.email = item.email),
          (container.cell = item.cell),
          (container.edit = (
            <Link to={'/audios/'+'editMusic/'+item._id}>
              <Button>
                 edit
              </Button>
              </Link>
          )),
          (container.del = (
            <Button onClick={()=>deleteRow(item._id)}>
            Delete
         </Button>
          ))
      )
      return container
  })
   
    return (
      <div className="datatable">
        <div className="dataTableTitle">
          Musics
          <Link to='/audios/newMusic' className='link'>
          Add musics
          </Link>
        </div>

  
        <PaginationTable columns={columnsForMusics} rows={rowHolder} />
  
      </div>
    );

  } else if (type === "album") {



    function createData(_id,album_title, artist_name,album_description, email,cell, edit, del) {
      return {
         _id:_id,
         album_title: album_title,
         artist_name: artist_name,
         album_description:album_description,
         email: email,
         cell:cell,
         edit: edit,
         del: del,
    }
 }

 const rowHolder = row.map((item, index) => {
 const container = {}
  createData(
      (container._id = item._id),
      (container.album_title = item.album_title),
      (container.artist_name = item.artist_name),
      (container.album_description = item.album_description),
      (container.email = item.email),
      (container.cell = item.cell),
      (container.edit = (
          <Button>
             edit
          </Button>
      )),
      (container.del = (
        <Button onClick={()=>deleteRow(item._id)}>
        Delete
     </Button>
      ))
  )
  return container
})

return (
  <div className="datatable">
    <div className="dataTableTitle">
      Albums
      <Link to='/audios/newAlbum' className='link'>
      Add albums
      </Link>
    </div>


    <PaginationTable columns={columnsForAlbum} rows={rowHolder} />

  </div>
);



  }else if(type==="podcast"){

    function createData(_id,title, podcasters,description, email,cell, edit, del) {
      return {
         _id:_id,
         title: title,
         podcasters: podcasters,
         description:description,
         email: email,
         cell:cell,
         edit: edit,
         del: del,
    }
 }

 const rowHolder = row.map((item, index) => {
 const container = {}
  createData(
      (container._id = item._id),
      (container.title = item.title),
      (container.podcasters = item.podcasters),
      (container.description = item.description),
      (container.email = item.email),
      (container.cell = item.cell),
      (container.edit = (
          <Button>
             edit
          </Button>
      )),
      (container.del = (
        <Button onClick={()=>deleteRow(item._id)}>
        Delete
     </Button>
      ))
  )
  return container
})

return (
  <div className="datatable">
    <div className="dataTableTitle">
      Podcasts
      <Link to='/audios/newPodcast' className='link'>
      Add Podcasts
      </Link>
    </div>


    <PaginationTable columns={columnsForPodcasts} rows={rowHolder} />

  </div>
);
    
  }else if(type==='audiobook'){
    
    function createData(_id,title, author_name,narrator_name,description, email,cell, edit, del) {
      return {
         _id:_id,
         title: title,
         author_name: author_name,
         narrator_name: narrator_name, 
         description:description,
         email: email,
         cell:cell,
         edit: edit,
         del: del,
    }
 }

 const rowHolder = row.map((item, index) => {
 const container = {}
  createData(
      (container._id = item._id),
      (container.title = item.title),
      (container.author_name = item.author_name),
      (container.narrator_name = item.narrator_name),
      (container.description = item.description),
      (container.email = item.email),
      (container.cell = item.cell),
      (container.edit = (
          <Button>
             edit
          </Button>
      )),
      (container.del = (
        <Button onClick={()=>deleteRow(item._id)}>
        Delete
     </Button>
      ))
  )
  return container
})

return (
  <div className="datatable">
    <div className="dataTableTitle">
      Audiobooks
      <Link to='/audios/newAudiobook' className='link'>
      Add Audiobook
      </Link>
    </div>


    <PaginationTable columns={columnsForAudiobooks} rows={rowHolder} />

  </div>
);
    
  }
  
};

export default Datatable;
