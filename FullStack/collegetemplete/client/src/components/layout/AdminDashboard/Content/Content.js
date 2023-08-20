import React, { useEffect, useRef, useState } from "react";
import "./Content.css";
import {MdDeleteForever,MdOutlineMiscellaneousServices} from 'react-icons/md'
import { SiApostrophe, SiMicrosoftteams} from "react-icons/si";
import {BiPlusCircle} from 'react-icons/bi'
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { CreateBlog, CreateImage, CreateService, CreateTeam, DeleteBanner, DeleteNPicture, getAllBanners, getAllBlogs, getAllImages, getAllNPictures, getAllServices, getAllTeams } from "../../../../redux/actions/admin";
import { clearErrors, clearMessages } from "../../../../redux/actions/user";
import { clearError, clearMessage } from "../../../../redux/actions/admin";
import {PropagateLoader} from "react-spinners";
import {TableResentblogRow,TableResentUesrsRow,TableImageRow, TablePainterRow, TableServicesRow, TableUserRow, TableblogRow} from "../../TableRow/TableRow";
import {CreateBannerModel,CreateNewPaintModel} from '../../Model/Model'
import  JoditEditor from 'jodit-react';
import { serverimg } from "../../../../server";


const DashboardContent = ({ active ,setActive,setIsDrawerOpen}) => {
 
  return (
    <section onClick={()=>setIsDrawerOpen(false)}  className="content-main">
      {active === 1 && <DashboardContentComponent setActive={setActive}/>}
      {active === 2 && <Navigate to="/" />}

      {active === 3 && <AddBlogContentComponent />}
      {active === 4 && <AllBlogsComponent />}
      
      {active === 5 && <AddPaintersContentComponent />}
      {active === 6 && <AllPaintersComponent />}

      {active === 7 && <AddServicesContentComponent />}
      {active === 8 && <AllServicesComponent />}

      {active === 9 && <AddImagesContentComponent />}
      {active === 10 && <AllImagesComponent />}

      {active === 11 && <AllBannerComponent />}
      {active === 12 && <AllPaintingsComponent />}


      {active === 13 && <AllUsersComponent />}
    </section>
  );
};

const DashboardContentComponent = ({setActive}) => {
  const {users,blogs ,teams,services} = useSelector(
    (state) => state.admin
  );

  const {isLoading} = useSelector(
    (state) => state.user
  );

 
  return (<>
  {
    isLoading ? (
        <div style={{position:' relative',top:'45%',right:'5%'}}>
          <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
        </div>
    ):(
      <section className="dashboard_container_">

         <div className="dashboard-upbar">
           <h1>Dashboard</h1>
           <button onClick={() => setActive(3)}>Write New Blog</button>
         </div>
         
         <div className="boxes-main-container">
                   <div className="boxes_container">  
                        <h1>All Blogs</h1>
                        <p><big><b>{blogs && blogs.blogs.length}</b></big></p>
                        <div onClick={() => setActive(4)} className="all_show_btn">
                                <p>View All Blogs</p>
                        </div>
                        <div   onClick={() => setActive(3)}  className="dashboard_content_button">
                                <SiApostrophe id="dashboard_content_icon"/>
                        </div>
                   </div>
                   <div className="boxes_container">
                        <h1>All Painters</h1>
                        <p><big><b>{teams && teams.teams.length}</b></big></p>
                        <div onClick={() => setActive(6)}  className="all_show_btn">
                                <p>View All Painters</p>
                        </div>
                        <div  onClick={() => setActive(5)} className="dashboard_content_button">
                                <SiMicrosoftteams id="dashboard_content_icon"/>
                        </div>
                   </div>
                   <div className="boxes_container">
                        <h1>All Services</h1>
                        <p><big><b>{services && services.services.length}</b></big></p>
                        <div onClick={() => setActive(8)}  className="all_show_btn">
                                <p>View All Services</p>
                        </div>
                        <div  onClick={() => setActive(7)} className="dashboard_content_button">
                                <MdOutlineMiscellaneousServices id="dashboard_content_icon"/>
                        </div>
                   </div>
         </div>         
              
         <div className="dashboard-table-container">
           <div className="dashboard-fst-table-container">
             {
              blogs?.blogs?.length > 0 
            ? <TableResentblogRow blogs={blogs} />   
            : <div style={{position:' relative',top:'45%',right:'5%'}}>
                 Not Yet Any Pictures
              </div>
             }
           </div>
           <div className="dashboard-sec-table-container">
              {
                users?.users?.length > 0 
                ? <TableResentUesrsRow users={users} />   
                : <div style={{position:' relative',top:'45%',right:'5%'}}>
                     Not Yet Any User info
                  </div>
              }
           </div>
         </div>             
               

        </section>
    )}      
 
  </>);
};


const AddBlogContentComponent = () => {
  const dispatch = useDispatch();
  const { message, isLoading, error } = useSelector(
    (state) => state.admin
  );
             const editor = useRef(null);
             const [image, setImage] = useState({ preview: "", data: "" });
             const [description, setDescription] = useState();
             const [formData, setFormData] = useState({
               heading: "",
               category: "",
               mobileNumber: "",
             });  
            // console.log(description)
             const handleChange = (e) => {
               const {name,value} = e.target;
                setFormData({ ...formData, [name]:value });
            };
            
            const handleImage = (e) => {
              e.preventDefault();
              const img = {
                preview: URL.createObjectURL(e.target.files[0]),
                data: e.target.files[0],
              };
              setImage(img);
            };
                     
            
            const handleSubmit = async (e) => {
              e.preventDefault();
              try {
                let blogdata = new FormData();
                const fieldsToAppend = ['heading', 'category', 'mobileNumber'];
            
                fieldsToAppend.forEach(field => {
                  blogdata.append(field, formData[field]);
                });
            
                blogdata.append("description", description);
                blogdata.append("file", image.data);
                await dispatch(CreateBlog(blogdata));
                dispatch(getAllBlogs())
                setFormData({ heading: "", category: "", mobileNumber: "" });
                setImage({ preview: "", data: "" });
                setDescription("")
              } catch (error) {
                // Handle the error, display an error message, or take appropriate action
                console.error(error);
              }
            };

              useEffect(() => {
                if (error) {
                  toast.error(error);
                  dispatch(clearErrors());
                  dispatch(clearMessages());
                }
                if (message) {
                toast.success(message);
                  dispatch(clearMessages());
                }
            
              }, [dispatch, error,clearErrors, toast,message,clearMessages]);
  return (
   
  <>
      { isLoading ? 
      (
        <div style={{position:' relative',top:'45%',right:'5%'}}>
          <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
        </div>
     ):(
   
      <section className="blog_main_container">
        <div style={{ width: '97%',display: 'flex',alignItems: 'start',justifyContent: 'start'}}>
           <p class="datatable-heading">Create new blog</p>
        </div>
       <form className="blog-form" onSubmit={handleSubmit} encType="multipart/form-data">

          <div className="form-group">
        <label className="content_label" htmlFor="heading">Heading:</label>
        <input
          type="text"
          id="heading"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
          required
        />
          </div>

          <div className="form-group">
        <label className="content_label" htmlFor="category">Category:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
          </div>

          <div className="form-group">
             <label className="content_label" htmlFor="description">Description:</label>
             <JoditEditor 
                id="description"
                value={description}
                required
                ref={editor}
                onBlur={newContent => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
			          onChange={newContent => {}}
              />
           </div>

          <div className="form-group">
        <label className="content_label" htmlFor="image">Select Image:</label>
        <input
          type="file"
          id="image"
          name="file"
          accept="image/*"
          className="choose-image"
          onChange={handleImage}
          required
        />
          </div>

      {/* Preview of the selected image */}
      {image.preview && (
        <div className="image-preview-item">
          <img src={image.preview} alt="Preview" />
        </div>
      )}
 


      <div className="form-group">
        <label className="content_label" htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          required
        />
      </div>

      <button id='blog-button'type="submit">Create Blog</button>
        </form>
      </section>
    
  )}
  </>
  );
};

const AddPaintersContentComponent = () => {
  const dispatch = useDispatch();
  const { message, isLoading, error } = useSelector(
    (state) => state.admin
  );
        const [image, setImage] = useState({ preview: "", data: "" });
        const [formData, setFormData] = useState({
                name: "",
                position: "",
                degree: "",
                Whatsapp:'',
                facebook:'',
                instagram:'',
                twitter:'',
                youtube:'',
                image: "",
              });

              const handleChange = (e) => {
                const {name,value} = e.target;
                 setFormData({ ...formData, [name]:value });
             };
              
              const handleImage = (e) => {
                e.preventDefault();
                const img = {
                  preview: URL.createObjectURL(e.target.files[0]),
                  data: e.target.files[0],
                };
                setImage(img);
              };
            
              
                const handleSubmit = async (e) => {
                  e.preventDefault();
                  try {
                    let teamdata = new FormData();
                    const fieldsToAppend = ['name', 'position', 'degree', 'Whatsapp','facebook','instagram','twitter','youtube'];
                
                    fieldsToAppend.forEach(field => {
                      teamdata.append(field, formData[field]);
                    });
                
                    teamdata.append("file", image.data);
                    await dispatch(CreateTeam(teamdata));
                    dispatch(getAllTeams())
                    setFormData({ name: "", position: "", degree: "", Whatsapp: "" ,facebook: "",instagram: "",twitter: "",youtube: ""});
                    setImage({ preview: "", data: "" });
                  } catch (error) {
                   console.error(error);
                  }
                };

                useEffect(() => {
                  if (error) {
                    toast.error(error);
                    dispatch(clearErrors());
                    dispatch(clearMessages());
                  }
                  if (message) {
                  toast.success(message);
                    dispatch(clearMessages());
                  }
              
                }, [dispatch, error,clearErrors, toast,message,clearMessages]);
            
  return (
  
    <>
      { isLoading ? 
      (
        <div style={{position:' relative',top:'45%',right:'5%'}}>
          <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
        </div>
     ):(
       <section className="blog_main_container">
       <div style={{ width: '97%',display: 'flex',alignItems: 'start',justifyContent: 'start'}}>
           <p class="datatable-heading">Create new Painter</p>
        </div>
       <form className="blog-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Painters Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="degree">Degree:</label>
        <input
          type="text"
          id="degree"
          name="degree"
          value={formData.degree}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
        />
      </div>
      
      {/* socalmedia links  */}
      <div className="form-group">
        <label htmlFor="socalicon">Socal Media Links:</label>
        <input
          type="text"
          id="socalicon"
          name="Whatsapp"
          placeholder="Whatsapp number"
          value={formData.Whatsapp}
          onChange={handleChange}
        />
        <input
          type="text"
          name="facebook"
          placeholder="facebook link"
          value={formData.facebook}
          onChange={handleChange}
        />
        <input
          type="text"
          name="instagram"
          placeholder="instagram link"
          value={formData.instagram}
          onChange={handleChange}
        />
        <input
          type="text"
          name="twitter"
          placeholder="twitter link"
          value={formData.twitter}
          onChange={handleChange}
        />
        <input
          type="text"
          name="youtube"
          placeholder="youtube link"
          value={formData.youtube}
          onChange={handleChange}
        />
      </div>


      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImage}
          required
        />
      </div>

      {/* Preview of the selected image */}
      {image.preview && (
        <div className="image-preview-item">
          <img src={image.preview} alt="Preview" />
        </div>
      )}


      <button id='blog-button'type="submit">Add Painter</button>
    </form>
       </section>
     )}
  </>
  );
};


const AddImagesContentComponent = () => {
  const dispatch = useDispatch();
  const {message, isLoading, error } = useSelector(
    (state) => state.admin
  );
        const [formData, setFormData] = useState({
          images: [], // Use an array to store multiple images
        });
      
        const handleChange = (e) => {
          const { name, files } = e.target;
          const newImages = Array.from(files);
      
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: [...prevFormData[name], ...newImages],
          }));
        };
      
        const handleRemoveImage = (index) => {
          setFormData((prevFormData) => {
            const updatedImages = [...prevFormData.images];
            updatedImages.splice(index, 1);
            return {
              ...prevFormData,
              images: updatedImages,
            };
          });
        };
      
        const handleSubmit = async(e) => {
          e.preventDefault();
          const newForm = new FormData();
          formData.images.forEach((image) => {
            newForm.append("file", image);
          });
          await dispatch(CreateImage(newForm))
          setFormData({images:[]})
          dispatch(getAllImages())
        };
      
        useEffect(() => {
          if (error) {
            toast.error(error);
            dispatch(clearErrors());
            dispatch(clearMessages());
          }
          if (message) {
          toast.success(message);
            dispatch(clearMessages());
          }
      
        }, [dispatch, error,clearErrors, toast,message,clearMessages]);
        return (
          <>
          { isLoading ? 
             (
               <div style={{position:' relative',top:'45%',right:'5%'}}>
                 <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
               </div>
            ):(
            <section className="blog_main_container">
               <div style={{ width: '97%',display: 'flex',alignItems: 'start',justifyContent: 'start'}}>
                  <p class="datatable-heading">Add Images</p>
               </div>
              <form className="blog-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="images">Images:</label>
                  <input
                    type="file"
                    id="images"
                    name="images"
                    accept="image/*"
                    onChange={handleChange}
                    multiple // Allow multiple files selection
                    required
                  />
                </div>
      
                {/* Preview of the selected images */}
                {formData.images.length > 0 && (
                  <div className="image-preview">
                    {formData.images.map((image, index) => (
                      <div key={index} className="image-preview-item">
                        <img src={URL.createObjectURL(image)} alt={`Preview ${index}`} />
                        <button type="button" id="delet-image-btn" onClick={() => handleRemoveImage(index)}>
                          <MdDeleteForever id="delte-image-icon"/>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
      
                <button id="blog-button" type="submit">
                  Add Images
                </button>
              </form>
            </section>
            )}   
          </>
        );
      };
      


const AddServicesContentComponent = () => {
  const dispatch = useDispatch();
  const {message, isLoading, error } = useSelector(
    (state) => state.admin
  );
        const [image, setImage] = useState({ preview: "", data: "" });
        const [formData, setFormData] = useState({
                heading: "",
                description: "",
              });
              const {heading,description} = formData;
            
              const handleChange = (e) => {
                const {name,value} = e.target;
                 setFormData({ ...formData, [name]:value });
             };
             
             const handleImage = (e) => {
               e.preventDefault();
               const img = {
                 preview: URL.createObjectURL(e.target.files[0]),
                 data: e.target.files[0],
               };
               setImage(img);
             };
                      
             
             const handleSubmit = async (e) => {
               e.preventDefault();
               try {
                 let servicesdata = new FormData();
                 servicesdata.append("heading",heading)
                 servicesdata.append("description",description)
                 servicesdata.append("file", image.data);
                 await dispatch(CreateService(servicesdata));
                 dispatch(getAllServices())
                 setFormData({ heading: "", description: ""});
                 setImage({ preview: "", data: "" });
               } catch (error) {
                 console.error(error);
               }
             };
 
               useEffect(() => {
                 if (error) {
                   toast.error(error);
                   dispatch(clearErrors());
                   dispatch(clearMessages());
                 }
                 if (message) {
                 toast.success(message);
                   dispatch(clearMessages());
                 }
             
               }, [dispatch, error,clearErrors, toast,message,clearMessages]);
            
  return (
  <>
     { isLoading ? 
      (
        <div style={{position:' relative',top:'45%',right:'5%'}}>
          <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
        </div>
     ):(
       <section className="blog_main_container">
         <div style={{ width: '97%',display: 'flex',alignItems: 'start',justifyContent: 'start'}}>
             <p class="datatable-heading">Create new services</p>
          </div>
       <form className="blog-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="heading">Heading:</label>
        <input
          type="text"
          id="heading"
          name="heading"
          value={formData.heading}
          onChange={handleChange}
          required
        />
      </div>

  
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          resize
          rows={11}
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          name="file"
          accept="image/*"
          onChange={handleImage}
          required
        />
      </div>

      {/* Preview of the selected image */}
      {image.preview && (
        <div className="image-preview-item">
          <img src={image.preview} alt="Preview" />
        </div>
      )}


      <button id='blog-button'type="submit">Add Serveices</button>
    </form>
       </section>
     )}
  </>
  );
};


// --------------------------------------------------------------------

const AllBlogsComponent = () => {
  const dispatch = useDispatch();
  const { blogs,isLoading,message, error } = useSelector(
    (state) => state.admin
  );
  
  

  useEffect(() => {   
    if(message){
      toast.success(message)
      dispatch(clearMessage())  
    }
    if(error){
      toast.error(error)
      dispatch(clearError())  
    }
  }, [dispatch,error,toast,message,clearError,clearMessage]);
  return( <>
{
  isLoading ? (
       <div style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative',top:'45%',right:'5%'}}>
         <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
       </div>
  ) : (  
       blogs && blogs.blogs.length>0
        ? <TableblogRow blogs={blogs} />   
        : <div style={{position:' relative',top:'45%',right:'5%'}}>
             Not Yet Any Blog
          </div>
 )}
  </>);
};



const AllPaintersComponent = () => {
  const dispatch = useDispatch();
  const {teams,isLoading,message, error } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {   
    if(message){
      toast.success(message)
      dispatch(clearMessage())  
    }
    if(error){
      toast.error(error)
      dispatch(clearError())  
    }
  }, [dispatch,error,toast,message,clearError,clearMessage]);
  return( <>
      {
      isLoading ? (
          <div style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative',top:'45%',right:'5%'}}>
            <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
           </div>
      ) : (  
            teams?.teams?.length > 0 
            ? <TablePainterRow teams={teams} />   
            : <div style={{position:' relative',top:'45%',right:'5%'}}>
                 Not Yet Any Painters
              </div>
      )}
  </>);
};


const AllImagesComponent = () => {
  const dispatch = useDispatch();
  const {images,isLoading,message, error } = useSelector(
    (state) => state.admin
  );


  useEffect(() => {   
    if(message){
      toast.success(message)
      dispatch(clearMessage())  
    }
    if(error){
      toast.error(error)
      dispatch(clearError())  
    }
  }, [dispatch,error,toast,message,clearError,clearMessage]);
  return( <>
  {
  isLoading ? (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative',top:'45%',right:'5%'}}>
        <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
       </div>
       ) : (  
          images?.images?.length > 0 
            ? <TableImageRow images={images} />   
            : <div style={{position:' relative',top:'45%',right:'5%'}}>
                 Not Yet Any Pictures
              </div>
      )}
  </>
  );
};


const AllServicesComponent = () => {
  const dispatch = useDispatch();
  const {services,isLoading,message, error } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {   
    if(message){
      toast.success(message)
      dispatch(clearMessage())  
    }
    if(error){
      toast.error(error)
      dispatch(clearError())  
    }
  }, [dispatch,error,toast,message,clearError,clearMessage]);
  return( <>
    {
  isLoading ? (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative',top:'45%',right:'5%'}}>
        <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
       </div>
       ) : (  
        services?.services?.length > 0 
            ? <TableServicesRow services={services} />   
            : <div style={{position:' relative',top:'45%',right:'5%'}}>
                 Not Yet Any Pictures
              </div>
      )}
  </>);
};


const AllBannerComponent = () => {
  const dispatch = useDispatch()
  const {hero,isLoading,message, error } = useSelector(
    (state) => state.admin
  );


  useEffect(() => {   
    if(message){
      toast.success(message)
      dispatch(clearMessage())  
    }
    if(error){
      toast.error(error)
      dispatch(clearError())  
    }
  }, []);

  const handleRemoveImage=(id)=>{
    dispatch(
      DeleteBanner(id, () => {
         dispatch(getAllBanners());
      })
    );
  }
  return (
  <>
   <div className="Banner_main_container">
       <div className="Banner_N_B_conatainer">   
           <p className="Banner_heading">All Banners</p>      
           <CreateBannerModel Modelheading={'Add New Banner'}/>
       </div>

       {isLoading ? 
      (
        <div style={{position:' relative',top:'45%',right:'5%'}}>
         <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
        </div>
      ):(
       <div className="Banner_Show_Dta_container">   
         <div className="image-preview">
            { hero?.hero?.map((item, index) => (
                 <div key={index} className="image-preview-item">
                   <img
                     src={item.image.url}
                     alt={item.createdby[0].name}
                     style={{ objectFit:'cover'}}
                   />
                   <div className="image-details-container">
                    <p className="image-creater">{item.createdby[0].name}</p>
                    <p className="image-creater">{item.createdAt.slice(0,10)}</p>
                   </div>
                   <button
                     type="button"
                     id="delet-image-btn"
                     onClick={() => handleRemoveImage(item._id)}
                   >
                     <MdDeleteForever id="delte-image-icon" />
                   </button>
                 </div>
           ))}
           </div>
       </div>
       )}
   </div>
  </>
  );
};


const AllPaintingsComponent = () => {
  const dispatch = useDispatch()
  const {newpicture,isLoading,message, error } = useSelector(
    (state) => state.admin
  );


  useEffect(() => {   
    if(message){
      toast.success(message)
      dispatch(clearMessage())  
    }
    if(error){
      toast.error(error)
      dispatch(clearError())  
    }
  }, [dispatch, error,clearErrors, toast,message,clearMessages]);

  const handleRemoveImage=(id)=>{
    dispatch(
      DeleteNPicture(id, () => {
         dispatch(getAllNPictures());
      })
    );
  }
  return (
  <>
     <div className="Banner_main_container">
       <div className="Banner_N_B_conatainer">   
           <p className="Banner_heading">All Banners</p>      
           <CreateNewPaintModel Modelheading={'Add New Pictures'}/>
       </div>

       {isLoading ? 
      (
        <div style={{position:' relative',top:'45%',right:'5%'}}>
         <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
        </div>
      ):(
       <div className="Banner_Show_Dta_container">   
         <div className="image-preview">
            { newpicture?.newpicture?.map((item, index) => (
                 <div key={index} className="image-preview-item">
                   <img
                      src={`${serverimg}/${item.image}`}
                     alt={item.createdby[0].name}
                     style={{ objectFit:'cover'}}
                   />
                   <div className="image-details-container">
                    <p className="image-creater">{item.createdby[0].name}</p>
                    <p className="image-creater">{item.createdAt.slice(0,10)}</p>
                   </div>
                   <p className="paintname">{item.heading}</p>
                   <button
                     type="button"
                     id="delet-image-btn"
                     onClick={() => handleRemoveImage(item._id)}
                   >
                     <MdDeleteForever id="delte-image-icon" />
                   </button>
                 </div>
           ))}
           </div>
       </div>
       )}
   </div>
  </>
  );
};



const AllUsersComponent = () => {

  const dispatch = useDispatch();
  const {users,isLoading,message, error } = useSelector(
    (state) => state.admin
  );

  useEffect(() => {   
    if(message){
      toast.success(message)
      dispatch(clearMessage())  
    }
    if(error){
      toast.error(error)
      dispatch(clearError())  
    }
  }, [dispatch,error,toast,message,clearError,clearMessage]);
  return( <>
    {
  isLoading ? (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',position:'relative',top:'45%',right:'5%'}}>
        <PropagateLoader color={"#40ccf5"} loading={isLoading} size={25} aria-label="Loading Spinner" />
       </div>
       ) : (  
        users?.users?.length > 0 
            ? <TableUserRow users={users} />   
            : <div style={{position:' relative',top:'45%',right:'5%'}}>
                 Not Yet Any User info
              </div>
      )}
  </>
  );
};
      
export default DashboardContent;
