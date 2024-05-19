import { useState, useEffect } from "react";
import { useBike } from "./useBike";
import qs from "qs";
import { filterEmptyStringsFromObject } from "@/utils/filterEmptyStrings";

export const useFetchTTL = (url: string) => {
  const [data, setData] = useState({
    data: { bikes: [] },
    last_updated: null,
    ttl: 1,
    nextPage: false,
    total_count: null,
  });
  const { bikeQuery } = useBike();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [ttl, setTtl] = useState(null);
  const [refetchApi, setRefetchApi] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        url + "?" + qs.stringify(filterEmptyStringsFromObject(bikeQuery))
      );
      const json = await response.json();
      setData(json);
      setTtl(json.ttl);
    } catch (error: any) {
      setError(error);
      setRefetchApi(true);
    } finally {
      setRefetchApi(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (refetchApi) {
      fetchData();
    }
  }, [refetchApi]);

  useEffect(() => {
    if (ttl && ttl > 0) {
      const timer = setInterval(() => {
        if (!loading) {
          setTtl(ttl && ttl - 1);
        }
      }, 1000);
      if (ttl === 1) {
        setRefetchApi(true);
        clearInterval(timer);
      }
      return () => {
        clearInterval(timer);
      };
    }
  }, [ttl]);

  return { data, error, loading, ttl, setTtl, setRefetchApi };
};
