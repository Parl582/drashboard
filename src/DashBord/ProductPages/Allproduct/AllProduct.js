

// =================================

import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import { Link } from "react-router-dom";
import "./allproduct.css";
import { allproductData } from '../../../Alldata'; 



const FreeProduct = () => {
////////////////////////////////////////////

const [data, setData] = useState(allproductData);

const handleDelete = (id) => {
  setData(data.filter((item) => item.id !== id));
};

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "product",
    headerName: "Product",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          <img className="productListImg" src={params.row.img} alt="" />
          {params.row.name}
        </div>
      );
    },
  },
  { field: "stock", headerName: "Stock", width: 200 },
  {
    field: "status",
    headerName: "Status",
    width: 120,
  },
  {
    field: "price",
    headerName: "Price",
    width: 160,
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <>
          <Link  to={'/products/+params.row.id'}>
            <button className="productListEdit">Edit</button>
          </Link>
          <DeleteOutlineOutlinedIcon
            className="productListDelete"
            onClick={() => handleDelete(params.row.id)}
          />
        </>
      );
    },
  },
];


    return (
        <>
         <div className="productList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
            
        </>
    )
}

export default FreeProduct
