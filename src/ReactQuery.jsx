import { useQuery } from "react-query";
import axios from "axios";

export const ReactQuery = () => {
  const { isLoading, data, isError, error } = useQuery("get-product", () => {
    return axios.get(
      "https://mypocketbase.fly.dev/api/collections/products/records"
    );
  });

  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error.message}</>;

  return (
    <>
      <div className="text-4xl">ReactQuery</div>

      <ul className="list-disc p-4">
        {data &&
          data.data?.items?.map((product) => (
            <li key={product.id}>
              {product.name} / {product.price}
            </li>
          ))}
      </ul>
    </>
  );
};
