import Image from "next/image";

import img1 from "src/assets/img1.png";

function ImageExamp() {
  return (
    <Image src={img1} width={110} height={20} alt="img1" />
  )
}

export default ImageExamp;
