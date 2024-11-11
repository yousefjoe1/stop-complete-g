import { useQuery } from '@tanstack/react-query';
import { getData, getDataWithAuth } from '../_functions/getData';

const useFetch = (url:string, apiName:string, fetchAgain:any,auth = '') => {
// * url , apiName , fetchAgain , isPaginate , isAuth , isEnable
    let { data, isLoading, isRefetching, isError,refetch ,error,isFetched} = useQuery({
        queryKey: [apiName, fetchAgain],
        queryFn: () => {
            if(auth.length > 0){

                return getDataWithAuth(url,auth)
            }else {
                return getData(url)
            }
        },
        refetchOnWindowFocus: false,
        // enabled: isEnable
    });
    return {data, isLoading, isRefetching, isError,refetch, error , isFetched}
}
export default useFetch