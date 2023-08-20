import React, {  useState } from "react";
import "./TableRow.css";
import { useDispatch } from "react-redux";
import { DataGrid } from "@material-ui/data-grid";
import {
  DeleteBlog,
  DeleteTeam,
  DeleteServices,
  getAllBlogs,
  getAllTeams,
  getAllServices,
  getAllUsers,
  DeleteUser,
  DeleteImage,
  getAllImages,
} from "../../../redux/actions/admin";
import {MdOutlineDeleteSweep} from 'react-icons/md'
import {BiSolidShow,BiSolidEdit} from 'react-icons/bi'
import { EditBlogModel, EditServiceModel, EditTeamModel, ShowModel,UserRoleModel } from "./../Model/Model";
import { htmlToText } from "html-to-text";
import { serverimg } from "../../../server";

// Blogs using material Ui
const TableblogRow = ({ blogs }) => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState([]);
  const [show, setShow] = useState(false);
  const [model, setModel] = useState(false);
  const [details, setDetails] = useState();

  const handleDelte = (id) => {
    dispatch(
      DeleteBlog(id, () => {
        dispatch(getAllBlogs());
      })
    );
  };

  const handleAllSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const handleAllDeleteSelected = () => {
    selectedRows.forEach((id) => {
      handleDelte(id);
    });
  };

  const handleshowdetails = (item) => {
    setShow(true);
    setDetails(item);
  };
  // Function to convert HTML to plain text
  const convertHtmlToText = (html) => {
    return htmlToText(html, {
      wordwrap: 130,
    });
  };

  const handleUpdate = (item) => {
    setModel(true);
    setDetails(item);
  };

  const columns = [
    { field: "createdby", headerName: "Author Name", flex: 1, minWidth: 180 },
    { field: "heading", headerName: "Heading", flex: 1, minWidth: 140 },
    { field: "category", headerName: "Category", flex: 1, minWidth: 140 },
    { field: "description", headerName: "Description", flex: 1, minWidth: 190,
    renderCell: (params) => (
     <p>{convertHtmlToText(params.row.description)}</p>
    ),
  },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      minWidth: 170,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <img
          style={{
            width: "7rem",
            height: "4rem",
            borderRadius: "5%",
            objectFit: "cover",
            marginRight: "6px",
          }}
          src={`${serverimg}/${params.row.image}`}
          alt={params.row.createdby}
        />        
      ),
    },
    { field: "createdAt", headerName: "Created At", flex: 1, minWidth: 160 },
    {
      field: "delete",
      headerName: "Manage",
      flex: 1,
      minWidth: 150,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <>          
         <button onClick={() => handleDelte(params.row.id)} className="del-button" >
            <MdOutlineDeleteSweep className='icon-table'/>
         </button>
         <button onClick={() => handleUpdate(params.row)} className="edit-button">
           <BiSolidEdit className='icon-table'/>
         </button>
         <button   onClick={() => handleshowdetails(params.row)} className="show-button">
           <BiSolidShow className='icon-table'/>
         </button>        
        </>
      ),
    },
  ];

  const row =
    blogs &&
    blogs.blogs.map((blog) => ({
      id: blog._id,
      createdby: blog.createdby[0].name,
      heading: blog.heading,
      category: blog.category,
      description: blog.description,
      image:blog.image,
      mobileNumber: blog.mobileNumber,
      createdAt: blog.createdAt.slice(0, 10),
    }));

  return (
    <div className="datatable-full">
     {model && <EditBlogModel model={model} details={details} setModel={setModel} Modelheading={'Update blog'}/>}
     
      {show ? (
       <ShowModel details={details} setShow={setShow}/>
      ) : (
        <>
          {selectedRows.length > 0 ? (    
            <button onClick={handleAllDeleteSelected} style={{margin: '.5rem 0 .5rem .2rem'}} className="del-button">
             <MdOutlineDeleteSweep className='icon-table'/> Delete {selectedRows.length} blogs
            </button>
          ):(
            <p className="datatable-heading">blogs</p>
          )}
          <DataGrid
            rows={row}
            columns={columns}
            rowsPerPageOptions={[5, 9, 25, 50, 100]} // Include 9 in this array
            component="div"
            checkboxSelection
            disableSelectionOnClick 
            onSelectionModelChange={handleAllSelectionChange}
          />
        </>
      )}
    </div>
  );
};


// Painters-Row
const TablePainterRow = ({ teams }) => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState([]);
  const [show, setShow] = useState(false);
  const [model, setModel] = useState(false);
  const [details, setDetails] = useState();


  const handleDelte = (id) => {
    dispatch(
      DeleteTeam(id, () => {
        dispatch(getAllTeams());
      })
    );
  };

  const handleAllSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const handleAllDeleteSelected = () => {
    selectedRows.forEach((id) => {
      handleDelte(id);
    });
  };

  const handleshowdetails = (item) => {
    setShow(true);
    setDetails(item);
  };

  
  const handleUpdate = (item) => {
    setModel(true);
    setDetails(item);
  };

  const columns = [
    { field: "name", headerName: "Name", flex: 1, minWidth: 190 },
    { field: "position", headerName: "Position", flex: 1, minWidth: 190 },
    { field: "degree", headerName: "Degree", flex: 1, minWidth: 190 },
    { field: "Whatsapp", headerName: "Contact Num", flex: 1, minWidth: 190 },
    {
      field: "image",
      headerName: "Profile Picture",
      flex: 1,
      minWidth: 170,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <img
          style={{
            width: "7rem",
            height: "4rem",
            borderRadius: "5%",
            objectFit: "cover",
            marginRight: "6px",
          }}
          src={`${serverimg}/${params.row.image}`}
          alt={params.row.createdby}
        />
      ),
    },
    {
      field: "delete",
      headerName: "Manage",
      flex: 1,
      minWidth: 150,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <>          
         <button onClick={() => handleDelte(params.row.id)} className="del-button" >
            <MdOutlineDeleteSweep className='icon-table'/>
         </button>
         <button  onClick={() => handleUpdate(params.row)} className="edit-button">
           <BiSolidEdit className='icon-table'/>
         </button>  
         <button   onClick={() => handleshowdetails(params.row)} className="show-button">
           <BiSolidShow className='icon-table'/>
         </button>     
        </>
      ),
    },
  ];

  const row = teams && teams.teams.map((item) => ({
      id: item._id,
      name: item.name,
      position: item.position,
      degree: item.degree,
      Whatsapp: item.Whatsapp,
      image: item.image,
    }));
    
  return (
    <div className="datatable-full">
    {model && <EditTeamModel model={model} details={details} setModel={setModel} Modelheading={'Update Painers details'}/>}
     
    {show ? (
     <ShowModel details={details} setShow={setShow}/>
    ) : (
      <>
        {selectedRows.length > 0 ? (    
            <button onClick={handleAllDeleteSelected} style={{margin: '.5rem 0 .5rem .2rem'}} className="del-button">
             <MdOutlineDeleteSweep className='icon-table'/> Delete {selectedRows.length} painters
            </button>
          ):(
            <p className="datatable-heading">painters</p>
          )}
        <DataGrid
          rows={row}
          columns={columns}
          rowsPerPageOptions={[5, 9, 25, 50, 100]} // Include 9 in this array
          component="div"
          checkboxSelection
          disableSelectionOnClick 
          onSelectionModelChange={handleAllSelectionChange}
        />
      </>
    )}
  </div>
  );
};


// Images-Row
const TableImageRow = ({ images }) => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState([]);

  const handleDelte = (id) => {
    dispatch(
      DeleteImage(id, () => {
         dispatch(getAllImages());
      })
    );
  };

  const handleAllSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const handleAllDeleteSelected = () => {
    selectedRows.forEach((id) => {
      handleDelte(id);
    });
  };

  const columns = [
    { field: "author", headerName: "Name", flex: 1, minWidth: 190 ,
    renderCell: (params) => (
      <>  
         <img
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "6px",
              }}
              src={
                  params.row.author.image
                  ? params.row.author.image
                  : "https://rb.gy/in89r"
              }
              alt={params.row.author.name}
          />
          {params.row.author.name}
      </>        
       )
   },
   { field: "createdAt", headerName: "CreatedAt", flex: 1, minWidth: 150 },
    {
      field: "image",
      headerName: "Profile Picture",
      flex: 1,
      minWidth: 170,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <img
          style={{
            width: "7rem",
            height: "4rem",
            borderRadius: "5%",
            objectFit: "cover",
            marginRight: "6px",
          }}
          src={params.row.image.url}
          alt={params.row.createdby}
        />
      ),
    },
    {
      field: "delete",
      headerName: "Manage",
      flex: 1,
      minWidth: 130,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <>          
         <button onClick={() => handleDelte(params.row.id)} className="del-button" >
            <MdOutlineDeleteSweep className='icon-table'/>
         </button>
         <button onClick={() => handleDelte(params.row.id)} className="edit-button">
           <BiSolidEdit className='icon-table'/>
         </button>      
        </>
      ),
    },
  ];

  const row = images && images.images.map((item) => ({
      id: item._id,
      author: item.createdby[0],
      createdAt:item.createdAt.slice(0, 10),
      image: item.image,
    }));

  return (
    <>
       <div className="datatable-full">
         {selectedRows.length > 0 ? (    
            <button onClick={handleAllDeleteSelected} style={{margin: '.5rem 0 .5rem .2rem'}} className="del-button">
             <MdOutlineDeleteSweep className='icon-table'/> Delete {selectedRows.length} images
            </button>
          ):(
            <p className="datatable-heading">images</p>
          )}
             <DataGrid
               rows={row}
               columns={columns}
               rowsPerPageOptions={[9, 25, 50, 100]} // Include 9 in this array
               component="div"
               checkboxSelection
               disableSelectionOnClick 
               onSelectionModelChange={handleAllSelectionChange}
             />
       </div>
     </>
  );
};

// Services-Row
const TableServicesRow = ({ services }) => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState([]);
  const [show, setShow] = useState(false);
  const [model, setModel] = useState(false);
  const [details, setDetails] = useState();

  const handleDelte = (id) => {
    dispatch(
      DeleteServices(id, () => {
         dispatch(getAllServices());
      })
    );
  };

  const handleAllSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const handleAllDeleteSelected = () => {
    selectedRows.forEach((id) => {
      handleDelte(id);
    });
  };

  const handleshowdetails = (item) => {
    setShow(true);
    setDetails(item);
  };

  const handleUpdate = (item) => {
    setModel(true);
    setDetails(item);
  };

  const columns = [
    { field: "heading", headerName: "Heading", flex: 1, minWidth: 140 },
    { field: "description", headerName: "Description", flex: 1, minWidth: 190},
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      minWidth: 170,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <img
          style={{
            width: "7rem",
            height: "4rem",
            borderRadius: "5%",
            objectFit: "cover",
            marginRight: "6px",
          }}
          src={`${serverimg}/${params.row.image}`}
          alt={params.row.createdby}
        />
      ),
    },
    { field: "createdAt", headerName: "Created At", flex: 1, minWidth: 160 },
    {
      field: "delete",
      headerName: "Manage",
      flex: 1,
      minWidth: 150,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <>          
         <button onClick={() => handleDelte(params.row.id)} className="del-button" >
            <MdOutlineDeleteSweep className='icon-table'/>
         </button>
         <button onClick={() =>  handleUpdate(params.row)} className="edit-button">
           <BiSolidEdit className='icon-table'/>
         </button>
         <button   onClick={() => handleshowdetails(params.row)} className="show-button">
           <BiSolidShow className='icon-table'/>
         </button>        
        </>
      ),
    },
  ];

  const row =
  services &&
  services.services.map((item) => ({
      id: item._id,
      heading: item.heading,
      description: item.description,
      image: item.image,
      createdAt: item.createdAt.slice(0, 10),
    }));
    
  return (
    <div className="datatable-full">
     {model && <EditServiceModel model={model} details={details} setModel={setModel} Modelheading={'Update Service details'}/>}
     
      {show ? (
       <ShowModel details={details} setShow={setShow}/>
      ) : (
        <>
        {selectedRows.length > 0 ? (    
            <button onClick={handleAllDeleteSelected} style={{margin: '.5rem 0 .5rem .2rem'}} className="del-button">
             <MdOutlineDeleteSweep className='icon-table'/> Delete {selectedRows.length} services
            </button>
          ):(
            <p className="datatable-heading">services</p>
          )}
          <DataGrid
            rows={row}
            columns={columns}
            rowsPerPageOptions={[9, 25, 50, 100]} // Include 9 in this array
            component="div"
            checkboxSelection
            disableSelectionOnClick 
            onSelectionModelChange={handleAllSelectionChange}
          />
        </>
      )}
    </div>
  );
};

// User-Row
const TableUserRow = ({ users }) => {
  const dispatch = useDispatch();
  const [selectedRows, setSelectedRows] = useState([]);
  const [show, setShow] = useState(false);
  const [model, setModel] = useState(false);
  const [details, setDetails] = useState();
  const [role, setRole] = useState();

  const handleDelte = (role,id) => {
     
      dispatch(
        DeleteUser(id, () => {
           dispatch(getAllUsers());
        })
      )
  };

  const handleAllSelectionChange = (selection) => {
    setSelectedRows(selection);
  };

  const handleAllDeleteSelected = () => {
    selectedRows.forEach((id) => {
      handleDelte(id);
    });
  };

  const handleoption =(item) =>{
    setModel(true)
    setRole(item)
  }

  const handleshowdetails = (item) => {
    setShow(true);
    setDetails(item);
  };

  const columns = [
    { field: "user", headerName: "User", flex: 1, minWidth: 140 ,
    renderCell: (params) => (
      <>  
         <img
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "6px",
              }}
              src={
                  params.row.user.avatar === 'nimg'
                  ?  "https://rb.gy/in89r"
                  :`${serverimg}/${params.row.user.avatar}`
              }
              alt={params.row.user.name}
          />
          {params.row.user.name}
      </>        
       )
   },
    { field: "email", headerName: "email", flex: 1, minWidth: 190},   
    { field: "phoneNumber", headerName: "phoneNumber", flex: 1, minWidth: 190},   
    { field: "address", headerName: "address", flex: 1, minWidth: 190},   
    { field: "role", headerName: "role", flex: 1, minWidth: 150},   
    { field: "createdAt", headerName: "Created At", flex: 1, minWidth: 160 },
    {
      field: "delete",
      headerName: "Manage",
      flex: 1,
      minWidth: 150,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <>          
         <button onClick={() => handleDelte(params.row.role,params.row.id)} className="del-button" >
            <MdOutlineDeleteSweep className='icon-table'/>
         </button>
         <button onClick={() => handleoption(params.row)} className="edit-button">
           <BiSolidEdit className='icon-table'/>
         </button>
         <button   onClick={() => handleshowdetails(params.row)} className="show-button">
           <BiSolidShow className='icon-table'/>
         </button>        
        </>
      ),
    },
  ];

  const row =
  users &&
  users.users.map((item) => ({
      id: item._id,
      user:item,
      email: item.email,
      phoneNumber: item.phoneNumber,
      address: item.address,
      role: item.role,
      createdAt: item.createdAt.slice(0, 10),
    }));

  return (
    <div className="datatable-full">

     {model && <UserRoleModel model={model} details={role} setModel={setModel} Modelheading={'Update User Role'}/>}
     
      {show ? (
       <ShowModel details={details} setShow={setShow}/>
      ) : (
       <>
          {selectedRows.length > 0 ? (    
            <button onClick={handleAllDeleteSelected} style={{margin: '.5rem 0 .5rem .2rem'}} className="del-button">
             <MdOutlineDeleteSweep className='icon-table'/> Delete {selectedRows.length} Users
            </button>
          ):(
              <p className="datatable-heading">users</p>
            
          )
      
          }
          <DataGrid
            rows={row}
            columns={columns}
            rowsPerPageOptions={[9, 25, 50, 100]} // Include 9 in this array
            component="div"
            checkboxSelection
            disableSelectionOnClick 
            onSelectionModelChange={handleAllSelectionChange}
          />
       </>
      )}
    </div>
  );
};



//Recents Blogs ---------------------
const TableResentblogRow = ({ blogs }) => {
  const columns = [
    { field: "createdby", headerName: "Author Name", flex: 1, minWidth: 140 },
    { field: "heading", headerName: "Heading", flex: 1, minWidth: 140 },
    { field: "category", headerName: "Category", flex: 1, minWidth: 140 },
    {
      field: "image",
      headerName: "Image",
      flex: 1,
      minWidth: 140,
      disableColumnMenu: true, // Disable the three dots menu
      filterable: false, // Disable filtering for this column
      sortable: false,
      renderCell: (params) => (
        <img
          style={{
            width: "7rem",
            height: "4rem",
            borderRadius: "5%",
            objectFit: "cover",
            marginRight: "6px",
          }}
          src={`${serverimg}/${params.row.image}`}
          alt={params.row.createdby}
        />
      ),
    },
  ];

  const row =
    blogs &&
    blogs.blogs.map((blog) => ({
      id: blog._id,
      createdby: blog.createdby[0].name,
      heading: blog.heading,
      category: blog.category,
      image:blog.image,
      createdAt: blog.createdAt.slice(0, 10),
    }));

  return (
        <>       
    <div className="dashboard-datatable-full">
         <p className="datatable-heading">Recent Blog Post</p>
      
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick 
          />
    </div>
        </>
  );
};


//Recents Users ---------------------
const TableResentUesrsRow = ({ users }) => {
  const columns = [
    { field: "user", headerName: "User", flex: 1, minWidth: 140 ,
    renderCell: (params) => (
      <>  
         <img
              style={{
                width: "2rem",
                height: "2rem",
                borderRadius: "50%",
                objectFit: "cover",
                marginRight: "6px",
              }}
              src={
                params.row.user.avatar === 'nimg'
                  ?  "https://rb.gy/in89r"
                  :`${serverimg}/${params.row.user.avatar}`
              }
              alt={params.row.user.name}
          />
          {params.row.user.name}
      </>        
       )
   },
    { field: "email", headerName: "email", flex: 1, minWidth: 190},   
    { field: "phoneNumber", headerName: "phoneNumber", flex: 1, minWidth: 190},   
    { field: "address", headerName: "address", flex: 1, minWidth: 190},   
    { field: "role", headerName: "role", flex: 1, minWidth: 150},   
    { field: "createdAt", headerName: "Created At", flex: 1, minWidth: 160 },
 
  ];

  const row =
  users &&
  users.users.map((item) => ({
      id: item._id,
      user:item,
      email: item.email,
      phoneNumber: item.phoneNumber,
      address: item.address,
      role: item.role,
      createdAt: item.createdAt.slice(0, 10),
    }));


  return (
        <>       
    <div className="dashboard-datatable-full">
         <p className="datatable-heading">Recently registered user</p>
      
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick 
          />
    </div>
        </>
  );
};


export {
  TableblogRow,
  TablePainterRow,
  TableImageRow,
  TableServicesRow,
  TableUserRow,
  TableResentblogRow,
  TableResentUesrsRow
};
