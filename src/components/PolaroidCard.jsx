export default function PolaroidCard({ image, title, company, date, aspect = "aspect-[4/3]" }) {
  return (
    <div className="flex flex-col gap-2">
      <div className={`relative w-full ${aspect} border border-black/10 overflow-hidden`}>
        <img
          src={image}
          alt={typeof title === 'string' ? title : 'Project'}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 ease-in-out group-hover:bg-black/20" />
      </div>
      <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-0.5">
        <h3 className="text-[17px] font-medium text-black">{title}</h3>
        <p className="text-[14px] text-gray-500 whitespace-nowrap">{company} · {date}</p>
      </div>
    </div>
  );
}
