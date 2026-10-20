import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-row justify-center gap-20 items-center h-full px-20">
      <div className="w-1/4 flex justify-end">
        <div className="border-4 border-white rounded-full overflow-hidden w-48 h-48 relative flex-shrink-0">
          <Image
            src="/images/bk.jpg"
            alt="Image background"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
      <div className="w-3/4 text-white">
        <h1 className="text-2xl font-bold capitalize">i am Azzam smith</h1>
        <p className="text-lg font-semibold text-gray-200 capitalize">frontend developer</p>
        <p className="mt-2 text-sm leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. 
        </p>
      </div>
    </div>
  );
}