import { usePathname, useRouter } from "next/navigation";
import qs from "qs";
import { useBike } from "./useBike";
import { filterEmptyStringsFromObject } from "@/utils/filterEmptyStrings";

interface ICreateQueryStringProps {
  setRefetchApi: (value: boolean) => void;
}

export const useCreateQueryString = ({
  setRefetchApi,
}: ICreateQueryStringProps) => {
  const { bikeQuery } = useBike();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = (name: string, value: string) => {
    const params = new URLSearchParams(
      qs.stringify(filterEmptyStringsFromObject(bikeQuery))
    );
    params.set(name, value);
    router.push(pathname + "?" + params.toString());
    setRefetchApi(true);
    return params.toString();
  };

  return { createQueryString };
};
