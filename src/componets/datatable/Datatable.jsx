    import './datatable.scss'
    import { DataGrid} from '@mui/x-data-grid';
    import { columns,rows ,columnsForMusics , fetcher , rowsForMusics} from './dataTableSource';
    import { Link } from 'react-router-dom';
    const Datatable = ({type}) => {

        const actionColumn=[{field:'action',headerName:'Action',width:200,renderCell:()=>{
            return(
                <div className='cellAction'>
                  <Link to="/listeners/abrham" style={{textDecoration:'none'}}>
                    <div className="viewButton">View</div>
                    </Link>
                    <div className="deleteButton">Delete</div>
                </div>
            )
        }}]

        let column;
        let row=[];
        if(type==='listeners'){
          column=columns;
          row=rows;
        }
        else if(type==='musics'){
          column =columnsForMusics;
          row = rowsForMusics;

          console.log(row);
        }
      return (
        <div className='datatable'>
          <DataGrid className="datagrid"
        rows={row}
        columns={column.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
        </div>
      )
    }
    
    export default Datatable
    