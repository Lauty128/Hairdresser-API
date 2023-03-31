//------ Dependencies
import cloudinary from 'cloudinary';

//------ Utils functions
const cloudinary_image = (folder, image) =>{
    const image_name_with_format = image.split(`/${folder}/`)
    const name = image_name_with_format[1].slice(0, image_name_with_format[1].length-4)

    return (!!folder) ? `${folder}/${name}` : name
}

//------ Config
cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_NAME, 
    api_key: process.env.CLOUDINARY_KEY, 
    api_secret: process.env.CLOUDINARY_SECRET
});

//------ Functions
const upload = (file, folder="Hairdresser") => {
    return new Promise((resolve, reject) => {
        try{
            cloudinary.v2.uploader.upload(file, { folder })
                .then(response=> resolve(response) )
        }
        catch(err){ reject({
            err,
            msg:"Ocurrio un error durante la subida de una imagen"
        }) }
    }) 
}

const destroy = (image) => {
    return new Promise((resolve, reject) => {
        try{
            const image_name = cloudinary_image("Hairdresser", image)
             cloudinary.v2.uploader
                 .destroy(image_name, { resource_type:"image" })
                 .then(response => resolve(response))
        }
        catch(err){ reject({
            err,
            msg:"Ocurrio un error durante la subida de una imagen"
        }) }
    }) 
}

export default {
    upload,
    destroy
}