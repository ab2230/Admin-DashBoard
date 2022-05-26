export const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'status', headerName: 'Status', width: 200, 
       renderCell:(params)=>{
            return(
              <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
       }
     }
  ];
  
export const rows = [
    { id: 1, email: 'Snow',status:'active'},
    { id: 2, email: 'Lannister',status:'active'},
    { id: 3, email: 'Lannister',status:'passive'},
    { id: 4, email: 'Stark',status:'active'},
    { id: 5, email: 'Targaryen',status:'active'},
    { id: 6, email: 'Melisandre',status:'passive'},
    { id: 7, email: 'Clifford',status:'active'},
    { id: 8, email: 'Frances',status:'active'},
    { id: 9, email: 'Roxie',status:'active'}
  ];