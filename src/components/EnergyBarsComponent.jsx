import React from 'react';

export default function EnergyBarsComponent({ KE, PE }) {
  const maxEnergy = 500; // scaling reference
  const total = KE + PE;

  const clamp = (value) =>
    Math.min((value / maxEnergy) * 100, 100);

  return (
    <div className="flex flex-col space-y-3 w-72 bg-slate-900 p-4 rounded-lg">
      {/* Potential Energy */}
      <div>
        <div className="flex justify-between text-sm text-yellow-400 mb-1">
          <span>PE</span>
          <span>{PE.toFixed(1)}</span>
        </div>
        <div className="h-3 bg-gray-700 rounded">
          <div
            className="h-3 bg-yellow-400 rounded transition-all"
            style={{ width: `${clamp(PE)}%` }}
          />
        </div>
      </div>

      {/* Kinetic Energy */}
      <div>
        <div className="flex justify-between text-sm text-green-400 mb-1">
          <span>KE</span>
          <span>{KE.toFixed(1)}</span>
        </div>
        <div className="h-3 bg-gray-700 rounded">
          <div
            className="h-3 bg-green-400 rounded transition-all"
            style={{ width: `${clamp(KE)}%` }}
          />
        </div>
      </div>

      {/* Total Energy */}
      <div>
        <div className="flex justify-between text-sm text-cyan-400 mb-1">
          <span>Total</span>
          <span>{total.toFixed(1)}</span>
        </div>
        <div className="h-3 bg-gray-700 rounded">
          <div
            className="h-3 bg-cyan-400 rounded transition-all"
            style={{ width: `${clamp(total)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
