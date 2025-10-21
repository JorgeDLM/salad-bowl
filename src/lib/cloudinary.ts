import { v2 as cloudinary } from 'cloudinary';

// Configurar Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

/**
 * Subir archivo a Cloudinary
 * @param file - Buffer o base64 del archivo
 * @param folder - Carpeta en Cloudinary
 * @param options - Opciones adicionales
 */
export async function uploadToCloudinary(
  file: string | Buffer,
  folder: string = 'saladbowl',
  options: any = {}
) {
  try {
    const result = await cloudinary.uploader.upload(
      typeof file === 'string' ? file : `data:image/png;base64,${file.toString('base64')}`,
      {
        folder,
        resource_type: 'auto',
        ...options,
      }
    );
    return {
      success: true,
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error('Error uploading to Cloudinary:', error);
    return {
      success: false,
      error: 'Error al subir archivo',
    };
  }
}

/**
 * Eliminar archivo de Cloudinary
 * @param publicId - Public ID del archivo
 */
export async function deleteFromCloudinary(publicId: string) {
  try {
    await cloudinary.uploader.destroy(publicId);
    return { success: true };
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error);
    return { success: false, error: 'Error al eliminar archivo' };
  }
}

/**
 * Generar URL de transformación
 * @param publicId - Public ID de la imagen
 * @param transformations - Transformaciones de Cloudinary
 */
export function getCloudinaryUrl(publicId: string, transformations: any = {}) {
  return cloudinary.url(publicId, {
    secure: true,
    ...transformations,
  });
}
