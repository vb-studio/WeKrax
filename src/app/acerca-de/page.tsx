import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

export default function AcercaDe() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden pt-20">

                {/* Header - Fundador & Estratega */}
                <header className="relative pt-24 pb-16 px-6 overflow-hidden neon-glow-bg w-full">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black mb-8 tracking-[0.3em] uppercase magnetic-hover">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                </span>
                                Dualidad Creativa & Técnica
                            </div>

                            <h1 className="text-6xl lg:text-[5.5rem] font-bold mb-8 leading-[0.95] tracking-tight text-white">
                                Donde el <span className="text-primary drop-shadow-[0_0_10px_rgba(255,95,0,0.4)]">Arte</span> se une a la <span className="text-white">Eficiencia.</span>
                            </h1>

                            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-lg font-light">
                                En WeKrax no elegimos entre estética y funcionalidad. Fusionamos el diseño web de vanguardia con la potencia de la automatización por IA para crear ecosistemas digitales que trabajan por ti.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 magnetic-hover group">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:drop-shadow-[0_0_10px_rgba(255,95,0,0.8)] transition-all">palette</span>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-wider">Diseño Creativo</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">Experiencias visuales que cautivan y convierten.</p>
                                    </div>
                                </div>

                                <div className="glass-panel p-6 rounded-2xl flex items-start gap-4 magnetic-hover group">
                                    <span className="material-symbols-outlined text-primary text-3xl group-hover:drop-shadow-[0_0_10px_rgba(255,95,0,0.8)] transition-all">precision_manufacturing</span>
                                    <div>
                                        <h4 className="font-bold text-white text-sm mb-1 uppercase tracking-wider">IA & Automatización</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">Procesos técnicos robustos y escalables.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:pl-12 magnetic-hover">
                            <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl -z-10 opacity-50"></div>
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(255,95,0,0.15)] group">
                                <img
                                    alt="WeKrax Founder"
                                    className="w-full aspect-[4/5] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3Q614pVYlzHHvRuR_aHMJf6-GkqYIKNQp3grckczNhNBNbjsAaAeM-c5JXsg7kGChw3GB-SLP1VIq2V5GN0yBjClSfqjcNSTJgyW9btgpj9IrFQPksJuxNrh54VKIs-7aPZqlGG9lb3w3MxaavTQYZ2Br-Fmd8APCz1gQ0npbZZOGyB734bqKumUCIew9bFAjHGaDhEKXrDiWc_bzHLeezBPUBXUfVqz-G8xlKACQ9g5QSD5i_kS1S5PjhRJYuljQuNIStRWgqUHv"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                                <div className="absolute bottom-10 left-10 right-10">
                                    <p className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-2 drop-shadow-[0_0_5px_currentColor]">Fundador & Estratega</p>
                                    <p className="text-3xl font-bold text-white tracking-tight">Liderando la revolución del diseño inteligente.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </header>

                {/* Sección ADN (Reutilizando el componente ya creado con Hover/Glass effects) */}
                <About />

                {/* Expertise Técnico */}
                <section className="py-24 px-6 w-full max-w-7xl mx-auto">
                    <div className="bg-black/40 backdrop-blur-md rounded-[3rem] overflow-hidden border border-white/5 flex flex-col lg:flex-row shadow-2xl glass-panel magnetic-hover">

                        <div className="lg:w-1/2 p-12 lg:p-20 relative neon-glow-bg z-10">
                            <h3 className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-6">Expertise Técnico</h3>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-14 text-white tracking-tight">Arquitectura que escala negocios.</h2>

                            <div className="space-y-12">
                                <div className="flex gap-8 group">
                                    <div className="flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary text-4xl font-light group-hover:drop-shadow-[0_0_10px_rgba(255,95,0,0.8)] transition-all">webhook</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">Automatización n8n</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Desarrollo de arquitecturas complejas, integración de APIs personalizadas y gestión de flujos de trabajo críticos.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary text-4xl font-light group-hover:drop-shadow-[0_0_10px_rgba(255,95,0,0.8)] transition-all">psychology_alt</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">Integración LLM</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Implementación de modelos de lenguaje avanzados para toma de decisiones inteligentes y análisis predictivo de datos.</p>
                                    </div>
                                </div>

                                <div className="flex gap-8 group">
                                    <div className="flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary text-4xl font-light group-hover:drop-shadow-[0_0_10px_rgba(255,95,0,0.8)] transition-all">layers</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold mb-2 text-white group-hover:text-primary transition-colors">Ecosistema Web Pro</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Interfaces modernas y optimizadas que sirven como centro de control para tus herramientas automatizadas.</p>
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
                </section>

                {/* Call to Action Final */}
                <section className="py-32 px-6 w-full max-w-4xl mx-auto text-center relative z-10 neon-glow-bg">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,95,0,0.15)_0%,transparent_60%)] pointer-events-none -z-10"></div>
                    <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight text-white">¿Tu negocio está listo para el <span className="text-primary italic drop-shadow-[0_0_15px_rgba(255,95,0,0.6)]">futuro?</span></h2>
                    <p className="text-xl text-slate-400 mb-14 font-light max-w-2xl mx-auto">
                        No dejes que las tareas manuales frenen tu crecimiento. Permítenos construir el motor inteligente que tu empresa necesita.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <a
                            className="bg-gradient-to-r from-primary to-[#ff9d5c] text-black px-10 py-5 rounded-full font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(255,95,0,0.4)] hover:shadow-[0_0_40px_rgba(255,95,0,0.6)] transition-all flex items-center gap-3 magnetic-hover"
                            href="/#contacto"
                        >
                            Iniciar Transformación
                            <span className="material-symbols-outlined text-xl">arrow_forward</span>
                        </a>
                        <a
                            className="text-white border border-white/20 px-10 py-5 rounded-full font-bold text-sm hover:bg-white/5 hover:border-white/40 transition-all magnetic-hover backdrop-blur-md"
                            href="/#servicios"
                        >
                            Nuestra Metodología
                        </a>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    );
}
