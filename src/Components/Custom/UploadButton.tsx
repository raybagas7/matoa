import { SlCloudUpload } from "react-icons/sl";

const UploadButton = () => {
  return (
    <div className="w-fit cursor-pointer bg-primary px-[20px] py-[10px]">
      <SlCloudUpload className="h-[24px] w-[24px] text-white" />
    </div>
  );
};

export default UploadButton;
