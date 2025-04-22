import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "react-toastify";

const useUpdateData = () => {
  const updateData = async ({
    collectionName,
    docId,
    newData,
  }: {
    collectionName: string;
    docId: string;
    newData: any;
  }) => {
    try {
      const docRef = doc(db, collectionName, docId);
      await updateDoc(docRef, newData);
      toast.success("Document updated!");
    } catch (error) {
      toast.error("Failed to update document");
      console.error(error);
    }
  };

  return { updateData };
};

export default useUpdateData;
