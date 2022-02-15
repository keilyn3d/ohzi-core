import { Vector4 } from 'three';

export default class ImageUtilities
{
  constructor()
  { }

  static get_image_data(image)
  {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0);

    return context.getImageData(0, 0, image.width, image.height);
  }

  static get_pixel(imagedata, x, y)
  {
    const position = (x + imagedata.width * y) * 4;
    const data = imagedata.data;
    return new Vector4(data[position + 0], data[position + 1], data[position + 2], data[position + 3]);
  }
}
