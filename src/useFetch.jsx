import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortFetch = new AbortController();
    // setTimeout(() => {
    fetch(url, { signal: abortFetch.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Couldn't fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          // setError(err.message);
          console.log("fetch aborted");
        } else {
          setIsPending(false);
          setError(err.message);
          return true;
        }
      });
    // }, 3000);
    return ()=> abortFetch.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
