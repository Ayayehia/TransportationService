const Card = ({
  type,
  model,
  passengers,
  suitcases,
}: {
  type: string;
  model: string;
  passengers: string;
  suitcases: string;
}) => {
  return (
    <div className="rounded-lg border-[#E6EBEE] border-2 uppercase ">
      <div className="flex flex-col justify-center items-center w-full pt-9">
        <p className="text-[#B4C6D0] text-lg">{type}</p>
        <h2 className="text-lg text-[#778892] font-semibold ">{model}</h2>
        <div className="border-b-[#E7C13C] border-b-4  " />
        <img src="/car_cadillac_escalade-328x194.jpg.png" className="w-full" />
        <p className="text-lg">
          Passengers:
          <span className="font-medium text-2xl">{passengers}</span>
        </p>
        <p className="text-lg pb-9">
          Suitcases:<span className="font-medium text-2xl">{suitcases}</span>
        </p>
        <button className="py-8 w-full bg-[#E6EBEE] text-[#778892] font-medium text-sm uppercase">
          Reserve Now
        </button>
      </div>
    </div>
  );
};

export default Card;
