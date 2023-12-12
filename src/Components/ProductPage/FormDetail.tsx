import { useEffect, useState } from "react";
import TextArea from "../Custom/TextArea";
import { ProductDetail } from "../../Interfaces/Product";
import { CgSpinnerTwoAlt } from "react-icons/cg";

interface ProductAction {
  onSaveAllProductData: (productDetail: ProductDetail) => void;
  goBack: () => void;
  disSubmit: boolean;
  containDetails?: ProductDetail;
  edit?: boolean;
}

const FormDetail = ({
  onSaveAllProductData,
  goBack,
  disSubmit,
  containDetails,
  edit,
}: ProductAction) => {
  const [inMaterial, setInMaterial] = useState<string>(
    containDetails ? containDetails.material : "",
  );
  const [inCase, setInCase] = useState<string>(
    containDetails ? containDetails.caseDetail : "",
  );
  const [inMovement, setInMovement] = useState<string>(
    containDetails ? containDetails.movement : "",
  );
  const [inDial, setInDial] = useState<string>(
    containDetails ? containDetails.dial : "",
  );
  const [inHand, setInHand] = useState<string>(
    containDetails ? containDetails.hand : "",
  );
  const [inNote, setInNote] = useState<string>(
    containDetails ? containDetails.importantNote : "",
  );
  const [disableNext, setDisableNext] = useState(true);

  console.log(containDetails);

  useEffect(() => {
    if (inMaterial && inCase && inMovement && inDial && inHand && inNote) {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
  }, [inMaterial, inCase, inMovement, inDial, inHand, inNote]);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const productDetails: ProductDetail = {
      material: inMaterial,
      caseDetail: inCase,
      movement: inMovement,
      dial: inDial,
      hand: inHand,
      importantNote: inNote,
    };
    onSaveAllProductData(productDetails);
    // goNext();
  };

  const onMaterialChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInMaterial(event.target.value);
  };
  const onCaseChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInCase(event.target.value);
  };
  const onMovementChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInMovement(event.target.value);
  };
  const onDialChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInDial(event.target.value);
  };
  const onHandChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInHand(event.target.value);
  };
  const onNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInNote(event.target.value);
  };

  return (
    <div className={`ml-[22vw] h-[100vh] w-[78vw] overflow-auto p-[85px]`}>
      <h1 className="text-[24px] font-semibold">
        {edit ? "EDIT" : "ADD"} NEW PRODUCT 3/3
      </h1>
      <h2 className="mt-[18px] text-[20px] font-semibold">DETAIL</h2>
      <form
        className="relative flex h-fit flex-col gap-5 border-2 p-4 shadow-lg"
        onSubmit={onSubmitHandler}
      >
        <TextArea
          name="material"
          label="Material"
          value={inMaterial}
          onChange={onMaterialChange}
          placeholder="ex: kayu jati mod"
          required
        />
        <TextArea
          name="case"
          label="Case"
          value={inCase}
          onChange={onCaseChange}
          placeholder="ex: kayu jati mod"
          required
        />
        <TextArea
          name="movement"
          label="Movement"
          value={inMovement}
          onChange={onMovementChange}
          placeholder="ex: kayu jati mod"
          required
        />
        <TextArea
          name="dial"
          label="Dial"
          value={inDial}
          onChange={onDialChange}
          placeholder="ex: kayu jati mod"
          required
        />
        <TextArea
          name="hand"
          label="Hand"
          value={inHand}
          onChange={onHandChange}
          placeholder="ex: kayu jati mod"
          required
        />
        <TextArea
          name="importantNote"
          label="Important Note"
          value={inNote}
          onChange={onNoteChange}
          placeholder="ex: kayu jati mod"
          required
        />
        {disSubmit ? (
          <div className="flex flex-row-reverse items-center gap-5">
            <CgSpinnerTwoAlt className="h-8 w-8 animate-spin" />
          </div>
        ) : (
          <div className="flex flex-row-reverse items-center gap-5">
            <button
              disabled={disableNext}
              type="submit"
              className="w-fit bg-primary px-[28px] py-[12px] text-[15px] text-white disabled:bg-black"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={goBack}
              className="w-fit bg-primary px-[28px] py-[12px] text-[15px] text-white"
            >
              Prev
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default FormDetail;
