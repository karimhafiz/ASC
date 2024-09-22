import imageCompression from "browser-image-compression";

export async function handleImageCompression(file) {
  const options = {
    maxSizeMB: 1, // Maximum file size in MB
    maxWidthOrHeight: 800, // Maximum width or height in pixels
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    // Log compressed image size
    console.log("Compressed image size:", compressedFile.size, "bytes");
    return compressedFile;
  } catch (error) {
    console.error("Error during image compression:", error);
    return file; // Fallback to original file if compression fails
  }
}
