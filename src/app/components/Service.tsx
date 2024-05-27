const Service = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-32 text-2xl font-medium">
      <h2 className="text-4xl text-[#323232] font-bold ">Our Services</h2>
      <div className="lg:flex lg:gap-32 ">
        <ul className="border-l-4 border-l-[#778892] text-[#778892] mt-20 h-fit">
          <div className="ml-5 flex flex-col gap-14  ">
            <li>Airport limo service</li>
            <li>Private transportation</li>
            <li>Corporate transportation service</li>
          </div>
        </ul>

        <ul className="border-l-4 border-l-[#778892] text-[#778892] mt-40 h-fit hidden lg:block">
          <div className="ml-5 flex flex-col gap-14">
            <li>Hourly and daily service</li>
            <li>Long distance service e</li>
            <li>14 passengers van servic</li>
          </div>
        </ul>

        <ul className="border-l-4 border-l-[#778892] text-[#778892] mt-56 h-fit hidden lg:block">
          <div className="ml-5 flex flex-col gap-14">
            <li>Female drive service</li>
            <li>Orlando — Miami limo service</li>
            <li>Miami — Key West Transportation Service</li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Service;
