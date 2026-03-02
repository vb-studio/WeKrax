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

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 lg:px-12 w-full">
                <div className="flex flex-col items-center text-center">

                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                        </span>
                        Agencia de Fusión Digital
                    </div>

                    <h1 className="text-7xl font-black tracking-tighter sm:text-8xl lg:text-[10rem] mb-6 leading-[0.9] text-white">
                        WE<span className="text-primary">KRAX</span>
                    </h1>

                    <p className="max-w-2xl text-xl font-medium tracking-tight text-gray-300 md:text-2xl lg:text-3xl leading-snug">
                        Diseño Web de Impacto <span className="text-primary">+</span> Sistemas IA Autónomos
                    </p>

                    <div className="relative mt-16 w-full max-w-4xl perspective-1000">
                        <div className="relative mx-auto aspect-[16/9] w-full rounded-2xl glass-panel p-1 shadow-2xl overflow-hidden magnetic-hover">
                            <div className="relative h-full w-full bg-black/40 rounded-xl flex items-center justify-center overflow-hidden">
                                <img
                                    alt="Fusión Digital WeKrax"
                                    className="h-full w-full object-cover opacity-60"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkf8ySDZW5VPbzp_i1lG-8K3xQ2RIKMZKNipQiNazIIpGXIdxFVOujWi-p5OjLpnOByWyFU1AceyShBAtq8DEDM4_CFXVp-8vYT4pBgFGOolhT0_MI4JMf3wYz0E7Ye0zcW9UEQm9dIjhDAT3FumaRb1xMDymx06ZCgobj0WXiwTZhkrAj5co9heitnu65DaMp2p5sNbW8HIsl9XN_8M9BdfA3yKZx7BSUBRhhEk5jFSe0lZcbQ458hliE-84Q0s806xNGb1S1MSnO"
                                />

                                {/* Network Animation SVG */}
                                <div className="absolute inset-0 pointer-events-none opacity-40">
                                    <svg fill="none" height="100%" viewBox="0 0 800 450" width="100%" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="200" cy="150" fill="#FF5F00" r="4"></circle>
                                        <circle cx="200" cy="300" fill="#FF5F00" r="4"></circle>
                                        <circle className="animate-pulse" cx="400" cy="225" fill="#FF5F00" r="6"></circle>
                                        <circle cx="600" cy="150" fill="#FF5F00" r="4"></circle>
                                        <circle cx="600" cy="300" fill="#FF5F00" r="4"></circle>
                                        <path d="M200 150 L400 225 L600 150" stroke="#FF5F00" strokeWidth="1"></path>
                                        <path d="M200 300 L400 225 L600 300" stroke="#FF5F00" strokeWidth="1"></path>
                                        <path d="M400 50 L400 400" stroke="#FF5F00" strokeDasharray="4 4" strokeWidth="0.5"></path>
                                    </svg>
                                </div>
                            </div>

                            {/* Badges Flotantes */}
                            <div className="absolute -left-4 top-1/2 -translate-y-1/2 glass-panel rounded-xl p-4 hidden lg:block magnetic-hover">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">brush</span>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400 uppercase">UX/UI</div>
                                        <div className="text-sm font-bold text-white">Premium Design</div>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute -right-4 top-1/3 glass-panel rounded-xl p-4 hidden lg:block magnetic-hover">
                                <div className="flex items-center gap-3">
                                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">psychology</span>
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-gray-400 uppercase">AI Agents</div>
                                        <div className="text-sm font-bold text-white">Autonomy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 flex flex-wrap justify-center gap-6">
                        <Link
                            href="/#contacto"
                            className="group flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-xl font-bold text-black magnetic-hover shadow-[0_0_20px_rgba(255,95,0,0.4)]"
                        >
                            Iniciar Fusión
                            <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
                        </Link>
                        <Link
                            href="/acerca-de"
                            className="rounded-full border-2 border-primary/30 bg-primary/10 px-10 py-5 text-xl font-bold text-primary hover:bg-primary/20 hover:border-primary/50 magnetic-hover backdrop-blur-sm"
                        >
                            Quiénes Somos
                        </Link>
                        <Link
                            href="/#servicios"
                            className="rounded-full border-2 border-white/20 px-10 py-5 text-xl font-bold text-white hover:bg-white/5 hover:border-white/40 magnetic-hover bg-black/20 backdrop-blur-sm"
                        >
                            Explorar Proyectos
                        </Link>
                    </div>

                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40 hover:opacity-100 transition-all duration-500">
                        <div className="text-center font-bold tracking-widest text-sm text-white">TECH-CORE</div>
                        <div className="text-center font-bold tracking-widest text-sm text-white">DESIGN-PRO</div>
                        <div className="text-center font-bold tracking-widest text-sm text-white">AI-ENGINE</div>
                        <div className="text-center font-bold tracking-widest text-sm text-white">WEB-FLUX</div>
                    </div>

                </div>
            </div>
        </section>
    );
}
