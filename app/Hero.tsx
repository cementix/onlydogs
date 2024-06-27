import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex w-full h-screen">
      <div className="relative z-10 flex flex-1 justify-center items-center bg-[#f0e000a6] overflow-hidden">
        <Image
          src="/images/of-logo.svg"
          alt="OnlyDogs logo"
          width={100}
          height={100}
          className="-bottom-52 -left-1/4 absolute opacity-15 lg:scale-150 xl:scale-105 pointer-events-none select-none scale[2]"
        />
        <div className="flex flex-col gap-2 xl:ml-40 px-4 font-semibold text-center md:text-start">
          {/* <Image src={} /> */}
        </div>
      </div>
      <div className="flex-1"></div>
    </div>
  );
};

export default Hero;
