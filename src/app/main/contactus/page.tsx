import Header from "@/app/components/form/Header";
import dynamic from "next/dynamic";
import Questions from "@/app/components/form/Questions";
const LeafletMap = dynamic(() => import("../../components/map/Leaflet"), {
  ssr: false,
});

const page = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <Header title="Phone" info="0987654" />
      <Header title="e-Mail" info="info@floridapremiumlimo.com" />
      <Header
        title="address"
        info="17070 COLLINS AVENUE, SUITE 262,SUNNY ISLES BEACH, FL, 33160"
      />

      <LeafletMap />
      <Questions />
    </div>
  );
};

export default page;
