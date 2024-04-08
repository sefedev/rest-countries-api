import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data_ = await res.json();
        setData(data_);
        setLoading(false);
      } catch (error) {
        setError(true);
        console.log("error", error);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
