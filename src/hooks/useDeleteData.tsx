import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "react-toastify";

const useDeleteData = () => {
  const deleteData = async ({
    collectionName,
    docId,
  }: {
    collectionName: string;
    docId: string;
  }) => {
    console.log(db);
    try {
      const docRef = doc(db, collectionName, docId);
      await deleteDoc(docRef);
      toast.success("Document deleted!");
    } catch (error) {
      toast.error("Failed to delete document");
      console.error(error);
    }
  };

  return { deleteData };
};

export default useDeleteData;
