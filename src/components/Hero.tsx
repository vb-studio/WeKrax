import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="inicio" className="relative flex min-h-screen flex-col justify-center pt-24 pb-16 overflow-hidden neon-glow-bg">
            {/* Luces de Fondo (Glow) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]"></div>
                <div className="absolute top-1/2 right-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[150px]"></div>
            </div>

            {/* Layout Estricto: CSS Grid de dos columnas para separar textos de las tarjetas absolutas */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 lg:py-32 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

                    {/* Columna Izquierda ESTRICTA: Textos y CTAs (Aislada y sin flotantes) */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full h-full justify-center">
                        {/* Etiqueta Superior */}
                        <div className="mb-6 animate-[fadeIn_1s_ease-out]">
                            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-900/20 border border-orange-500/10 text-[10px] font-semibold text-primary uppercase tracking-wider backdrop-blur-sm">
                                <span className="relative flex h-1.5 w-1.5 line-height-none">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary"></span>
                                </span>
                                Nueva Era Digital
                            </span>
                        </div>

                        {/* Título Gigante (SaaS Premium) */}
                        <h1 className="font-black text-6xl md:text-7xl lg:text-8xl leading-[0.85] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-primary to-orange-800 select-none mb-6 drop-shadow-[0_0_20px_rgba(255,107,0,0.15)]">
                            WEKRAX
                        </h1>

                        {/* Subtítulo Elegante */}
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-light text-slate-300 max-w-xl mb-10 leading-relaxed tracking-tight">
                            Diseño que <span className="italic font-normal font-serif text-white">inspira</span>.<br className="hidden lg:block" />
                            Automatización que <span className="font-medium text-primary">escala</span>.
                        </h2>

                        {/* Call To Actions */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 z-20">
                            <Link href="/#contacto" className="group relative px-8 py-3.5 bg-white overflow-hidden rounded-md text-black font-semibold text-sm uppercase tracking-widest transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:bg-white/90 w-full sm:w-auto text-center">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Iniciar Proyecto
                                    <span className="material-symbols-outlined text-base font-bold transition-transform group-hover:translate-x-1">arrow_forward</span>
                                </span>
                            </Link>
                            <Link href="/#servicios" className="text-gray-400 hover:text-white text-sm font-medium uppercase tracking-widest flex items-center gap-2 group transition-colors px-4 py-2">
                                Ver Portafolio
                                <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors">
                                    <span className="material-symbols-outlined text-xs">play_arrow</span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Columna Derecha ESTRICTA: Tarjetas Flotantes limitadas a este cuadrante grid */}
                    <div className="relative w-full min-h-[460px] lg:min-h-[500px] flex items-center justify-center lg:justify-end perspective-1000 z-10">

                        {/* Contenedor relativo para el Dashboard SaaS (Superposición Isométrica Premium) */}
                        <div className="relative w-full h-[600px] perspective-[1200px] flex items-center justify-center">

                            {/* Grupo Padre Animado (Respiración Flotante Unificada) */}
                            <div className="relative w-full max-w-[500px] h-[400px] card-float-1 transform origin-center transition-transform -rotate-y-[15deg] rotate-x-[10deg]">

                                {/* Capa 1: Dashboard de Fondo (Browser Sólido Naranja) */}
                                <div className="absolute top-0 right-0 w-[420px] lg:w-[480px] h-[280px] z-10 rounded-2xl bg-gradient-to-br from-[#FF5C00] to-[#E05000] shadow-[0_20px_50px_rgba(255,107,0,0.4)] border border-white/30 overflow-hidden">
                                    {/* App Bar (macOS style dots) limpia */}
                                    <div className="flex items-center gap-1.5 px-4 py-3 bg-white/20 border-b border-white/20">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                                        <div className="ml-4 h-2 flex-1 max-w-[120px] bg-white/40 rounded-full"></div>
                                    </div>
                                    {/* Skeletons de UI (Sólidos y nítidos) */}
                                    <div className="p-5 flex gap-4 h-full">
                                        {/* Sidebar skeleton */}
                                        <div className="w-16 h-full flex flex-col gap-3">
                                            <div className="w-full h-8 bg-white/40 rounded-md"></div>
                                            <div className="w-full h-8 bg-white/20 rounded-md"></div>
                                            <div className="w-full h-8 bg-white/20 rounded-md"></div>
                                            <div className="w-full h-8 bg-white/20 rounded-md"></div>
                                        </div>
                                        {/* Main content skeleton */}
                                        <div className="flex-1 flex flex-col gap-4">
                                            <div className="w-full h-24 bg-white/20 rounded-lg border border-white/30 relative overflow-hidden flex flex-col justify-end">
                                                {/* Simulated chart graph */}
                                                <svg className="w-full h-16" preserveAspectRatio="none" viewBox="0 0 100 100">
                                                    <path d="M0 100 L 0 80 Q 25 70 50 40 T 100 20 L 100 100 Z" fill="rgba(255,255,255,0.4)"></path>
                                                </svg>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="w-1/2 h-20 bg-white/20 rounded-lg border border-white/30"></div>
                                                <div className="w-1/2 h-20 bg-white/20 rounded-lg border border-white/30"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Capa 2: Tarjeta Frontal Superior (Premium Dark Glassmorphism) */}
                                <div className="absolute -bottom-8 -left-6 lg:-left-12 w-[300px] sm:w-[320px] z-20 rounded-2xl bg-black/30 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] p-5">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                                                <span className="material-symbols-outlined text-sm">trending_up</span>
                                            </div>
                                            <span className="text-[9px] font-bold text-slate-200 uppercase tracking-widest">Efficiency Rate</span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded text-[8px] font-mono font-bold bg-white/10 text-white border border-white/20 uppercase tracking-widest">Live</span>
                                    </div>

                                    <div className="flex flex-col gap-1 mb-5">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-5xl font-black text-white tracking-tighter drop-shadow-md">99.8<span className="text-3xl text-emerald-400">%</span></span>
                                        </div>
                                        <p className="text-[10px] text-green-400 font-bold tracking-wide">+12.4% vs last month</p>
                                    </div>

                                    {/* Nítido Micro-Workflow representation */}
                                    <div className="flex items-center justify-between gap-2 p-3 rounded-xl bg-black/40 border border-white/10">
                                        <div className="w-6 h-6 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[12px] text-white">hub</span>
                                        </div>
                                        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                                        <div className="w-8 h-8 rounded-lg bg-[#FF5C00]/20 border border-[#FF5C00]/50 flex items-center justify-center shadow-[0_0_15px_rgba(255,92,0,0.4)]">
                                            <span className="material-symbols-outlined text-[14px] text-[#FF5C00] animate-[spin_8s_linear_infinite]">settings</span>
                                        </div>
                                        <div className="h-[2px] flex-1 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                                        <div className="w-6 h-6 rounded-md bg-white/10 border border-white/20 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[12px] text-white">check_circle</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
