import { useState } from "react";

const useEditEntity = (url: string, obj) => {
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState(null);

  const editEntity = async () => {
    setUpdating(true);

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      if (!response.ok) {
        throw new Error("Failed to edit blog.");
      }

      setUpdating(false);
    } catch (error) {
      setError(error)
      setUpdating(false)
    }
  };

  editEntity();

  return { updating, error };
};

export default useEditEntity;
