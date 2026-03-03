import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LeadMagnet from "@/components/LeadMagnet";

export default function SolicitarDemo() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden pt-10 pb-24">
                <LeadMagnet />

                {/* Unificación de Sistemas (Migrado desde Services) */}
                <div className="relative w-full max-w-5xl mx-auto mt-32 px-6">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex" id="nexus-anchor">
                        <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,95,0,0.6)] border-8 border-black z-30">
                            <span className="material-symbols-outlined text-black text-4xl font-bold">flare</span>
                        </div>
                    </div>

                    <div className="rounded-[3rem] bg-gradient-to-br from-primary/10 via-black to-primary/5 border border-primary/30 p-12 md:p-24 text-center relative overflow-hidden backdrop-blur-xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50"></div>
                        <div className="absolute -top-24 -right-24 p-8 opacity-10">
                            <span className="material-symbols-outlined text-[20rem]">settings_input_component</span>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-8 tracking-tighter">Unificación de Sistemas</h2>
                            <p className="text-slate-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                                El Nexus Central donde el <span className="text-primary font-bold">Ecosistema Visual</span> y el <span className="text-primary font-bold">Cerebro Digital</span> se fusionan en un organismo único. Aquí es donde la eficiencia de la IA encuentra la elegancia del diseño.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a href="/#contacto" className="group relative bg-primary text-black px-12 py-5 rounded-full font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,95,0,0.5)] flex items-center gap-2 magnetic-hover">
                                    <span className="material-symbols-outlined font-bold">rocket_launch</span>
                                    Agendar Consultoría
                                </a>
                            </div>
                        </div>

                        <div className="mt-16 flex justify-center items-center gap-8 md:gap-12 opacity-40">
                            <div className="flex items-center gap-2">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Protocolo Visual</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-[10px] uppercase tracking-widest font-bold">Lógica de Datos</span>
                            </div>
                            <div className="flex items-center gap-2 hidden md:flex">
                                <div className="h-px w-8 bg-primary"></div>
                                <span className="text-[10px] uppercase tracking-widest font-bold">IA Nexus Sync</span>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    );
}
