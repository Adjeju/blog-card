import Image from "next/image";
import imageSrc from "../assets/image.jpg";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex justify-center items-center mt-[120px]">
      <div className="w-[340px] h-[504px] rounded-lg shadow bg-white">
        <Image
          src={imageSrc}
          alt="image"
          className="h-[288px] rounded-t-lg w-full object-cover"
        />
        <div className="py-6 px-4">
          <div className="py-0.5 mb-2 px-2 w-max bg-green-50 border-green-200 border text-green-700 rounded-full text-sm">
            Interior
          </div>
          <h1 className="text-lg font-semibold mb-3">
            Top 5 Living Room Inspirations
          </h1>
          <p className="text-base text-gray-500 mb-6 font-medium">
            Curated vibrants colors for your living, make it pop & calm in the
            same time.
          </p>
          <div className="flex items-center gap-2 text-indigo-700">
            <span className="font-medium text-base">Read more</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
    </div>
  );
}
