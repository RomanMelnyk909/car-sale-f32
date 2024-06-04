import { useEffect, useState } from "react";

const useData = (url: string) => {
    const [data, setData] = useState(null)
    const [fetching, setFetching] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setFetching(true);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Network response was not success.");
                }

                setTimeout(async () => {
                    const data = await response.json();

                    setData(data);
                    setFetching(false);
                }, 1000);
            } catch (error) {
                setError(error);
                setFetching(false);
            }
        };

        fetchData();
    }, [url]);

    return {data, fetching, error};
}

export default useData;