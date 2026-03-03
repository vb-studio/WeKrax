import Link from "next/link";

export default function LeadMagnet() {
    return (
        <section className="relative w-full flex flex-col items-center z-10 neon-glow-bg">

            {/* Expertise Técnico (Pre-Frame de Autoridad) */}
            <div className="py-24 px-6 w-full max-w-7xl mx-auto">
                <div className="bg-black/40 backdrop-blur-md rounded-[3rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-2xl glass-panel magnetic-hover">
                    <div className="lg:w-1/2 p-12 lg:p-20 relative neon-glow-bg z-10">
                        <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">Auditoría Gratuita</h3>
                        <h2 className="text-4xl lg:text-5xl font-bold mb-14 text-white tracking-tight">Tres pasos para descubrir cuánto dinero pierdes hoy.</h2>

                        <div className="space-y-12">
                            <div className="flex gap-8 group">
                                <div className="flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary text-4xl font-light group-hover:drop-shadow-[0_0_10px_rgba(255,95,0,0.8)] transition-all">link</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">1. Ingresa tu URL y Correo</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Proporciona el enlace de la web de tu empresa y el correo donde deseas recibir el análisis confidencial.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary text-4xl font-light group-hover:drop-shadow-[0_0_10px_rgba(255,95,0,0.8)] transition-all">radar</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">2. Análisis IA en tiempo real</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Nuestros flujos automatizados rastrean tu sitio detectando cuellos de botella, diseño desfasado y puntos de fuga de clientes.</p>
                                </div>
                            </div>
                            <div className="flex gap-8 group">
                                <div className="flex-shrink-0">
                                    <span className="material-symbols-outlined text-primary text-4xl font-light group-hover:drop-shadow-[0_0_10px_rgba(255,95,0,0.8)] transition-all">mail</span>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">3. Reporte en tu bandeja</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">En 5 minutos exactos recibirás un PDF detallado con el diagnóstico y el plan de acción para empezar a escalar.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative min-h-[500px] border-l border-white/5 bg-black/60 group">
                        <img
                            alt="Technology Background"
                            className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity duration-700"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp5YJ03wGQlV6cVQiErNI3q0Be9DYv-uJ1jWsw3Nc4xlnecmoiK0T4KL3AueK8-HxJuNeG2yFJnQKRyArH6VK4-Kl7AdmDXGzvg32qLqalW5qZ3d1L6hSIpTfJ-3FRWHudaWtkrlScL2egucmI1_q2G70HtSTzencm-H2MAR6pgCAzTtJhTDqmg2EBFk4N_NQouoHRo4STCIQIkTisNm09_OANECjsS_EF6b2G06IICbx8Q7TLR7qCD52gAiZIPMDhoGSjrRwlk4dL"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                            <div className="glass-panel p-12 rounded-full aspect-square flex flex-col items-center justify-center text-center max-w-[320px] shadow-[0_0_40px_rgba(255,95,0,0.2)] neon-border">
                                <p className="text-6xl font-black text-primary mb-3 drop-shadow-[0_0_15px_currentColor]">+500h</p>
                                <p className="text-[10px] uppercase tracking-[0.2em] text-white font-bold leading-tight">Ahorradas mensualmente en nuestros clientes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lead Magnet CTA (SaaS Input Form) */}
            <div className="py-24 px-6 w-full max-w-4xl mx-auto text-center relative z-10 neon-glow-bg">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.15)_0%,transparent_60%)] pointer-events-none -z-10"></div>
                <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-white">¿Tu negocio está listo para el <span className="text-primary italic drop-shadow-[0_0_15px_rgba(255,95,0,0.6)]">futuro?</span></h2>
                <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto">
                    No dejes que las tareas manuales frenen tu crecimiento. Permítenos construir el motor inteligente que tu empresa necesita.
                </p>

                {/* SaaS Terminal Input */}
                <form className="relative flex flex-col sm:flex-row items-stretch w-full max-w-3xl mx-auto bg-black/40 border border-white/10 rounded-2xl sm:rounded-full overflow-hidden p-1.5 focus-within:shadow-[0_0_15px_rgba(255,92,0,0.3)] focus-within:border-primary/50 transition-all duration-300">
                    <div className="flex-1 flex items-center px-4 md:px-6 py-3 w-full">
                        <span className="material-symbols-outlined text-slate-500 mr-3 hidden sm:block">link</span>
                        <input
                            type="url"
                            name="website"
                            required
                            placeholder="www.tuempresa.com.ar"
                            className="bg-transparent w-full text-white placeholder-slate-500 outline-none ring-0 text-sm md:text-base font-sans"
                        />
                    </div>

                    <div className="hidden sm:block w-px bg-white/10 my-2"></div>
                    <div className="sm:hidden h-px w-full bg-white/10 my-1"></div>

                    <div className="flex-1 flex items-center px-4 md:px-6 py-3 w-full">
                        <span className="material-symbols-outlined text-slate-500 mr-3 hidden sm:block">mail</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="tu@email.com"
                            className="bg-transparent w-full text-white placeholder-slate-500 outline-none ring-0 text-sm md:text-base font-sans"
                        />
                    </div>

                    <button type="submit" className="w-full sm:w-auto mt-2 sm:mt-0 bg-primary hover:bg-[#ff7a29] text-black font-extrabold text-[13px] uppercase tracking-wider px-8 py-4 sm:py-3.5 rounded-xl sm:rounded-full transition-transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 shrink-0">
                        Auditar Web &rarr;
                    </button>
                </form>

                {/* Micro-copy de Confianza */}
                <p className="text-xs text-slate-500 mt-5 flex items-center justify-center gap-1.5 font-medium">
                    <span className="material-symbols-outlined text-[14px] text-green-500">lock</span>
                    Análisis potenciado por IA. Recibirás un reporte de vulnerabilidades en tu correo en 5 minutos.
                </p>
            </div>

        </section>
    );
}
