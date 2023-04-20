import products from "@/lists/products";

const Products = () => {
  return (
    <div className="container mx-auto" >
            <h1 className="text-3xl font-bold p-10">Todos los productos</h1>
            <div class="flex flex-wrap">
      {products.map((product) => {
        return (
          <div key={product.id} className="card w-96 bg-base-100 max-h-[40rem] grow m-4 shadow-xl">
            <figure>
              <img
                src={`/products/${product.id}.jpg`}
                alt={product.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {product.name}
                <div className="badge badge-secondary">{product.status}</div>
              </h2>
              <p>{product.description}</p>
              <div className="card-actions justify-end">
                {product.properties.map((property) => {
                  return (
                    <div key={property} className="badge badge-outline">
                      {property}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
            </div>

    </div>
  );
};

export default Products;
