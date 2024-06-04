import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useDeleteEntity = (url: string, id: string, navigateTo: string) => {
  const [error, setError] = useState(null);
  const navigate = useNavigate()

  const deleteEntity = async () => {
    try {
        const response = await fetch(`${url}/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!response.ok) {
          throw new Error("Failed to delete blog.");
        }
  
        navigate(navigateTo);
      } catch (error) {
        console.error("Error:", error);
        setError(error)
      }
  };

  deleteEntity();

  return { error }
};

export default useDeleteEntity;
