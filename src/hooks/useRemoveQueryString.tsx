import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IRemoveQueryStringProps {
  setRefetchApi: (value: boolean) => void;
}

export const useRemoveQueryString = ({
  setRefetchApi,
}: IRemoveQueryStringProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const removeQueryString = (param: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete(param);
    router.push(pathname + "?" + params.toString());
    setRefetchApi(true);
    return params.toString();
  };

  return { removeQueryString };
};
