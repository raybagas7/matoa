import { useNavigate } from "react-router-dom";

function AdminEditRestrict() {
  const navigate = useNavigate();

  return (
    <div className="flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      <h1 className="text-[40px] text-primary">
        You Can't Access This Page Directly
      </h1>
      <button
        onClick={() => navigate("/admin")}
        className="rounded-full bg-primary p-5 text-xl text-white transition-colors hover:bg-slate-800 hover:transition-colors"
      >
        Go To List Product
      </button>
    </div>
  );
}

export default AdminEditRestrict;
