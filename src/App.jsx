import React, { useState } from 'react';
import Controls from './components/Controls';
import SHMCanvas from './components/SHMCanvas';
import PendulumCanvas from './components/PendulumCanvas';
import Graph from './components/Graph';
import EnergyBarsComponent from './components/EnergyBarsComponent';

export default function App() {
  const [m, setM] = useState(2);
  const [k, setK] = useState(20);
  const [L, setL] = useState(150);

  const [playing, setPlaying] = useState(false);
  const [isPendulum, setPendulum] = useState(false);

  const [energy, setEnergy] = useState({ KE: 0, PE: 0 });

  const A = 100; // amplitude (spring)

  return (
    <div className="min-h-screen bg-slate-900 p-6 text-white">
      <h1 className="text-3xl font-bold text-cyan-400 mb-6">
        🎵 SHM Simulator – Learn Physics the Fun Way
      </h1>

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* CONTROLS */}
        <Controls
          m={m}
          setM={setM}
          k={k}
          setK={setK}
          L={L}
          setL={setL}
          playing={playing}
          setPlaying={setPlaying}
          isPendulum={isPendulum}
          setPendulum={setPendulum}
        />

        {/* CANVAS + ENERGY */}
        <div className="bg-slate-800 p-4 rounded-xl">
          {isPendulum ? (
            <PendulumCanvas L={L} playing={playing} />
          ) : (
            <SHMCanvas
              m={m}
              k={k}
              playing={playing}
              setEnergy={setEnergy}
            />
          )}

          {/* ENERGY BARS */}
          {!isPendulum && (
            <div className="mt-4">
              <EnergyBarsComponent KE={energy.KE} PE={energy.PE} />
            </div>
          )}
        </div>
      </div>

      {/* GRAPH SECTION */}
      <div className="mt-8">
        <Graph
          m={m}
          k={k}
          A={A}
          L={L}
          isPendulum={isPendulum}
          playing={playing}
        />
      </div>
    </div>
  );
}
