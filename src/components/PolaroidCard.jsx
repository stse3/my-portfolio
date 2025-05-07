import PolaroidFrame from '../assets/polaroid.png';

export default function PolaroidCard({ image, title, company, date, tools }) {
  return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img 
            src={image} 
            alt={typeof title === 'string' ? title : 'Project'} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <div className="font-medium text-lg mb-2">
            {title}
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-sm text-gray-600">{company}</p>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
          <div className="mt-4">
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded-full"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );

}