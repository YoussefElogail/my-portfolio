import { useDashBoard } from "@/contexts/DashboardContext";
import { toast } from "react-toastify";

const useUploadImageToCloudinary = () => {
  const { setIsLoading } = useDashBoard();

  const uploadImageToCloudinary = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_upload");
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/dg17bwjup/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();
      return data.secure_url;
    } catch (error: any) {
      toast(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { uploadImageToCloudinary };
};

export default useUploadImageToCloudinary; // ✅ تأكد من وجود الـ default export
