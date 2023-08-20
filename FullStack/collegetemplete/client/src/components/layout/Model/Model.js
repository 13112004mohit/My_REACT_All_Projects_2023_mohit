import React, { useEffect, useRef, useState } from "react";
import "./model.css";
import { MdDeleteForever } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  CreateBanner,
  CreateNPicture,
  UpdateBlog,
  UpdateRole,
  UpdateServices,
  UpdateTeam,
  clearError,
  clearMessage,
  getAllBanners,
  getAllBlogs,
  getAllNPictures,
  getAllServices,
  getAllTeams,
  getAllUsers,
} from "../../../redux/actions/admin";
import { PropagateLoader } from "react-spinners";
import { serverimg } from "../../../server";
import DOMPurify from "dompurify";
import  JoditEditor from 'jodit-react';

const CreateBannerModel = ({Modelheading}) => {
  const dispatch = useDispatch();
  const { isLoading, message, error } = useSelector((state) => state.admin);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newForm = new FormData();
    formData.images.forEach((image) => {
      newForm.append("file", image);
    });
    dispatch(
      CreateBanner(newForm, async () => {
        await dispatch(getAllBanners());
      })
    );
    setFormData({ images: [] });
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
    if (message) {
      toast.success(message);
      dispatch(clearMessage());
    }
  }, [dispatch, error, clearError, toast, message, clearMessage]);
  // ------------------------
  const [model, setModel] = useState(false);
  const openModal = () => {
    setModel(true);
  };
 

  return (
    <>
      {model && (
        <div className="modal2-overlay">
          <div className="modal2_main_container">
          <div className="modal2_main_header">
               <h1 className="model2_heading_name">{Modelheading ? Modelheading : ''}</h1>
               <button style={{top:'7%'}} className="modal2-close-button" onClick={() => setModel(false)}>
                <GrClose />
               </button>
            </div> 
            <section className="model2_container">
             
              {isLoading ? (
                <div style={{ position: " relative", top: "-5%", left: "-4%" }}>
                 <PropagateLoader
                    color={"#40ccf5"}
                    loading={isLoading}
                    size={25}
                    aria-label="Loading Spinner"
                  /> 
                </div>
              ) : (
                <form className="model2_form" onSubmit={handleSubmit}>
                  {/* Preview of the selected images */}
                  {formData.images.length > 0 && (
                    <div className="model2_image_preview">
                      {formData.images.map((image, index) => (
                        <div key={index} className="model2_image_preview_item">
                          <img
                            src={URL.createObjectURL(image)}
                            alt={`Preview ${index}`}
                          />
                          <button
                            type="button"
                            id="model2_delet_image_btn"
                            onClick={() => handleRemoveImage(index)}
                          >
                            <MdDeleteForever id="model2_delte_image_icon" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="model2_group">
                    <label className="model2_label" htmlFor="images">Select Images:</label>
                    <input
                      type="file"
                      id="images"
                      name="images"
                      accept="image/*"
                      onChange={handleChange}
                      className="chooseimage"
                      multiple // Allow multiple files selection
                      required
                    />
                  </div>
                  <button
                    id="model2_create_button"
                    type="submit"
                  >
                    Add Images
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      )}

      <div onClick={() => openModal()} className="model2-open">
        Add New
      </div>
    </>
  );
};



const CreateNewPaintModel = ({Modelheading}) => {
  const dispatch = useDispatch();
  const {  isLoading } = useSelector((state) => state.admin);
  const [image, setImage] = useState({ preview: "", data: "" });
  const [heading, setHeading] = useState();

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
      let newdata = new FormData();
      newdata.append("heading", heading);
      newdata.append("file", image.data);
      dispatch(
        CreateNPicture(newdata, async () => {
          await dispatch(getAllNPictures());
        })
      );
      setHeading("");
      setImage({ preview: "", data: "" });
    } catch (error) {
      console.error(error);
    }
  };

  // ------------------------
  const [model, setModel] = useState(false);
  const openModal = () => {
    setModel(true);
  };


  return (
    <>
      {model && (
        <div className="modal2-overlay">
          <div className="modal2_main_container">
          <div className="modal2_main_header">
               <h1 className="model2_heading_name">{Modelheading ? Modelheading : ''}</h1>
               <button style={{top:'7%'}} className="modal2-close-button" onClick={() => setModel(false)}>
                <GrClose />
               </button>
            </div> 
             <section className="model2_container">           
              {isLoading ? (
                <div style={{ position: " relative", top: "-5%", left: "-4%" }}>
                  <PropagateLoader
                    color={"#40ccf5"}
                    loading={isLoading}
                    size={25}
                    aria-label="Loading Spinner"
                  />
                </div>
              ) : (
                <form
                  className="model2_form"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >

                  <div className="model2_group">
                    <label className="model2_label" htmlFor="image">Select Image:</label>
                    <input
                      type="file"
                      id="image"
                      name="file"
                      accept="image/*"
                      className="chooseimage"
                      onChange={handleImage}
                      required
                    />
                  </div>

                  {/* Preview of the selected image */}
                  {image.preview && (
                    <div className="model2_image_preview_item">
                      <img src={image.preview} alt="Preview" />
                    </div>
                  )}

                  <div className="form-group">
                    <label className="model2_label" htmlFor="heading">Painting Name:</label>
                    <input
                      type="text"
                      id="heading"
                      maxLength={25}
                      name="heading"
                      value={heading}
                      onChange={(e) => setHeading(e.target.value)}
                      required
                    />
                  </div>

                  <button id="model2_create_button" type="submit">
                    Create
                  </button>
                </form>
              )}
            </section>
          </div>
        </div>
      )}

      <div onClick={() => openModal()} className="model2-open">
        Add new
      </div>
    </>
  );
};


const EditBlogModel = ({model,details,setModel,Modelheading}) => {
  const dispatch = useDispatch();
  const editor = useRef(null);
  const {  isLoading } = useSelector((state) => state.admin);
  
  const [image, setImage] = useState({ preview:`${serverimg}/${details.image}`, data: "" });
  const [description, setDescription] = useState(details.description);
  const [formData, setFormData] = useState({
    heading:`${details.heading}`,
    category:`${details.category}`,
    mobileNumber:`${details.mobileNumber}`
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
      let blogdata = new FormData();
      const fieldsToAppend = ['heading', 'category', 'mobileNumber'];
  
      fieldsToAppend.forEach(field => {
        blogdata.append(field, formData[field]);
      });
  
      blogdata.append("description", description);
      blogdata.append("file", image.data);
       dispatch(
         UpdateBlog(details.id,blogdata, async () => {
           await dispatch(getAllBlogs());
         })
       );
       setDescription("");
       setImage({ preview: "", data: "" });
       setFormData({ heading: "", category: "", mobileNumber: "" });
     } catch (error) {
     console.error(error);
     }   
  };


  return (
    <>
      {model && (
        <div className="modal2-overlay">
          <div className="modal2_main_container">
          <div className="modal2_main_header">
               <h1 className="model2_heading_name">{Modelheading ? Modelheading : ''}</h1>
               <button s className="modal2-close-button" onClick={() => setModel(false)}>
                <GrClose />
               </button>
            </div> 

             <section className="model2_container">           
              {isLoading ? (
                <div style={{ position: " relative", top: "-5%", left: "-4%" }}>
                  <PropagateLoader
                    color={"#40ccf5"}
                    loading={isLoading}
                    size={25}
                    aria-label="Loading Spinner"
                  />
                </div>
              ) : (
                <form
                  className="model2_form"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >

                  <div className="model2_group">
                    <label className="model2_label" htmlFor="image">Select Image:</label>
                    <input
                      type="file"
                      id="image"
                      name="file"
                      accept="image/*"
                      className="chooseimage"
                      onChange={handleImage}
                      required
                    />
                  </div>

                  {/* Preview of the selected image */}
                  {image.preview && (
                    <div className="model2_image_preview_item">
                      <img src={image.preview} alt="Preview" />
                    </div>
                  )}

                  <div className="model2_group">
                    <label className="model2_label" htmlFor="heading">Heading : </label>
                    <input
                       type="text"
                       id="heading"
                       name="heading"
                       value={formData.heading}
                       onChange={handleChange}
                       required
                     />
                  </div>
               
                  <div className="model2_group">
                    <label className="model2_label" htmlFor="category">Category : </label>
                    <input
                       type="text"
                       id="category"
                       name="category"
                       value={formData.category}
                       onChange={handleChange}
                       required
                     />
                  </div>
               
                  <div className="model2_group">
                    <label className="model2_label" htmlFor="mobileNumber">Mobile Number : </label>
                    <input
                       type="tel"
                       id="mobileNumber"
                       name="mobileNumber"
                       value={formData.mobileNumber}
                       onChange={handleChange}
                       required
                     />
                  </div>
               
                  <div className="model2_group">
                    <label className="model2_label" htmlFor="description">Description : </label>
                    <JoditEditor 
                       id="description"
                       value={description}
                       required
                       ref={editor}
                       onBlur={newContent => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
			                 onChange={newContent => {}}
                     />
                  </div>
               
                </form>
              )}
             </section>


            <div className="confirm_action_buttons">
                    <button onClick={handleSubmit}>Save</button>
                    <button  onClick={() => setModel(false)}>Cancel</button>
                </div>
          </div>
        </div>
      )}

    </>
  );
};



const EditTeamModel = ({model,details,setModel,Modelheading}) => {
  const dispatch = useDispatch();
  const {  isLoading } = useSelector((state) => state.admin);
  
  const [image, setImage] = useState({ preview:`${serverimg}/${details.image}`, data: "" });
  const [formData, setFormData] = useState({
    name: `${details.name}`,
    position: `${details.position}`,
    degree: `${details.degree}`,
    Whatsapp:`${details.Whatsapp}`,
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
       dispatch(
        UpdateTeam(details.id,teamdata, async () => {
           await dispatch(getAllTeams());
         })
       );
       
       setImage({ preview: "", data: "" });
       setFormData({ name: "", position: "", degree: "",Whatsapp:"",facebook:"" });
     } catch (error) {
     console.error(error);
     }   
  };


  return (
    <>
      {model && (
        <div className="modal2-overlay">
          <div className="modal2_main_container">
          <div className="modal2_main_header">
               <h1 className="model2_heading_name">{Modelheading ? Modelheading : ''}</h1>
               <button s className="modal2-close-button" onClick={() => setModel(false)}>
                <GrClose />
               </button>
            </div> 

             <section className="model2_container">           
              {isLoading ? (
                <div style={{ position: " relative", top: "-5%", left: "-4%" }}>
                  <PropagateLoader
                    color={"#40ccf5"}
                    loading={isLoading}
                    size={25}
                    aria-label="Loading Spinner"
                  />
                </div>
              ) : (
                <form
                  className="model2_form"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >

                  <div className="model2_group">
                    <label className="model2_label" htmlFor="image">Select Image:</label>
                    <input
                      type="file"
                      id="image"
                      name="file"
                      accept="image/*"
                      className="chooseimage"
                      onChange={handleImage}
                      required
                    />
                  </div>

                  {/* Preview of the selected image */}
                  {image.preview && (
                    <div className="model2_image_preview_item">
                      <img src={image.preview} alt="Preview" />
                    </div>
                  )}

                   {/*basic details  */}
                   <div className="model2_group">
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
              
                    <div className="model2_group">
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
              
                    <div className="model2_group">
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
      

                   {/* socalmedia links */}
                  <div className="model2_group">
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
               
                </form>
              )}
             </section>


            <div className="confirm_action_buttons">
                    <button onClick={handleSubmit}>Save</button>
                    <button  onClick={() => setModel(false)}>Cancel</button>
                </div>
          </div>
        </div>
      )}

    </>
  );
};



const EditServiceModel = ({model,details,setModel,Modelheading}) => {
  const dispatch = useDispatch();
  const {  isLoading } = useSelector((state) => state.admin);
  
  const [image, setImage] = useState({ preview:`${serverimg}/${details.image}`, data: "" });
  const [formData, setFormData] = useState({
    heading: `${details.heading}`,
    description:`${details.description}`,
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
      let servicedata = new FormData();
          servicedata.append("heading",heading)
          servicedata.append("description",description)
          servicedata.append("file", image.data);
       dispatch(
        UpdateServices(details.id,servicedata, async () => {
           await dispatch(getAllServices());
         })
       );
       
       setImage({ preview: "", data: "" });
       setFormData({ heading: "", description: ""});
     } catch (error) {
     console.error(error);
     }   
  };


  return (
    <>
      {model && (
        <div className="modal2-overlay">
          <div className="modal2_main_container">
          <div className="modal2_main_header">
               <h1 className="model2_heading_name">{Modelheading ? Modelheading : ''}</h1>
               <button s className="modal2-close-button" onClick={() => setModel(false)}>
                <GrClose />
               </button>
            </div> 

             <section className="model2_container">           
              {isLoading ? (
                <div style={{ position: " relative", top: "-5%", left: "-4%" }}>
                  <PropagateLoader
                    color={"#40ccf5"}
                    loading={isLoading}
                    size={25}
                    aria-label="Loading Spinner"
                  />
                </div>
              ) : (
                <form
                  className="model2_form"
                  onSubmit={handleSubmit}
                  encType="multipart/form-data"
                >

                  <div className="model2_group">
                    <label className="model2_label" htmlFor="image">Select Image:</label>
                    <input
                      type="file"
                      id="image"
                      name="file"
                      accept="image/*"
                      className="chooseimage"
                      onChange={handleImage}
                      required
                    />
                  </div>

                  {/* Preview of the selected image */}
                  {image.preview && (
                    <div className="model2_image_preview_item">
                      <img src={image.preview} alt="Preview" />
                    </div>
                  )}

                   {/*basic details  */}
                   <div className="model2_group">
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
  

                </form>
              )}
             </section>


            <div className="confirm_action_buttons">
                    <button onClick={handleSubmit}>Save</button>
                    <button  onClick={() => setModel(false)}>Cancel</button>
                </div>
          </div>
        </div>
      )}

    </>
  );
};



const ShowModel = ({ details, setShow }) => {
  console.log("image:::>",details)
  const sanitizedHTML = DOMPurify.sanitize(details.description);
  return (
    <>
      <section className="datashow-maincontainer">
        <button className="datashow-closebtn" onClick={() => setShow(false)}>
          Close
        </button>
        <div className="datashow-section">
          {details.name && (
            <div className="datashow-name">
              <b>Name :</b> {details.name}
            </div>
          )}

          {details.user && (
            <div className="datashow-name">
              <b>User Name :</b> {details.user.name}
            </div>
          )}

          {details.user && (
            <div className="datashow-name">
              <b>email :</b> {details.user.email}
            </div>
          )}

          {details.user && (
            <div className="datashow-name">
              <b>Phone Number :</b> {details.user.phoneNumber}
            </div>
          )}

          {details.user && (
            <div className="datashow-name">
              <b>Address :</b> {details.user.address}
            </div>
          )}

          {details.user && (
            <div className="datashow-name">
              <b>User Role :</b> {details.user.role}
            </div>
          )}

          {details.degree && (
            <div className="datashow-name">
              <b>Degree :</b> {details.degree}
            </div>
          )}

          {details.position && (
            <div className="datashow-name">
              <b>Position :</b> {details.position}
            </div>
          )}

          {details.Whatsapp && (
            <div className="datashow-name">
              <b>Whatsapp :</b> {details.Whatsapp}
            </div>
          )}

          {details.heading && (
            <div className="datashow-heading">
              <big>
                <b>heading : {details.heading}</b>
              </big>
            </div>
          )}

          {details.category && (
            <div className="datashow-name">
              <b>category : </b>
              {details.category}
            </div>
          )}

          {details.createdby && (
            <div className="datashow-name">
              <b>Author : </b>
              {details.createdby}
            </div>
          )}

          {details.createdAt && (
            <div className="datashow-name">
              <b>created At :</b> {details.createdAt}
            </div>
          )}

          {details.user && details.user.avatar ? (
            <div className="datashow-image">
              <img
                src={`${serverimg}/${details.user.avatar}`}
                alt={details.user.name || ""}
              />
            </div>
          ) : (
            <div className="datashow-image">
              <img src={`${serverimg}/${details.image}`} alt={details.createdby || ""} />
            </div>
          )}

          {/* {details.description && (
            <span
              className="datashow-here"
              dangerouslySetInnerHTML={{ __html: details.description }}
            />
          )} */}

          {details.description && (
            <div
              className="datashow-here"
              dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            />
          )}
        </div>
      </section>
    </>
  );
};


const ConfirmModel = ()=>{

}


const UserRoleModel = ({model,details,setModel,Modelheading}) => {
  const dispatch = useDispatch();
  const [role, setRole] = useState('admin');

  
  const handleOptionChange = (event) => {
    setRole(event.target.value); // Update the role state with the selected value
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(
        UpdateRole(details.id,role, async () => {
          await dispatch(getAllUsers());
          await setModel(false)
        })
      );
      setRole("");
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <>
      {model && (
        <div className="modal2-overlay">
          <div className="modal2_main_container">  
            <div className="modal2_main_header">
               <h1 className="model2_heading_name">{Modelheading ? Modelheading : ''}</h1>
               <button  className="modal2-close-button" onClick={() => setModel(false)}>
                <GrClose />
               </button>
            </div>         
        
           <section className="confirm_model_container">      
               <p className="cnfirm_message_text">
               Allow <span style={{color:'#06258d'}}>{details.user.name}</span> to access specific privileges and functionalities."
               </p>     
                <div className="confirm_radio_buttons">
                    <label>
                      <input
                       name="role"
                        type="radio"
                        value="admin"
                        checked={role === 'admin'}
                        onChange={handleOptionChange}
                      />
                      Admin
                    </label>
                    <label>
                      <input
                       name="role"
                        type="radio"
                        value="blogpost"
                        checked={role === 'blogpost'}
                        onChange={handleOptionChange}
                      />
                      Blog Post
                    </label>
                    <label>
                      <input
                       name="role"
                        type="radio"
                        value="newpaints"
                        checked={role === 'newpaints'}
                        onChange={handleOptionChange}
                      />
                      New Paints
                    </label>
                    <label>
                      <input
                       name="role"
                        type="radio"
                        value="user"
                        checked={role === 'user'}
                        onChange={handleOptionChange}
                      />
                      User
                    </label>
                </div>
                <div className="confirm_action_buttons">
                    <button onClick={handleSubmit}>Save</button>
                    <button  onClick={() => setModel(false)}>Cancel</button>
                </div>
           </section>
          </div>
        </div>
      )}

    </>
  );
};

export {
  CreateBannerModel,
  CreateNewPaintModel,
  EditBlogModel,
  EditTeamModel,
  EditServiceModel,
  ShowModel,
  ConfirmModel,
  UserRoleModel,
};
