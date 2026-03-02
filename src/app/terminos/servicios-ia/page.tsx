import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TerminosIA() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center w-full overflow-hidden pt-20 bg-black">

                {/* Top subtle glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/10 blur-[120px] pointer-events-none"></div>

                <div className="flex flex-1 justify-center py-10 px-6 md:px-20 lg:px-40 w-full relative z-10">
                    <div className="flex flex-col max-w-[960px] w-full flex-1">

                        {/* Header Section */}
                        <div className="mb-10">
                            <p className="text-primary text-xs font-bold uppercase tracking-widest pb-2">Información Legal</p>
                            <h1 className="text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-4">
                                Términos y <span className="text-primary drop-shadow-[0_0_15px_rgba(255,95,0,0.4)]">Condiciones</span>
                            </h1>
                            <div className="flex items-center gap-2 text-primary/80 text-sm font-medium mb-6">
                                <span className="material-symbols-outlined text-sm">calendar_today</span>
                                <span>Última actualización: 12 de Junio, 2024</span>
                            </div>
                            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
                                Detalles de servicios y cláusulas legales que rigen la relación profesional entre WeKrax y sus clientes para soluciones de IA.
                            </p>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="mb-10 overflow-x-auto">
                            <div className="flex border-b border-primary/10 min-w-max gap-2">
                                <Link className="flex items-center gap-2 border-b-2 border-transparent text-slate-400 hover:text-primary px-6 py-4 transition-colors hover:bg-white/5" href="/terminos">
                                    <span className="material-symbols-outlined text-sm">gavel</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">General</span>
                                </Link>
                                <Link className="flex items-center gap-2 border-b-2 border-primary text-primary px-6 py-4 bg-primary/5 transition-colors" href="/terminos/servicios-ia">
                                    <span className="material-symbols-outlined text-sm">psychology</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">Servicios IA</span>
                                </Link>
                                <Link className="flex items-center gap-2 border-b-2 border-transparent text-slate-400 hover:text-primary px-6 py-4 transition-colors hover:bg-white/5" href="/terminos/desarrollo-web">
                                    <span className="material-symbols-outlined text-sm">code</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">Desarrollo Web</span>
                                </Link>
                                <Link className="flex items-center gap-2 border-b-2 border-transparent text-slate-400 hover:text-primary px-6 py-4 transition-colors hover:bg-white/5" href="/privacidad">
                                    <span className="material-symbols-outlined text-sm">shield</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">Privacidad</span>
                                </Link>
                            </div>
                        </div>

                        {/* Content Content */}
                        <div className="space-y-12 pb-20">

                            {/* Specialized AI Section */}
                            <section className="scroll-mt-24 p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 glass-panel shadow-2xl relative">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,95,0,0.05)_0%,transparent_50%)] rounded-[2rem] pointer-events-none"></div>

                                <div className="flex items-start gap-4 mb-8">
                                    <span className="bg-primary text-black font-bold px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(255,95,0,0.6)] text-xl">IA</span>
                                    <h2 className="text-slate-100 text-3xl font-bold tracking-tight">Servicios de Automatización e IA</h2>
                                </div>

                                <div className="pl-0 md:pl-16 space-y-6 text-slate-300 leading-relaxed font-light">
                                    <p>WeKrax implementa soluciones de automatización mediante <span className="text-primary font-bold">n8n</span> e integraciones de modelos avanzados como <span className="text-primary font-bold">GPT-4</span> y <span className="text-primary font-bold">Claude</span>.</p>
                                    <p>Nuestro enfoque se centra en la creación de agentes autónomos y la implementación de modelos de IA personalizados para la optimización de flujos de trabajo empresariales.</p>

                                    <div className="bg-black/60 p-6 md:p-8 rounded-2xl border border-white/10 space-y-4 mt-8 neon-bg">
                                        <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Cláusulas Específicas:</h3>
                                        <ul className="list-none space-y-6">
                                            <li className="flex items-start gap-4">
                                                <span className="material-symbols-outlined text-primary text-2xl drop-shadow-[0_0_5px_currentColor]">smart_toy</span>
                                                <span className="text-sm leading-relaxed">La configuración de agentes autónomos requiere acceso a las APIs proporcionadas por el cliente o gestionadas por WeKrax según acuerdo previo.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="material-symbols-outlined text-primary text-2xl drop-shadow-[0_0_5px_currentColor]">verified_user</span>
                                                <span className="text-sm leading-relaxed"><strong>Responsabilidad:</strong> La responsabilidad de los outputs finales recae en el cliente tras la fase de pruebas y validación técnica inicial.</span>
                                            </li>
                                            <li className="flex items-start gap-4">
                                                <span className="material-symbols-outlined text-primary text-2xl drop-shadow-[0_0_5px_currentColor]">precision_manufacturing</span>
                                                <span className="text-sm leading-relaxed">WeKrax garantiza la arquitectura técnica de la integración en n8n, pero no se responsabiliza por cambios unilaterales en las políticas de uso de los proveedores de modelos (OpenAI, Anthropic).</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            {/* General Disclaimer */}
                            <section className="scroll-mt-24 pl-8 border-l-2 border-primary/30">
                                <h3 className="text-slate-100 text-xl font-bold tracking-tight mb-3">Soporte y Mantenimiento</h3>
                                <p className="text-slate-400 font-light leading-relaxed">
                                    Las automatizaciones de IA requieren supervisión técnica periódica. WeKrax ofrece planes de mantenimiento para asegurar que los flujos en n8n y las conexiones de API permanezcan operativas ante actualizaciones de terceros.
                                </p>
                            </section>

                        </div>

                        {/* Footer Legal Note */}
                        <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 pb-20">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-2xl">contact_support</span>
                                </div>
                                <div>
                                    <p className="text-slate-100 font-bold">¿Dudas sobre estos términos?</p>
                                    <p className="text-slate-400 text-sm">Contacta con nuestro equipo legal: jeremias07leiva@gmail.com</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
