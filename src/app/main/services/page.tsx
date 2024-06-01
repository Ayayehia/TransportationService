import Card from "@/app/components/layout/services/Card";
const page = () => {
  const services = [
    { title: "Airport Limo Service", step: 1, image: "/Airportservice.png" },
    {
      title: "Private Transportation",
      step: 2,
      image: "/Privatetransportation.png",
    },
    {
      title: "Corporate Transportation Service",
      step: 3,
      image: "/Corporatetransportaion.png",
    },
    {
      title: "Hourly and Daily Service",
      step: 4,
      image: "/Hourly&dailyservice.png",
    },
    {
      title: "Long Distance Service",
      step: 5,
      image: "/Longdistanceservice.png",
    },
    { title: "14 Passengers Van Service", step: 6, image: "/Passengervan.png" },
    {
      title: "Female Drive Service",
      step: 7,
      image: "/Femaledriver.png",
    },
    {
      title: "Orlando - Miami Limo Service",
      step: 8,
      image: "/Orlando.png",
    },
    {
      title: "Miami - Key West Transportation Service",
      step: 9,
      image: "/Miami.png",
    },
  ];
  return (
    <div className="xl:px-[200px] p-4 lg:p-0 lg:px-[70px] ">
      <h3 className="lg:pt-12 pt-6 text-[#CDD5DA] uppercase">
        Main<span className="pl-1">/</span>
        <span className="text-[#778892] pl-1"> Services</span>
      </h3>
      <div className="flex w-full items-center justify-center">
        <h3 className="text-4xl uppercase lg:pt-[132px] pt-8">Services</h3>
      </div>
      <div className="flex flex-col gap-5  p-2 justify-center items-center pt-8">
        {services.map((items) => {
          return (
            <Card title={items.title} image={items.image} step={items.step} />
          );
        })}
      </div>
    </div>
  );
};

export default page;
