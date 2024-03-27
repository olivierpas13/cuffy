import { useInfiniteQuery } from "@tanstack/react-query";
import Skeleton from "../General/Skeleton";
import { getProductsPage } from "@/services/products";
import Products from "./Products";
import { extractDataFromIQuery } from "@/utils/productsUtils";

const Bouquets = () => {

  //TODO filter shows everything but bouquets filter
  const { data, status, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: getProductsPage,
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextPage,
      staleTime: Infinity,
    });

  return (
    <div>
      {status === "pending" && <Skeleton />}
      {status === "success" && (
        <Products
          title={"Ramos personalizados"}
          data={extractDataFromIQuery(data).filter(product => product.properties.includes("ramo"))}
          error={error}
          status={status}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </div>
  );
};

export default Bouquets;
