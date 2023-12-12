import React from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  show: boolean;
  title?: string | React.ReactNode;
  textMessage?: string | React.ReactNode;
  confirm?: boolean;
  decline?: boolean;
  animatePop?: boolean;
  confirmAct?: () => void;
  declineAct?: () => void;
  closeModal: (isShow: boolean) => void;
}

const portalRoot = document.getElementById("portal-root");

const Modal = ({
  show,
  title,
  closeModal,
  textMessage,
  confirm,
  decline,
  animatePop,
  confirmAct,
  declineAct,
}: ModalProps) => {
  const handleConfirm = () => {
    if (confirmAct !== undefined) {
      confirmAct();
      closeModal(false);
    } else {
      closeModal(false);
    }
  };
  const handleDecline = () => {
    if (declineAct !== undefined) {
      declineAct();
      closeModal(false);
    } else {
      closeModal(false);
    }
  };

  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="fixed top-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-black/20 text-sm">
      <div
        className={`${
          animatePop && "animate-default_quantum_bouncing_fast"
        } max-w-[80vw] rounded-xl border-2 bg-white p-3 shadow-sm`}
      >
        <div className="flex items-center justify-between border-b-[1px] pb-3">
          <p className="font-bold">{title}</p>
          <button
            className="group/close h-4 w-4 rounded-full border-[1px] border-red-500 shadow-sm"
            onClick={() => closeModal(false)}
          >
            <div className="h-full w-full scale-50 rounded-full bg-red-500 transition-transform group-hover/close:scale-100 group-hover/close:animate-pulse group-hover/close:transition-transform"></div>
          </button>
        </div>
        <div className="py-3">{textMessage}</div>
        <div className="flex justify-end gap-3">
          {decline && (
            <button
              onClick={handleDecline}
              className="rounded-lg bg-red-500 px-3 py-2 text-white hover:animate-pulse"
            >
              Decline
            </button>
          )}
          {confirm && (
            <button
              onClick={handleConfirm}
              className="rounded-lg bg-green-500 px-3 py-2 text-white transition hover:animate-pulse hover:transition"
            >
              Confirm
            </button>
          )}
        </div>
      </div>
    </div>,
    portalRoot!,
  );
};

export default Modal;
