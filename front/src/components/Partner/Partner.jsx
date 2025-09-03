import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="cta-block relative lg:h-[120px] h-[180px]">
      <div className="bg-cta w-full h-full absolute top-0 left-0 z-[-1]">
        <Image
          src="/images/cta/bg-cta1.png"
          alt="Background"
          width={5000}
          height={5000}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Partner;
