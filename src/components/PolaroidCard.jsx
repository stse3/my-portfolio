import PolaroidFrame from '../assets/polaroid.png';

export default function PolaroidCard({ image, title, company, date, tools }) {
  return (
    <div className="relative w-80 transition-all duration-300  hover:scale-105 cursor-pointer group">
      {/* Polaroid Frame */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <img
          src={PolaroidFrame}
          alt="Polaroid frame"
          className="w-88 h-88 object-cover"
        />
      </div>
      
      {/* Project Image (positioned to align inside the frame) - KEEPING ORIGINAL POSITIONING */}
      <div className="absolute top-20 left-[62px] bottom-16 w-48 h-64 overflow-hidden rounded-md">
        {image ? (
            <img
            src={image}
            alt={title || "Project image"}
            className="w-72 h-60 object-cover"
            />
        ) : (
            <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400">No Image</span>
            </div>
        )}
        </div>

      {/* Project Information underneath the polaroid */}
      <div className=" mt-[350px] ml-16 text-left">
        <h3 className="font-semibold font-sans text-md">{title}</h3>
        <div className="flex items-center text-gray-700 mt-1 text-sm">
          <span className=" text-sm">{company}</span>
          <span className="mx-2">•</span>
          <span>{date}</span>
        </div>
        {tools && (
          <div className="flex flex-wrap gap-2 mt-2 text-xs">
            {Array.isArray(tools) ? (
              tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="bg-gray-50 text-gray-700 text-[10px] px-1 py-1 rounded"
                >
                  {tool}
                </span>
              ))
            ) : (
              <span className="text-gray-600">{tools}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}