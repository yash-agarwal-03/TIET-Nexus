

const SocietyCard = ({ society, onClick }) => (
  <div
    className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-2 cursor-pointer border border-[#eb4034]/30 hover:shadow-lg hover:border-[#eb4034] transition-all duration-200"
    onClick={onClick}
    tabIndex={0}
    aria-label={`View details for ${society.name}`}
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="w-12 h-12 bg-[#eb4034]/10 rounded-full flex items-center justify-center text-2xl font-bold text-[#eb4034] border border-[#eb4034]/30">
        {society.name[0]}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-[#eb4034] leading-tight line-clamp-1">{society.name}</h3>
        <span className="text-xs font-medium text-[#eb4034] bg-[#eb4034]/10 px-2 py-0.5 rounded">{society.category}</span>
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-2 line-clamp-2">{society.shortDescription}</p>
    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mb-1">
      <span>Members: <span className="font-semibold text-[#eb4034]">{society.memberCount}</span></span>
      <span>Est. <span className="font-semibold text-[#eb4034]">{society.establishedYear}</span></span>
    </div>
    <div className="flex flex-wrap gap-1 mt-1">
      {society.executiveMembers?.slice(0, 3).map((m) => (
        <span key={m.email} className="bg-[#eb4034]/10 text-[#eb4034] px-2 py-0.5 rounded text-xs font-medium">{m.name.split(' ')[0]}</span>
      ))}
      {society.executiveMembers?.length > 3 && (
        <span className="bg-gray-100 text-gray-600 px-2 py-0.5 rounded text-xs font-medium">+{society.executiveMembers.length - 3}</span>
      )}
    </div>
    <span className="text-[#eb4034] hover:underline text-xs mt-2 font-semibold">View Details</span>
  </div>
);

export default SocietyCard;
