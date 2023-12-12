import { useEffect, useRef, useState } from "react";
import FormProduct from "../../Components/ProductPage/FormProduct";
import SideBar from "../../Components/SideBar";
import {
  AllProductData,
  Product,
  ProductDetail,
  ProductModel,
} from "../../Interfaces/Product";
import FormModel from "../../Components/ProductPage/FormModel";
import FormDetail from "../../Components/ProductPage/FormDetail";
import { postImage } from "../../utils/postImage";
import { postProductData } from "../../utils/postProductData";
import generateUniqueId from "generate-unique-id";
import { useNavigate } from "react-router-dom";
import LoadingBar from "../../Components/Custom/LoadingBar";
import { useLoadingBar } from "../../store/loadingBar/useLoadingBar";

type Slides = 1 | 2 | 3;
function ProductPage() {
  const navigate = useNavigate();
  const [disSubmit, setDisSubmit] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();
  const [productModel, setProductModel] = useState<ProductModel[]>();
  const [slide, setSlide] = useState<Slides>(1);
  const nextButtonRef = useRef<HTMLSelectElement>(null);
  const nextButtonRef2 = useRef<HTMLButtonElement>(null);
  const showLoading = useLoadingBar.use.showLoading();
  const hideLoading = useLoadingBar.use.hideLoading();

  console.log(product);
  console.log(productModel);

  const saveProductHandler = (product: Product) => {
    setProduct(product);
  };

  const saveProductModelHandler = (productModel: ProductModel[]) => {
    setProductModel(productModel);
  };

  const saveAllProductDataHandler = async (productDetail: ProductDetail) => {
    setDisSubmit(true);
    showLoading();
    const id = generateUniqueId({ length: 6 });
    if (product && productModel) {
      try {
        const fileImageToUrl = await Promise.all(
          productModel.map(async (model) => {
            const photosUrl = await Promise.all(
              (model.photos || []).map(async (photo) => {
                const postImg = await postImage(photo as File);
                console.log(postImg);
                return postImg;
              }),
            );

            console.log(photosUrl);

            return {
              ...model,
              picture: await postImage(model.picture as File),
              photos: photosUrl,
            };
          }),
        );

        const allProductData: AllProductData = {
          ...product,
          model: fileImageToUrl as ProductModel[],
          ...productDetail,
        };

        const posProduct = await postProductData(allProductData, id);
        if (posProduct === 201) {
          navigate("/admin", {
            state: {
              addStatus: "success",
              id,
              productName: allProductData.name,
            },
          });
        }
        console.log(allProductData);
      } catch (error) {
        console.log(error);
        hideLoading();
        setDisSubmit(false);
      }
    }
  };

  const goNext = () => {
    setSlide((slide + 1) as Slides);
  };

  const goBack = () => {
    setSlide((slide - 1) as Slides);
  };

  const trapTabKey = (e: KeyboardEvent) => {
    if (
      e.key === "Tab" &&
      nextButtonRef.current &&
      nextButtonRef.current === document.activeElement
    ) {
      e.preventDefault();
    }
    if (
      e.key === "Tab" &&
      nextButtonRef2.current &&
      nextButtonRef2.current === document.activeElement
    ) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", trapTabKey);

    return () => {
      window.removeEventListener("keydown", trapTabKey);
    };
  }, [slide]);

  return (
    <>
      <LoadingBar />
      <div className="flex overflow-hidden">
        <SideBar />
        <div
          className={`flex transition-transform duration-1000 
        ${slide === 1 && "-translate-x-3/3"} 
        ${slide === 2 && "-translate-x-1/3"}
        ${slide === 3 && "-translate-x-2/3"}
        `}
        >
          <FormProduct
            onSaveProduct={saveProductHandler}
            goNext={goNext}
            nextButtonRef={nextButtonRef}
          />
          <FormModel
            onSaveProductModel={saveProductModelHandler}
            goBack={goBack}
            goNext={goNext}
            nextButtonRef={nextButtonRef2}
            edit={false}
          />
          <FormDetail
            onSaveAllProductData={saveAllProductDataHandler}
            goBack={goBack}
            disSubmit={disSubmit}
            edit={false}
          />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
