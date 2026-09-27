import noImage from "@/assets/ImagePlaceholder/no-image-placeholder-6f3882e0.webp";

export const getImageURL = (url: string) => {
  if (!url) return noImage;
  else return url;
};
