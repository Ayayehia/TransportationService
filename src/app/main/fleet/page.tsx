import Card from "@/app/components/products/Card";
const page = () => {
  const cars = [
    {
      id: 1,
      type: "Premium SUV",
      model: "Cadillac Escalade ESV",
      passengers: "6",
      suitcases: "6",
      image: "/car_cadillac_escalade-328x194.jpg.png",
    },
    {
      id: 2,
      type: "Executive SUV",
      model: "Mercedes GLS",
      passengers: "6",
      suitcases: "6",
      image: "/car_mersedes_gls.png.png",
    },
    {
      id: 3,
      type: "Premium Sedan",
      model: "Cadillac CT6 or Similar",
      passengers: "1-3",
      suitcases: "2",
      image: "/car_cadillac_ct6-328x158.jpg.png",
    },
    {
      id: 4,
      type: "Executive Sedan",
      model: "BMW X1",
      passengers: "1-3",
      suitcases: "4",
      image: "/bmw_x1-328x198.jpg.png",
    },
    {
      id: 5,
      type: "Limousine Van",
      model: "Mercedes Sprinter or Similar",
      passengers: "11-14",
      suitcases: "8",
      image: "/car_mercedes_sprinter-328x202.jpg.png",
    },
    {
      id: 6,
      type: "Executive Van",
      model: "Ford Transit Van",
      passengers: "7-14",
      suitcases: "14",
      image: "/car_cadillac_escalade-328x194.jpg.png",
    },
    {
      id: 7,
      type: "Specialty Limousine",
      model: "Cadillac Limousine or Similar",
      passengers: "Up to 15",
      suitcases: "—",
      image: "/SPECIALTY_LIMO-328x164.jpg.png",
    },
    {
      id: 8,
      type: "Stretch Limo",
      model: "MKT Limousine or Similar",
      passengers: "6-10",
      suitcases: "—",
      image: "/flt1-328x181.jpg.png",
    },
    {
      id: 9,
      type: "Minibus",
      model: "Freightliner Minibus",
      passengers: "24-38",
      suitcases: "25+",
      image: "/freightliner.png",
    },
    {
      id: 10,
      type: "Party Bus",
      model: "Party Bus",
      passengers: "30",
      suitcases: "—",
      image: "/party_bus.jpg.png",
    },
    {
      id: 11,
      type: "Executive Motor Coach",
      model: "Motorcoach",
      passengers: "57",
      suitcases: "57+",
      image: "/MOTORCOACH-328x203.png.png",
    },
  ];

  return (
    <div className="xl:px-[200px] p-4 lg:p-0 lg:px-[100px] ">
      <h3 className="lg:pt-12 pt-6 text-[#CDD5DA] uppercase">
        Main<span className="pl-1">/</span>
        <span className="text-[#778892] pl-1"> Fleet</span>
      </h3>
      <div className="flex w-full items-center justify-center">
        <h3 className="text-4xl uppercase lg:pt-[132px] pt-8">Fleet</h3>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-9  gap-y-5 gap-x-3">
        {cars.map((items) => {
          return (
            <div key={items.id}>
              <Card
                key={items.id}
                type={items.type}
                model={items.model}
                passengers={items.passengers}
                suitcases={items.suitcases}
                image={items.image}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default page;
