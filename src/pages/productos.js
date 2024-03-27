import MainLayout from "@/layouts/MainLayout";
import ProductsComponent from "@/components/Products/Products";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductsPage } from "@/services/products";
import Skeleton from "@/components/General/Skeleton";

const Productos = () => {

  const { data, status, error, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: ["products"],
    queryFn: getProductsPage,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  return (
    <MainLayout>
      {status === "pending" && <Skeleton/>}
      {status === "success" && <ProductsComponent
        data={data}
        error={error}
        status={status}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />}
    </MainLayout>
  );
};

export default Productos;
