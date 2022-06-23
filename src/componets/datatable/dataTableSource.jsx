

export const columnsForMusics = [
  { id: '_id', label: 'ID', minWidth: 10 },
  { id: 'title', label: 'Title', minWidth: 10 },
  { id: 'artist_name', label: 'Artist Name', minWidth: 10 },
  { id: 'email', label: 'Email', minWidth: 10 },
  { id: 'cell', label: 'Phone Number', minWidth: 10 },
  { id: 'edit', label: '', minWidth: 10 },
  { id: 'del', label: '', minWidth: 10 },
];

export const columnsForAlbum = [
  { id: '_id', label: 'ID',  minWidth: 10 },
  { id: 'album_title', label: 'Album Name',  minWidth: 10},
  { id: 'artist_name', label: 'Artist Name',  minWidth: 10},
  { id: 'album_description', label: 'Description',  minWidth: 10},
  { id: 'email', label: 'Email',  minWidth: 10},
  { id: 'cell', label: 'Phone Number',  minWidth: 10},
  { id: 'edit', label: '', minWidth: 10 },
  { id: 'del', label: '', minWidth: 10 },
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
  { id: '_id', label: 'ID', minwidth: 10 },
  { id: 'title', label: 'Podcast Name', minwidth: 10 },
  { id: 'podcasters', label: 'Podcasters Name', minwidth: 10},
  { id: 'description', label: 'Description',  minWidth: 10},
  { id: 'email', label: 'Email', width: 10},
  { id: 'cell', label: 'Phone Number', minwidth: 10},
  { id: 'edit', label: '', minWidth: 10 },
  { id: 'del', label: '', minWidth: 10 },
];

export const columnsForAudiobooks = [
  { id: '_id', label: 'ID', minwidth: 10 },
  { id: 'title', label: 'Book Name', minwidth: 10 },
  { id: 'author_name', label: 'Author Name', minwidth: 10},
  { id: 'narrator_name', label: 'Narrator Name', minwidth: 10},
  { id: 'description', label: 'Description',  minWidth: 10},
  { id: 'email', label: 'Email', minwidth: 10},
  { id: 'cell', label: 'Phone Number', minwidth: 10},
  { id: 'edit', label: '', minWidth: 10 },
  { id: 'del', label: '', minWidth: 10 },
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

