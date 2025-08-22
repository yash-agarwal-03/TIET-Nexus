import React, { useEffect, useState } from "react";

import TeamMemberCard from "../components/TeamMemberCard";
import ReactModal from "react-modal";


ReactModal.setAppElement("#root");

function TeamPage() {
  const [members, setMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    fetch("/data/team.json")
      .then((res) => res.json())
      .then(setMembers);
  }, []);

  const supervisors = members.filter((m) => m.type === "supervisor");
  const developers = members.filter((m) => m.type === "developer");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The dedicated individuals behind TIET Nexus - bringing together expertise, creativity, and passion to build the ultimate campus platform
          </p>
        </div>
        <div className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Project Supervisors</h2>
            <p className="text-gray-600">Guiding and mentoring the development process</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {supervisors.map((member) => (
              <TeamMemberCard key={member.id} member={member} onClick={() => setSelectedMember(member)} />
            ))}
          </div>
        </div>
        <div>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Development Team</h2>
            <p className="text-gray-600">Building, designing, and maintaining the platform</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developers.map((member) => (
              <TeamMemberCard key={member.id} member={member} onClick={() => setSelectedMember(member)} />
            ))}
          </div>
        </div>
      </div>

      {/* Modal for member details */}
      <ReactModal
        isOpen={!!selectedMember}
        onRequestClose={() => setSelectedMember(null)}
        className="max-w-lg mx-auto my-20 bg-white rounded-xl shadow-lg p-8 outline-none relative animate-fadeIn"
        overlayClassName="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"
        contentLabel="Team Member Details"
      >
        {selectedMember && (
          <div className="flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => setSelectedMember(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedMember.image || "/placeholder.svg"}
              alt={selectedMember.name}
              className="w-28 h-28 rounded-full object-cover bg-blue-100 mb-4"
            />
            <h3 className="text-2xl font-bold mb-1 text-center">{selectedMember.name}</h3>
            <span className="text-sm text-gray-500 mb-2">{selectedMember.role}</span>
            <p className="text-gray-700 text-base text-center mb-4">{selectedMember.bio}</p>
            {selectedMember.skills && (
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {selectedMember.skills.map((skill) => (
                  <span key={skill} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{skill}</span>
                ))}
              </div>
            )}
            <div className="flex flex-wrap gap-4 mt-2">
              {selectedMember.email && (
                <a href={`mailto:${selectedMember.email}`} className="text-blue-600 hover:underline text-sm">Email</a>
              )}
              {selectedMember.linkedin && (
                <a href={selectedMember.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">LinkedIn</a>
              )}
              {selectedMember.github && (
                <a href={selectedMember.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">GitHub</a>
              )}
              {selectedMember.portfolio && (
                <a href={selectedMember.portfolio} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">Portfolio</a>
              )}
            </div>
          </div>
        )}
      </ReactModal>
    </div>
  );
}

export default TeamPage;
