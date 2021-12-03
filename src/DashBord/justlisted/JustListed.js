import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import './jlist.css'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { UserRows } from '../../Alldata';
import { Link } from 'react-router-dom';




const JustListed = () => {

  const [data, setdata] = useState(UserRows);

  const handleDelete = (id) =>{
      setdata(data.filter(item=>item.id !== id))
  }
   

                
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Avatar', headerName: 'Avatar', width: 130, renderCell: (params) =>{
            return(
                <div className="imagesAvt">
                    <img src={params.row.avatar} alt="" />
                    {/* {params.row.avatar} */}
                </div>
            )
        } },
        { field: 'Username', headerName: ' User Name', width: 230 },
        { field: 'email', headerName: ' Email', width: 230 },
        { field: 'status', headerName: 'Status', width: 90,},
        { field: 'Action', headerName: 'Action', width: 190,
        
        renderCell:(params)=>{
            return (
                <>

                <Link to={'/user/'+params.row.id}>
                <button className="userListedit">
                    edit
                </button>
                
                
                </Link>
               
               
                    <DeleteOutlineOutlinedIcon className="Delete_items" onClick={()=>handleDelete(params.row.id)} />
              
                </>
            )
        }
    },

    
      ];
      
     
      

    // =========================
    return (
        <>
            <div className="Listed_container">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />

            </div>
            
        </>
    )

            
  
}


export default JustListed






