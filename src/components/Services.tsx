"use client";
import Image from "next/image";
import { useEffect } from "react";

export default function Services() {
    useEffect(() => {
        // Vanilla JS: Intersection Observer for Scroll Reveal
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.2
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Animación de tarjetas
                    if (entry.target.classList.contains('reveal-on-scroll')) {
                        // Pequeño delay artificial para cascada si entran varias a la vez
                        setTimeout(() => {
                            entry.target.classList.remove('opacity-0', 'translate-y-8');
                            entry.target.classList.add('opacity-100', 'translate-y-0');
                        }, Math.random() * 200); // Delay aleatorio entre 0 y 200ms
                    }

                    // Animación de líneas SVG
                    if (entry.target.classList.contains('svg-line')) {
                        (entry.target as SVGPathElement).style.strokeDashoffset = '0';
                    }

                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observar tarjetas
        document.querySelectorAll('.reveal-on-scroll').forEach(el => revealObserver.observe(el));

        // Observar líneas SVG
        document.querySelectorAll('.svg-line').forEach(el => revealObserver.observe(el));

        return () => revealObserver.disconnect();
    }, []);

    return (
        <div id="servicios" className="w-full flex flex-col">
            <section className="relative flex flex-col items-center py-24 md:py-32 overflow-hidden border-t border-b border-white/5 bg-black/50">

                <div className="w-full max-w-[1600px] flex flex-col md:flex-row relative z-10">

                    {/* Columna Izquierda: Sistemas IA */}
                    <div className="relative flex-1 flex flex-col justify-center px-8 lg:px-20 py-12 overflow-hidden border-b md:border-b-0 md:border-r border-white/5 group">
                        <div className="absolute inset-0 bg-[radial-gradient(var(--color-primary-glow)_1px,transparent_1px)] bg-[length:40px_40px] opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700"></div>
                        <div className="absolute -left-20 top-1/4 h-96 w-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-1000"></div>

                        <div className="relative z-10 max-w-xl mx-auto md:mx-0">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6 magnetic-hover">
                                <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
                                Eficiencia Operativa
                            </div>

                            <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-white">Sistemas <br /><span className="text-primary drop-shadow-[0_0_15px_rgba(255,95,0,0.4)]">IA</span></h2>
                            <p className="text-white/60 text-base lg:text-lg mb-10 leading-relaxed max-w-md">
                                El motor invisible de tu crecimiento. Implementamos workflows de n8n y agentes autónomos diseñados para escalar sin fricción.
                            </p>

                            <div className="glass-panel rounded-2xl p-6 w-full max-w-md shadow-2xl magnetic-hover">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary text-xl">hub</span>
                                    </div>
                                    <div className="h-[1px] flex-1 bg-gradient-to-r from-primary/40 to-transparent"></div>
                                    <div className="size-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                                        <span className="material-symbols-outlined text-orange-300 text-xl">smart_toy</span>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <div className="space-y-1">
                                            <span className="block text-[10px] font-mono text-white/40 uppercase tracking-widest">Node status</span>
                                            <span className="block text-sm font-bold text-white/90">n8n Production Workflow</span>
                                        </div>
                                        <span className="text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full flex items-center gap-1 neon-border border-emerald-500/30">
                                            <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse drop-shadow-[0_0_5px_currentColor]"></span>
                                            ACTIVE
                                        </span>
                                    </div>
                                    <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                                        <div className="bg-primary h-full w-[85%] shadow-[0_0_10px_rgba(255,95,0,0.8)]"></div>
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="h-2 w-full bg-white/5 rounded-full"></div>
                                        <div className="h-2 w-1/3 bg-white/5 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna Derecha: Experiencias Visuales */}
                    <div className="relative flex-1 flex flex-col justify-center px-8 lg:px-20 py-12 overflow-hidden group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,95,0,0.1)_0%,transparent_60%)] pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity duration-700"></div>
                        <div className="absolute -right-20 bottom-1/4 h-96 w-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-1000"></div>

                        <div className="relative z-10 max-w-xl mx-auto md:ml-auto md:mr-0 md:text-right flex flex-col md:items-end">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest mb-6 magnetic-hover">
                                <span className="material-symbols-outlined text-sm text-primary">auto_awesome</span>
                                Impacto Visual
                            </div>

                            <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-[0.9] tracking-tighter text-white">Experiencias <br /><span className="text-gray-300">Visuales</span></h2>
                            <p className="text-white/60 text-base lg:text-lg mb-10 leading-relaxed max-w-md">
                                Convertimos la tecnología en deseo. Diseñamos interfaces de alto rendimiento que posicionan tu marca en el futuro.
                            </p>

                            <div className="glass-panel neon-border rounded-2xl p-2 w-full max-w-md shadow-[0_0_30px_rgba(255,95,0,0.15)] magnetic-hover group-hover:shadow-[0_0_40px_rgba(255,95,0,0.25)]">
                                <div className="bg-[#0a0a0a] rounded-xl aspect-video overflow-hidden relative border border-white/5">

                                    <div className="p-3 border-b border-white/5 flex justify-between items-center bg-white/5 backdrop-blur-sm">
                                        <div className="flex gap-1.5">
                                            <div className="size-2.5 rounded-full bg-white/20"></div>
                                            <div className="size-2.5 rounded-full bg-white/20"></div>
                                            <div className="size-2.5 rounded-full bg-white/20"></div>
                                        </div>
                                        <div className="px-3 py-0.5 rounded-md bg-white/5 text-[8px] text-white/40 font-mono tracking-widest">wekrax.agency/preview</div>
                                    </div>

                                    <div className="p-6 space-y-4">
                                        <div className="h-6 w-2/3 bg-white/10 rounded-md"></div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="h-20 bg-primary/10 rounded-lg border border-primary/20 flex items-center justify-center">
                                                <span className="material-symbols-outlined text-primary/60 text-3xl">image</span>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-3 w-full bg-white/10 rounded-full"></div>
                                                <div className="h-3 w-4/5 bg-white/10 rounded-full"></div>
                                                <div className="h-3 w-full bg-white/10 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className="h-10 w-full bg-white/10 rounded-lg border border-white/5"></div>
                                    </div>

                                    <div className="absolute bottom-3 right-3 bg-white text-black text-[9px] font-bold px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.4)] flex items-center gap-1 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-xs text-primary">verified</span>
                                        PIXEL PERFECT
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* Sección: Ecosistema & Cerebro (Proceso extraído de code1.html) */}
            <section className="relative px-6 py-20 md:py-32 flex flex-col items-center overflow-visible neon-glow-bg z-10">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full pointer-events-none hidden lg:block z-0"></div>

                <div className="max-w-4xl z-10 text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 magnetic-hover">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Interconnected Systems Map
                    </div>
                    <h2 className="text-slate-100 text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
                        El Proceso WeKrax:<br />
                        <span className="text-primary drop-shadow-[0_0_15px_rgba(255,95,0,0.4)]">Ecosistema & Cerebro</span>
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto">
                        Navega por la arquitectura de nuestra metodología: un mapa de nodos interconectados donde el diseño y la lógica convergen en un solo pulso digital.
                    </p>
                </div>

                <div className="max-w-[1400px] mx-auto w-full relative z-10 px-0 lg:px-6">

                    {/* SVG Background Connections (Desktop only) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block z-0" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="conduitGradient" x1="0%" x2="100%" y1="0%" y2="0%">
                                <stop offset="0%" stopColor="transparent"></stop>
                                <stop offset="50%" stopColor="#f47b25"></stop>
                                <stop offset="100%" stopColor="transparent"></stop>
                            </linearGradient>
                        </defs>
                        <path className="opacity-50 svg-line" style={{ strokeDasharray: "1000", strokeDashoffset: "1000", transition: "stroke-dashoffset 2s ease-in-out", stroke: "url(#conduitGradient)" }} d="M 400 250 Q 600 250, 700 800" fill="none" strokeWidth="2"></path>
                        <path className="opacity-50 svg-line" style={{ strokeDasharray: "1000", strokeDashoffset: "1000", transition: "stroke-dashoffset 2s ease-in-out 0.2s", stroke: "url(#conduitGradient)" }} d="M 400 650 Q 600 650, 700 800" fill="none" strokeWidth="2"></path>
                        <path className="opacity-50 svg-line" style={{ strokeDasharray: "1000", strokeDashoffset: "1000", transition: "stroke-dashoffset 2s ease-in-out 0.4s", stroke: "url(#conduitGradient)" }} d="M 400 1050 Q 600 1050, 700 800" fill="none" strokeWidth="2"></path>
                        <path className="opacity-50 svg-line" style={{ strokeDasharray: "1000", strokeDashoffset: "1000", transition: "stroke-dashoffset 2s ease-in-out 0.6s", stroke: "url(#conduitGradient)" }} d="M 1000 350 Q 800 350, 700 800" fill="none" strokeWidth="2"></path>
                        <path className="opacity-50 svg-line" style={{ strokeDasharray: "1000", strokeDashoffset: "1000", transition: "stroke-dashoffset 2s ease-in-out 0.8s", stroke: "url(#conduitGradient)" }} d="M 1000 750 Q 800 750, 700 800" fill="none" strokeWidth="2"></path>
                        <path className="opacity-50 svg-line" style={{ strokeDasharray: "1000", strokeDashoffset: "1000", transition: "stroke-dashoffset 2s ease-in-out 1s", stroke: "url(#conduitGradient)" }} d="M 1000 1150 Q 800 1150, 700 800" fill="none" strokeWidth="2"></path>
                        <path d="M 400 250 L 1000 750" fill="none" stroke="rgba(244,123,37,0.1)" strokeDasharray="5,5" strokeWidth="1"></path>
                        <path d="M 400 1050 L 1000 350" fill="none" stroke="rgba(244,123,37,0.1)" strokeDasharray="5,5" strokeWidth="1"></path>
                    </svg>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-64 relative z-10 w-full">

                        {/* Columna Izquierda: Ecosistema Visual */}
                        <div className="space-y-32 flex flex-col w-full">
                            <div className="flex items-center gap-6 mb-12">
                                <div className="p-4 rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_20px_rgba(244,123,37,0.2)]">
                                    <span className="material-symbols-outlined text-4xl text-primary">hub</span>
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-100 tracking-tight">Ecosistema Visual</h3>
                                    <p className="text-primary/70 text-sm font-bold uppercase tracking-[0.2em]">Front-End Constellation</p>
                                </div>
                            </div>

                            {/* Node 01 */}
                            <div className="relative group max-w-md self-start lg:ml-12 magnetic-hover reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(244,123,37,0.8)] hidden lg:block border-4 border-black z-20"></div>
                                <div className="flex flex-col items-start gap-4 p-8 rounded-3xl glass-panel group-hover:border-primary/50 group-hover:bg-primary/[0.05] transition-all duration-300">
                                    <div className="flex justify-between w-full">
                                        <span className="text-primary font-bold text-xs tracking-widest uppercase">Node 01</span>
                                        <span className="material-symbols-outlined text-primary/40">signal_cellular_alt</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-100">Diseño de Conversión</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Capturamos la atención del usuario mediante estímulos visuales estratégicos que disparan el compromiso inmediato.</p>
                                    <div className="w-full h-32 mt-4 rounded-xl bg-slate-800/50 flex items-center justify-center border border-white/5 overflow-hidden relative">
                                        <img alt="Design UI" className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG2FfgrQbduATfBeDzaRbjYCN2UI7xFVhoTfNqxavXrD539qSKquoDuvu6m8XLf55XCSOfs8JLeWHZ11q2VkoPA45lRpMyQrrh6ofc_qh8DqGOCgi6AexYKfIU0GTlhia57eKd1xbspPecAbyRkC7CwwSumqzllAri8DilQpgfWbz4MWXODoiiV7f5iDMJN4SGEJ-jqtjWMYOTcsgiM-QfXid-WPRVDdQIvwDDRAgiOdL2uVrdlLJwn7KK-PJRiMBNwFV1bXyyRZ1O" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Node 02 */}
                            <div className="relative group max-w-md self-end lg:mr-[-40px] magnetic-hover reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(244,123,37,0.8)] hidden lg:block border-4 border-black z-20"></div>
                                <div className="flex flex-col items-start gap-4 p-8 rounded-3xl glass-panel group-hover:border-primary/50 group-hover:bg-primary/[0.05] transition-all duration-300">
                                    <div className="flex justify-between w-full">
                                        <span className="text-primary font-bold text-xs tracking-widest uppercase">Node 02</span>
                                        <span className="material-symbols-outlined text-primary/40">layers</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-100">UI Skeletons</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Arquitectura de interfaz modular. Diseñamos estructuras que respiran y se adaptan a la velocidad del flujo de datos.</p>
                                    <div className="w-full h-32 mt-4 flex flex-col gap-2 p-4 rounded-xl bg-slate-900/50 border border-white/5">
                                        <div className="h-2 w-1/3 bg-primary/20 rounded-full"></div>
                                        <div className="h-8 w-full bg-white/5 rounded-lg border border-white/10"></div>
                                        <div className="flex gap-2">
                                            <div className="h-10 w-1/3 bg-white/5 rounded-lg"></div>
                                            <div className="h-10 w-2/3 bg-white/5 rounded-lg"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Node 03 */}
                            <div className="relative group max-w-md self-start lg:ml-20 magnetic-hover reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(244,123,37,0.8)] hidden lg:block border-4 border-black z-20"></div>
                                <div className="flex flex-col items-start gap-4 p-8 rounded-3xl glass-panel group-hover:border-primary/50 group-hover:bg-primary/[0.05] transition-all duration-300">
                                    <div className="flex justify-between w-full">
                                        <span className="text-primary font-bold text-xs tracking-widest uppercase">Node 03</span>
                                        <span className="material-symbols-outlined text-primary/40">web</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-100">Landings & One-Pages</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">El punto final de la experiencia visual: interfaces de alto impacto optimizadas para la conversión radical.</p>
                                    <div className="w-full h-32 mt-4 rounded-xl bg-slate-800/50 flex items-center justify-center border border-white/5 overflow-hidden relative">
                                        <Image alt="Web Dev" src="/2. Cerebro Digital.png" layout="fill" className="object-cover object-center opacity-70 group-hover:opacity-100 transition-all duration-500 scale-[1.15] group-hover:scale-[1.20]" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Columna Derecha: Cerebro Digital */}
                        <div className="space-y-32 flex flex-col lg:pt-32 w-full">
                            <div className="flex items-center gap-6 mb-12 lg:justify-end text-right">
                                <div>
                                    <h3 className="text-3xl font-bold text-slate-100 tracking-tight">Cerebro Digital</h3>
                                    <p className="text-primary/70 text-sm font-bold uppercase tracking-[0.2em]">Logic & AI Constellation</p>
                                </div>
                                <div className="p-4 rounded-full bg-primary/10 border border-primary/30 shadow-[0_0_20px_rgba(244,123,37,0.2)]">
                                    <span className="material-symbols-outlined text-4xl text-primary">psychology</span>
                                </div>
                            </div>

                            {/* System A-1 */}
                            <div className="relative group max-w-md self-end lg:mr-12 magnetic-hover reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(244,123,37,0.8)] hidden lg:block border-4 border-black z-20"></div>
                                <div className="flex flex-col items-start gap-4 p-8 rounded-3xl glass-panel group-hover:border-primary/50 group-hover:bg-primary/[0.05] transition-all duration-300">
                                    <div className="flex justify-between w-full">
                                        <span className="text-primary font-bold text-xs tracking-widest uppercase">System A-1</span>
                                        <span className="material-symbols-outlined text-primary/40">account_tree</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-100">Lógica de Procesos</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Definimos los caminos críticos de datos. Cada interacción visual activa una respuesta lógica precisa en el back-end.</p>
                                    <div className="w-full h-32 mt-4 rounded-xl bg-slate-800/50 overflow-hidden relative border border-white/5">
                                        <img alt="Circuitry" className="w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANE9gvMCzHOcu-q4CrGpyOvId5mevw6D-nkORK0RqufHj29Qvt1czaVqVISICNPO27ywPUHT6srAofi7l1S5mWc64k2NjC_0l5zQhoJW5sMjfx0dY97vc4pP8q1G9FpqosFZqhb6usCOsFMs_DgbBgGU2lyfB17hGuNTTbgdY7wUk0qMldWEckinZyiwu5QCdmcQE_j-uGOewTMPWjNvYhB1I2dpvh41QhOJ2BILARk2KveyYUTSVQMfALgcZciVzH206ZmX7rM6N0" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="flex gap-2">
                                                <div className="w-1.5 h-8 bg-primary/40 rounded-full"></div>
                                                <div className="w-1.5 h-12 bg-primary rounded-full shadow-[0_0_10px_rgba(255,95,0,0.8)]"></div>
                                                <div className="w-1.5 h-6 bg-primary/20 rounded-full"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* System A-2 */}
                            <div className="relative group max-w-md self-start lg:ml-[-40px] magnetic-hover reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(244,123,37,0.8)] hidden lg:block border-4 border-black z-20"></div>
                                <div className="flex flex-col items-start gap-4 p-8 rounded-3xl glass-panel group-hover:border-primary/50 group-hover:bg-primary/[0.05] transition-all duration-300">
                                    <div className="flex justify-between w-full">
                                        <span className="text-primary font-bold text-xs tracking-widest uppercase">System A-2</span>
                                        <span className="material-symbols-outlined text-primary/40">smart_toy</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-100">Agentes de IA</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">Integración de redes neuronales que procesan información en tiempo real, conectando la web con el conocimiento del negocio.</p>
                                    <div className="w-full h-32 mt-4 rounded-xl bg-slate-900/50 flex items-center justify-around p-4 border border-white/5">
                                        <div className="size-10 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-primary/5">
                                            <span className="material-symbols-outlined text-xl">temp_preferences_custom</span>
                                        </div>
                                        <div className="flex-1 px-4">
                                            <div className="h-1 w-full bg-primary/10 rounded-full relative overflow-hidden">
                                                <div className="absolute inset-y-0 left-0 w-2/3 bg-primary shadow-[0_0_10px_rgba(255,95,0,0.5)]"></div>
                                            </div>
                                        </div>
                                        <div className="size-10 rounded-full border border-primary/20 flex items-center justify-center text-primary bg-primary/5">
                                            <span className="material-symbols-outlined text-xl">database</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* System A-3 */}
                            <div className="relative group max-w-md self-end lg:mr-20 magnetic-hover reveal-on-scroll opacity-0 translate-y-8 transition-all duration-700 ease-out">
                                <div className="absolute -right-12 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full shadow-[0_0_20px_rgba(244,123,37,0.8)] hidden lg:block border-4 border-black z-20"></div>
                                <div className="flex flex-col items-start gap-4 p-8 rounded-3xl glass-panel group-hover:border-primary/50 group-hover:bg-primary/[0.05] transition-all duration-300">
                                    <div className="flex justify-between w-full">
                                        <span className="text-primary font-bold text-xs tracking-widest uppercase">System A-3</span>
                                        <span className="material-symbols-outlined text-primary/40">conversion_path</span>
                                    </div>
                                    <h4 className="text-2xl font-bold text-slate-100">Workflows n8n</h4>
                                    <p className="text-slate-400 text-sm leading-relaxed">El sistema circulatorio digital. Flujos de trabajo automatizados que orquestan el intercambio de valor entre cada nodo.</p>
                                    <div className="w-full h-32 mt-4 rounded-xl bg-slate-800/50 overflow-hidden border border-white/5 relative">
                                        <Image alt="Workflow" src="/1. Ecosistema Visual.png" layout="fill" className="object-cover object-center opacity-70 group-hover:opacity-100 transition-all duration-500 scale-[1.25] group-hover:scale-[1.30]" />
                                        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay pointer-events-none"></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-black pointer-events-none z-0"></div>

            </section>
        </div >
    );
}
