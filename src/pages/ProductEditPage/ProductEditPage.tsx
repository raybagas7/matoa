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
import { useLocation, useNavigate, useParams } from "react-router-dom";
import AdminEditRestrict from "../../Redirect/AdminEditRestrict";
import { editProductById } from "../../utils/editProductById";

type Slides = 1 | 2 | 3;
function ProductEditPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [disSubmit, setDisSubmit] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();
  const [productModel, setProductModel] = useState<ProductModel[]>();
  const [productDetail, setProductDetail] = useState<ProductDetail>();
  const [slide, setSlide] = useState<Slides>(1);
  const [isDirect, setIsDirect] = useState<boolean>(true);
  const [initialize, setInitialize] = useState<boolean>(true);
  const nextButtonRef = useRef<HTMLSelectElement>(null);
  const nextButtonRef2 = useRef<HTMLButtonElement>(null);
  const locationProductData = useLocation();
  const doneFetching = useRef(false);

  const onContainProduct = (data: AllProductData) => {
    setProduct({
      id: data.id,
      name: data.name,
      price: data.price,
      discount: data.discount,
      weight: data.weight,
      length: data.length,
      width: data.width,
      category: data.category,
    });

    setProductModel([...data.model]);

    setProductDetail({
      material: data.material,
      caseDetail: data.caseDetail,
      movement: data.movement,
      dial: data.dial,
      hand: data.hand,
      importantNote: data.importantNote,
    });
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

    if (!doneFetching.current && locationProductData.state !== null) {
      const data = locationProductData.state.productData as AllProductData;
      onContainProduct(data);
      doneFetching.current = true;
      setIsDirect(false);
    }
    setInitialize(false);

    return () => {
      window.removeEventListener("keydown", trapTabKey);
    };
  }, [locationProductData.state]);

  if (initialize) {
    return null;
  }

  const saveProductHandler = (product: Product) => {
    setProduct(product);
  };

  const saveProductModelHandler = (productModel: ProductModel[]) => {
    setProductModel(productModel);
  };

  const saveAllProductDataHandler = async (productDetail: ProductDetail) => {
    setDisSubmit(true);
    if (product && productModel) {
      try {
        const fileImageToUrl = await Promise.all(
          productModel.map(async (model) => {
            const photosUrl = await Promise.all(
              (model.photos || []).map(async (photo) => {
                const postImg =
                  photo instanceof File
                    ? await postImage(photo as File)
                    : (photo as string);
                console.log("photo", postImg);
                return postImg;
              }),
            );

            console.log("ALL PHOTOS", photosUrl);

            return {
              ...model,
              picture:
                model.picture instanceof File
                  ? await postImage(model.picture as File)
                  : (model.picture as string),
              photos: photosUrl,
            };
          }),
        );

        const allProductData: AllProductData = {
          ...product,
          model: fileImageToUrl as ProductModel[],
          ...productDetail,
        };
        console.log(allProductData);
        const updatedProductStatus = await editProductById(
          allProductData,
          id as string,
        );
        console.log(updatedProductStatus);

        if (updatedProductStatus === 200) {
          navigate("/admin", {
            state: {
              addStatus: "success",
              id,
              productName: allProductData.name,
            },
          });
        }
      } catch (error) {
        console.log(error);
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

  if (isDirect) {
    return <AdminEditRestrict />;
  }
  return (
    // overflow-hidden
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
          containData={product}
        />
        <FormModel
          onSaveProductModel={saveProductModelHandler}
          goBack={goBack}
          goNext={goNext}
          nextButtonRef={nextButtonRef2}
          containModels={productModel}
          edit={true}
        />
        <FormDetail
          onSaveAllProductData={saveAllProductDataHandler}
          goBack={goBack}
          disSubmit={disSubmit}
          containDetails={productDetail}
          edit={true}
        />
      </div>
    </div>
  );
}

export default ProductEditPage;
