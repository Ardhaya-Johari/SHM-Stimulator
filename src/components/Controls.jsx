import React from 'react';

export default function Controls({
  m,
  setM,
  k,
  setK,
  L,
  setL,
  playing,
  setPlaying,
  isPendulum,
  setPendulum,
}) {
  return (
    <div className="bg-slate-800 p-5 rounded-xl space-y-5 text-white shadow-lg">
      
      {/* MASS */}
      <div>
        <label className="block text-green-400 mb-1">
          Mass (kg): <span className="text-white">{m}</span>
        </label>
        <input
          type="range"
          min="1"
          max="10"
          value={m}
          onChange={(e) => setM(Number(e.target.value))}
          className="w-full"
          disabled={playing}
        />
      </div>

      {/* SPRING CONSTANT */}
      <div>
        <label className="block text-green-400 mb-1">
          Spring Constant (k): <span className="text-white">{k}</span>
        </label>
        <input
          type="range"
          min="5"
          max="50"
          value={k}
          onChange={(e) => setK(Number(e.target.value))}
          className="w-full"
          disabled={playing}
        />
      </div>

      {/* PENDULUM LENGTH */}
      <div>
        <label className="block text-green-400 mb-1">
          Pendulum Length (L): <span className="text-white">{L}</span>
        </label>
        <input
          type="range"
          min="50"
          max="300"
          value={L}
          onChange={(e) => setL(Number(e.target.value))}
          className="w-full"
          disabled={!isPendulum || playing}
        />
      </div>

      {/* BUTTONS */}
      <div className="flex gap-4 pt-2">
        <button
          onClick={() => setPlaying((p) => !p)}
          className={`px-5 py-2 rounded-lg font-semibold transition ${
            playing
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-purple-500 hover:bg-purple-600'
          }`}
        >
          {playing ? 'Pause' : 'Play'}
        </button>

        <button
          onClick={() => {
            setPlaying(false); // ⚠️ animation reset
            setPendulum((p) => !p);
          }}
          className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold transition"
        >
          {isPendulum ? 'Switch to Spring' : 'Switch to Pendulum'}
        </button>
      </div>
    </div>
  );
}
