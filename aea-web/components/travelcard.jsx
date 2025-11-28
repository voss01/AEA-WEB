export default function TravelCard({ title, image }) {
  return (
    <div className="relative flex-1 h-80 rounded-xl shadow-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50 flex items-end p-4">
        <h3 className="text-white text-2xl font-bold truncate">{title}</h3>
      </div>
    </div>
  );
}

