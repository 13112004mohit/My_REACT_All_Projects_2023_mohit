const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error')
const cookieParser = require('cookie-parser');
const cors = require("cors");
const bodyParser = require('body-parser');
// const fileUpload  = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const multerupload = require('./utils/MulterUploads')
const ImgSchema = require('../backend/model/ImgModel')

app.use(express.json())
app.use(cors({origin: ["http://192.168.100.14:3000","http://localhost:3000"], credentials: true })); 
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
// app.use(fileUpload({useTempFiles:true}));


// config
if(process.env.NODE_ENV !== "PRODUCTION"){
        require("dotenv").config({
                path:"backend/config/config.env"
        })
}

// imports routes
const user = require('./routes/userRoute');
const shop = require('./routes/shopRoute');
const blog = require('./routes/BlogRoute');
const team = require('./routes/TeamRoute');
const services = require('./routes/ServicesRoute');
const gallery = require('./routes/GalleryRoute');
const Hero = require('./routes/HeroRoute');
const newPicture = require('./routes/NewPictureRoute');

app.use("/api/v2",user)
app.use("/api/v2",shop)
app.use("/api/v2",blog)
app.use("/api/v2",team)
app.use("/api/v2",services)
app.use("/api/v2",gallery)
app.use("/api/v2",Hero)
app.use("/api/v2",newPicture)

// uplaod Image -----------------------------------------------

// Create "uploads" folder if it doesn't exist
const uploadsPath = path.join(__dirname, 'uploads/faltu');
const upload = multerupload(uploadsPath)

app.post('/upload', upload.single('upload'), (req, res) => {
    let image = ImgSchema.create({
        image:req.file.filename
    })
    res.send(image);
}, (error, req, res, next) => {
    console.log(error.message);
    res.status(500).json({ error: 'Failed to upload file' });
});

app.get('/imgshow', async (req, res) => {
        try {
            const images = await ImgSchema.find();
            if (!images || images.length === 0) {
                return res.status(404).json({ message: 'No images found' });
            }
            res.json(images);
        } catch (error) {
            console.error('Error fetching images:', error);
            res.status(500).json({ error: 'Failed to fetch images' });
        }
    });
    
app.delete('/imgdel/:id', async (req, res) => {
        try {
            const imageId = req.params.id;
            const deletedImage = await ImgSchema.findByIdAndDelete(imageId);
            if (!deletedImage) {
                return res.status(404).json({ message: 'Image not found' });
            }
            const imagePath = path.join(uploadsPath, deletedImage.image);
            fs.unlinkSync(imagePath); // Delete image from the uploads folder
            console.log(uploadsPath)
            res.json({ message: 'Image deleted successfully' });
        } catch (error) {
            console.error('Error deleting image:', error);
            res.status(500).json({ error: 'Failed to delete image' });
        }
    });
    
app.put('/imgupdate/:id', upload.single('upload'), async (req, res) => {
        try {
            const imageId = req.params.id;
            const newImage = req.file.filename;
            
            const existingImage = await ImgSchema.findById(imageId);
            if (!existingImage) {
                return res.status(404).json({ message: 'Image not found' });
            }
    
            // Delete the old image from the uploads folder
            const oldImagePath = path.join(uploadsPath, existingImage.image);
            fs.unlinkSync(oldImagePath);
    
            // Update the image in the database
            const updatedImage = await ImgSchema.findByIdAndUpdate(
                imageId,
                { image: newImage },
                { new: true }
            );
    
            res.json(updatedImage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update image' });
        }
    });
// uplaod Image -----------------------------------------------

// it's for ErrorHandling
app.use(errorMiddleware)

module.exports = app;