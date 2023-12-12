import ReactDOM from "react-dom";
import { useLoadingBar } from "../../store/loadingBar/useLoadingBar";

const portalRoot = document.getElementById("portal-root");

interface LoadingProps {
  title?: string | React.ReactNode;
  textMessage?: string | React.ReactNode;
}

const LoadingBar = ({ title, textMessage }: LoadingProps) => {
  const show = useLoadingBar.use.show();

  if (!show) {
    return null;
  }
  return ReactDOM.createPortal(
    <div className="fixed top-0 z-50 flex h-[100vh] w-[100vw] items-center justify-center bg-black/20 text-sm">
      <div className=" flex flex-col items-center">
        <h1>{title}</h1>
        <p>{textMessage}</p>
        <div className="animate-bounce delay-1000">
          <img
            src="/matoaring.svg"
            alt="matoa-load"
            className="m-5 h-10 w-10 animate-spin"
          />
        </div>
      </div>
    </div>,
    portalRoot!,
  );
};

export default LoadingBar;
