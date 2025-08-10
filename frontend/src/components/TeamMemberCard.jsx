import React from "react";


const TeamMemberCard = ({ member, onClick }) => (
  <button
    className="bg-white rounded shadow p-4 flex flex-col items-center gap-2 cursor-pointer hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
    onClick={onClick}
    aria-label={`View details for ${member.name}`}
    type="button"
  >
    <img
      src={member.image || "/placeholder.svg"}
      alt={member.name}
      className="w-24 h-24 rounded-full object-cover bg-blue-100 mb-2"
    />
    <h3 className="text-lg font-semibold text-center">{member.name}</h3>
    <span className="text-xs text-gray-500 mb-1">{member.role}</span>
    <p className="text-gray-700 text-sm text-center mb-2 line-clamp-2">{member.bio}</p>
    {member.skills && (
      <div className="flex flex-wrap gap-1 justify-center mb-2">
        {member.skills.map((skill) => (
          <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{skill}</span>
        ))}
      </div>
    )}
    <div className="flex gap-2 mt-2">
      {member.email && (
        <span className="text-blue-600 text-xs">Email</span>
      )}
      {member.linkedin && (
        <span className="text-blue-600 text-xs">LinkedIn</span>
      )}
      {member.github && (
        <span className="text-blue-600 text-xs">GitHub</span>
      )}
      {member.portfolio && (
        <span className="text-blue-600 text-xs">Portfolio</span>
      )}
    </div>
  </button>
);

export default TeamMemberCard;
