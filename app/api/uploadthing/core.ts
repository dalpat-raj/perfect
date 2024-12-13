import { createUploadthing, type FileRouter } from "uploadthing/next";
import { z } from "zod";

const f = createUploadthing({
  errorFormatter: (err) => {
    return {
      message: err.message,
      zodError: err.cause instanceof z.ZodError ? err.cause.flatten() : null,
    };
  },
});


export const ourFileRouter = {
  bannerImage: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } }) 
    .onUploadComplete(async () => {
      return { uploadedBy: "Admin" };
    }),
  reviewImage: f({ image: { maxFileSize: "4MB", maxFileCount: 4 } }) 
    .onUploadComplete(async () => {
      return { uploadedBy: "User" };
    }),
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 8 } }) 
    .onUploadComplete(async () => {
      return { uploadedBy: "Admin" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;





