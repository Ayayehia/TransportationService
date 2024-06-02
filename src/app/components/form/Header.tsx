const Header = ({ title, info }: { title: string; info: string }) => {
  return (
    <div className="flex flex-col  justify-center items-center gap-3 mt-4 p-2 lg:p-0 w-full px-36">
      <div className="uppercase lg:w-[900px] w-[250px]">
        <h3>{title}</h3>
        <p className="text-[#778892] lg:text-4xl">{info}</p>
        <div className="border-b-[#778892] border-b-2 mt-12  text-center" />
      </div>
    </div>
  );
};

export default Header;
