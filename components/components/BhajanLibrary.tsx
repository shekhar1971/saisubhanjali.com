'use client';
import { useState } from "react";
import CD1Display from "./CD1Display";
import CD2Display from "./CD2Display";
// import CD3Display ... CD6Display (after you create them)

const CD_TABS = [
  { id: 1, label: "CD 1", component: <CD1Display /> },
  { id: 2, label: "CD 2", component: <CD2Display /> },
  // { id: 3, label: "CD 3", component: <CD3Display /> },
  // { id: 4, label: "CD 4", component: <CD4Display /> },
  // { id: 5, label: "CD 5", component: <CD5Display /> },
  // { id: 6, label: "CD 6", component: <CD6Display /> },
];

export default function BhajanLibrary() {
  const [activeTab, setActiveTab] = useState(1);

  const CurrentCD = CD_TABS.find((cd) => cd.id === activeTab)?.component;

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto p-6">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0 md:pr-6">
        <div className="bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold p-4 border-b">Sai Subhanjali CDs</h3>
          <ul className="divide-y">
            {CD_TABS.map((cd) => (
              <li
                key={cd.id}
                onClick={() => setActiveTab(cd.id)}
                className={`cursor-pointer p-4 hover:bg-indigo-50 ${
                  activeTab === cd.id ? "bg-indigo-100 font-semibold" : ""
                }`}
              >
                {cd.label}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Display */}
      <div className="w-full md:w-3/4">{CurrentCD}</div>
    </div>
  );
}
