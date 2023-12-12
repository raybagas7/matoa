import "./footer.css";
import MatoaLogo from "../SVG/MatoaLogo";
import SupportLogo from "./SupportLogo";
import MatoaHeader from "../Custom/MatoaHeader/MatoaHeader";
import Contact from "./Contact";
import UsefulLink from "./UsefulLink";
import CampaignLink from "./CampaignLink";

function Footer() {
  return (
    <div className="mt-10 flex flex-col items-center bg-primary">
      <SupportLogo />
      <div className="mt-[3rem] grid w-[80vw] grid-cols-4 gap-[3.75rem] py-10 text-white">
        <div className="flex flex-col gap-7">
          <MatoaLogo className="w-[11rem] fill-white" />
          <div>
            <h3 className="text-[1.25rem] font-[500]">Address</h3>
            <p className="text-sm">
              Store & Office Jl. Setrasari Kulon III, No. 10-12, Sukarasa,
              Sukasari, Bandung, Jawa Barat, Indonesia 40152
            </p>
          </div>
          <div>
            <h3 className="text-[1.25rem] font-[500]">Office Hour</h3>
            <p>Monday - Sunday</p>
            <p>10.00 - 18.00</p>
          </div>
        </div>
        <div className="space-y-4">
          <MatoaHeader textColor="white" small title="Get in touch" />
          <Contact />
        </div>
        <div className="space-y-4">
          <MatoaHeader textColor="white" small title="Useful Link" />
          <UsefulLink />
        </div>
        <div className="space-y-4">
          <MatoaHeader textColor="white" small title="Campaign" />
          <CampaignLink />
        </div>
      </div>
    </div>
  );
}

export default Footer;
