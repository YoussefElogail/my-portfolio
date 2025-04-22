import {
  addDoc,
  collection,
  DocumentData,
  WithFieldValue,
} from "firebase/firestore";
import { db } from "@/config/firebase";
import { toast } from "react-toastify";
import { UseFormReset } from "react-hook-form";
import { useState } from "react";
import { useDashBoard } from "./../contexts/DashboardContext";

const useAddData = <T extends WithFieldValue<DocumentData>>() => {
  const { setIsLoading } = useDashBoard();
  const addData = async ({
    collectionName,
    data,
    reset,
  }: {
    collectionName: string;
    data: T;
    reset: UseFormReset<T>;
  }) => {
    setIsLoading(true);
    try {
      const docRef = await addDoc(collection(db, collectionName), data);

      toast.success("Data added successfully!");
      reset();

      return docRef;
    } catch (error) {
      console.error("Error adding data:", error);
      toast.error("Error adding data");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { addData };
};

export default useAddData;
