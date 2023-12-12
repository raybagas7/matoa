interface IProductDetailDesc {
  description: string;
}

function ProductDetailDesc({ description }: IProductDetailDesc) {
  return (
    <div className="mx-[3.125rem] rounded-lg border-2 border-primary bg-primary/20 p-3 shadow-md">
      <div className="rounded-lg bg-white/50 p-2 shadow-md">
        <p className="text-base text-[#555555]">{description}</p>
      </div>
    </div>
  );
}

export default ProductDetailDesc;
