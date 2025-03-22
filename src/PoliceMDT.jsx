import React from "react";

const PoliceMDT = () => {
  return (
    <div className="bg-black text-white h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center border-b border-gray-500 pb-2">
        <h1 className="text-xl font-bold">🚔 Welcome DSP. Thakur</h1>
        <button className="border border-white px-4 py-1 rounded">Off-Duty</button>
      </div>

      {/* Main Container */}
      <div className="flex h-full mt-2">
        {/* Sidebar - Command & Chatbox */}
        <div className="w-1/3 p-4 border-r border-gray-500">
          <h2 className="text-lg font-semibold">Command</h2>
          <div className="mt-4 bg-gray-800 p-4 h-80 flex items-center justify-center text-gray-400">
            response and question of chatbox
          </div>
          <p className="text-gray-400 mt-2 text-sm">Chat to our dispatch for active situations and more...</p>
        </div>

        {/* Main Hub */}
        <div className="w-2/3 p-4">
          <h2 className="text-lg font-semibold">Hub</h2>
          <div className="mt-4 flex justify-between">
            {/* Available Units */}
            <div className="w-1/2 border border-gray-500 p-2">
              <h3 className="font-semibold">Available Units</h3>
              <ul className="mt-2 text-sm">
                <li>🚔 101 - Inspector Rajeev Singh - 155.250 MHz</li>
                <li>🚔 201 - Sub-Inspector Ananya Sharma - 156.800 MHz</li>
                <li>🚔 301 - ASI Vikram Yadav - 159.450 MHz</li>
                <li>🚔 401 - Head Constable Manish Verma - 160.525 MHz</li>
              </ul>
            </div>
            {/* Situation Alert */}
            <div className="w-1/2 border border-gray-500 p-2">
              <h3 className="font-semibold">Situation: 10-32 (Person with Weapon)</h3>
              <p className="text-sm mt-1">Location: Sector 21, Delhi</p>
              <p className="text-sm">Complainant: Ramesh Kumar - 9876543210</p>
              <button className="border border-white px-4 py-1 mt-2 rounded w-full">Attach</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoliceMDT;
