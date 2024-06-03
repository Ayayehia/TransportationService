import Header from "@/app/components/form/Header";
import dynamic from "next/dynamic";
import Questions from "@/app/components/form/Questions";
const LeafletMap = dynamic(() => import("../../components/map/Leaflet"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="xl:px-[200px] p-4 lg:p-0 lg:px-[70px] ">
      <h3 className="lg:pt-12 pt-6 text-[#CDD5DA] uppercase">
        Main<span className="pl-1">/</span>
        <span className="text-[#778892] pl-1"> ContactUS</span>
      </h3>
      <div className="flex w-full items-center justify-center">
        <h3 className="text-4xl uppercase lg:pt-[132px] pt-8">Contact Us</h3>
      </div>
      <div className="w-full flex flex-col justify-center items-center text-center pt-14">
        <Header title="Phone" info="0987654" />
        <Header title="e-Mail" info="info@floridapremiumlimo.com" />
        <Header
          title="address"
          info="17070 COLLINS AVENUE, SUITE 262,SUNNY ISLES BEACH, FL, 33160"
        />

        <LeafletMap />
        <Questions />
      </div>
    </div>
  );
};

export default page;
