"use client";

import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, MeshWobbleMaterial, ContactShadows } from "@react-three/drei";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, Cpu, Gauge, Sparkles, RefreshCw, Dumbbell } from "lucide-react";

function HighEndGym3DModel() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.5}>
      <group position={[0, 0, 0]}>
        {/* Main Barbell Shaft */}
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.08, 0.08, 4.5, 32]} />
          <meshStandardMaterial color="#E5E5E5" metalness={0.95} roughness={0.1} />
        </mesh>

        {/* Outer Heavy Bumper Weight Plates (Left Side) */}
        <mesh position={[-1.4, 1.4, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[1.2, 1.2, 0.25, 64]} />
          <meshStandardMaterial color="#141417" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[-1.2, 1.2, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[1.0, 1.0, 0.2, 64]} />
          <meshStandardMaterial color="#F7A600" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Outer Heavy Bumper Weight Plates (Right Side) */}
        <mesh position={[1.4, -1.4, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[1.2, 1.2, 0.25, 64]} />
          <meshStandardMaterial color="#141417" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[1.2, -1.2, 0]} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[1.0, 1.0, 0.2, 64]} />
          <meshStandardMaterial color="#F7A600" metalness={0.9} roughness={0.1} />
        </mesh>

        {/* Central Biometric Telemetry Core Ring */}
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[1.8, 0.06, 32, 100]} />
          <meshStandardMaterial color="#F7A600" metalness={0.9} roughness={0.1} wireframe />
        </mesh>
      </group>
    </Float>
  );
}

const SPEC_HOTSPOTS = [
  {
    id: "sensors",
    title: "1,000Hz Velocity Sensors",
    desc: "Integrated bar-path optical telemetry sensors measure bar speed, power output, and eccentric fatigue in real-time.",
    icon: Cpu,
    stat: "1,000 Hz TELEMETRY",
  },
  {
    id: "steel",
    title: "Eleiko Olympic Competition Rigs",
    desc: "Precision Swedish cold-rolled steel tested to 1,500 LBS max load capacity for high-performance powerlifting.",
    icon: ShieldCheck,
    stat: "1,500 LBS CERTIFIED",
  },
  {
    id: "telemetry",
    title: "Heart-Rate Zone Integration",
    desc: "ANT+ & Bluetooth 5.4 telemetry projects live heart rate zones onto studio screens during high-intensity intervals.",
    icon: Gauge,
    stat: "< 10ms SYNC LATENCY",
  },
];

export default function Interactive3DShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="3d-lab" className="py-24 bg-[#0A0A0B] relative border-t border-white/10 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#F7A600]/10 via-transparent to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141417] border border-[#F7A600]/30 text-xs font-mono text-[#F7A600] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>STUDIO HARDWARE LAB</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl italic uppercase text-[#F5F5F5]">
            ROTATABLE 3D <span className="gradient-orange-text">ATHLETIC RIG SPECS.</span>
          </h2>
          <p className="text-[#9A9A9E] text-base mt-4 font-body">
            Interact, drag, and inspect our custom-engineered Eleiko barbell & velocity telemetry hardware in real-time 3D.
          </p>
        </div>

        {/* 3D Viewer & Telemetry Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left 3D Canvas Frame */}
          <div className="lg:col-span-7 h-[420px] sm:h-[520px] rounded-3xl overflow-hidden glass-card border-2 border-white/10 relative orange-border-glow shadow-2xl">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-[#0A0A0B]/85 px-3 py-1.5 rounded-full border border-white/10 text-[11px] font-mono text-[#F7A600]">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#F7A600]" />
              <span>DRAG TO ROTATE 3D BARBELL</span>
            </div>

            <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[5, 10, 5]} intensity={2.0} color="#FFFFFF" />
              <pointLight position={[-5, -5, -5]} intensity={1.5} color="#F7A600" />
              <HighEndGym3DModel />
              <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2.5} far={4} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
            </Canvas>
          </div>

          {/* Right Interactive Telemetry Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {SPEC_HOTSPOTS.map((hotspot, idx) => {
              const Icon = hotspot.icon;
              const isActive = activeTab === idx;

              return (
                <motion.div
                  key={hotspot.id}
                  onClick={() => setActiveTab(idx)}
                  whileHover={{ scale: 1.01 }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    isActive
                      ? "bg-[#141417] border-2 border-[#F7A600] shadow-[0_0_30px_rgba(247,166,0,0.15)]"
                      : "glass-card border border-white/10 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${isActive ? "bg-[#F7A600] text-[#0A0A0B]" : "bg-[#1F1F24] text-[#F7A600]"}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-display text-2xl italic text-[#F5F5F5]">{hotspot.title}</h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-[#F7A600] px-2.5 py-1 rounded bg-[#0A0A0B]">
                      {hotspot.stat}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#9A9A9E] leading-relaxed font-body mt-2">
                    {hotspot.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
