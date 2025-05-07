// Trinket.jsx
export default function Trinket({ image, description, onClick }) {
  const trinketData = { image, description, name }; // Problem is here - 'name' isn't defined
  
  return (
    <div
      className="cursor-pointer transform transition hover:scale-105"
      onClick={() => onClick(trinketData)}
    >
      <img
         src={image}
         alt={description || "Trinket"}
         className="w-48 h-48 rounded-sm"/>
    </div>
  );
}