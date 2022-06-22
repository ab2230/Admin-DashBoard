

export const columnsForMusics = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Music Name', width: 230 },
  { field: 'artist_name', headerName: 'Artist Name', width: 200},
  { field: 'email', headerName: 'Email', width: 230},
  { field: 'cell', headerName: 'Phone Number', width: 200}
];

export const columnsForAlbum = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'album_title', headerName: 'Album Name', width: 230 },
  { field: 'artist_name', headerName: 'Artist Name', width: 200},
  { field: 'email', headerName: 'Email', width: 230},
  { field: 'cell', headerName: 'Phone Number', width: 200}
];


export const columns = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'email', headerName: 'Email', width: 230 },
  { field: 'status', headerName: 'Status', width: 200, 
     renderCell:(params)=>{
          return(
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
          )
     }
   }
]; 


export const columnsForPodcasts = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Podcast Name', width: 230 },
  { field: 'podcasters', headerName: 'Podcasters   Name', width: 200},
  { field: 'email', headerName: 'Email', width: 230},
  { field: 'cell', headerName: 'Phone Number', width: 200}
];

export const columnsForAudiobooks = [
  { field: '_id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'Book Name', width: 230 },
  { field: 'author_name', headerName: 'Author Name', width: 200},
  { field: 'narrator_name', headerName: 'Narrator Name', width: 200},
  { field: 'email', headerName: 'Email', width: 230},
  { field: 'cell', headerName: 'Phone Number', width: 200}
];

export const rows = [
    { _id: 1, email: 'Snow',status:'active'},
    { _id: 2, email: 'Lannister',status:'active'},
    { _id: 3, email: 'Lannister',status:'passive'},
    { _id: 4, email: 'Stark',status:'active'},
    { _id: 5, email: 'Targaryen',status:'active'},
    { _id: 6, email: 'Melisandre',status:'passive'},
    { _id: 7, email: 'Clifford',status:'active'},
    { _id: 8, email: 'Frances',status:'active'},
    { _id: 9, email: 'Roxie',status:'active'}
  ];

