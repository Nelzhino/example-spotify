import logo from '../shared/img/noimage.png'

export const transformImage = (image) => {

    let urlNoImg = logo;

    if(!image){
      return urlNoImg;
    }

    if(image.length > 0){
      return image[0].url;
    }
    else{
      return urlNoImg;
    }
}