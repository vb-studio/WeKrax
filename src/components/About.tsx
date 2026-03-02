import Image from "next/image";

export default function About() {
    return (
        <section id="nosotros" className="relative py-24 px-6 overflow-hidden neon-glow-bg">
            <div className="absolute top-1/2 left-0 h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8 relative z-10">
                <div className="max-w-xl">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">El ADN de <span className="text-primary glow-text">WeKrax</span></h2>
                    <p className="text-lg text-slate-400 leading-relaxed font-light">
                        Nuestra esencia se basa en el equilibrio perfecto entre la intuición humana y el rigor algorítmico.
                    </p>
                </div>
                <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-primary/40 to-transparent mb-4 hidden lg:block mx-12"></div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

                {/* Card 1 */}
                <div className="glass-panel p-10 rounded-3xl flex flex-col items-start group magnetic-hover">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                        <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_10px_rgba(255,95,0,0.8)]">architecture</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide group-hover:text-primary transition-colors">Estructura & Estética</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        Creemos que un flujo de trabajo eficiente debe ser tan ordenado y bello como una interfaz de usuario premiada. El orden visual potencia la claridad operativa.
                    </p>
                </div>

                {/* Card 2 (Highlighted) */}
                <div className="glass-panel p-10 rounded-3xl flex flex-col items-start border-primary/30 group relative overflow-hidden magnetic-hover bg-primary/[0.03]">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none"></div>
                    <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(255,95,0,0.5)] group-hover:shadow-[0_0_30px_rgba(255,95,0,0.8)] transition-all">
                        <span className="material-symbols-outlined text-black text-3xl font-bold">dynamic_form</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide">Adaptabilidad Extrema</h3>
                    <p className="text-slate-300 leading-relaxed text-sm">
                        El software es líquido. Diseñamos soluciones que no solo resuelven el problema de hoy, sino que están preparadas para integrar las IAs del mañana sin fricción.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="glass-panel p-10 rounded-3xl flex flex-col items-start group magnetic-hover">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-300">
                        <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_10px_rgba(255,95,0,0.8)]">bolt</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-wide group-hover:text-primary transition-colors">Impacto Inmediato</h3>
                    <p className="text-slate-400 leading-relaxed text-sm">
                        No teorizamos durante meses. Implementamos prototipos funcionales rápidos que generan ahorro de tiempo desde la primera semana de ejecución.
                    </p>
                </div>

            </div>
        </section>
    );
}
