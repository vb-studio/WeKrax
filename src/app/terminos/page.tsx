import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TerminosGeneral() {
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
                                <span>Última actualización: 24 de Mayo, 2024</span>
                            </div>
                            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed font-light">
                                Por favor, lee atentamente los términos que rigen el uso de los servicios de la agencia WeKrax. Al contratar nuestros servicios, aceptas estos términos en su totalidad.
                            </p>
                        </div>

                        {/* Tabs Navigation (Matches the 4 folders structural request) */}
                        <div className="mb-10 overflow-x-auto">
                            <div className="flex border-b border-primary/10 min-w-max gap-2">
                                <Link className="flex items-center gap-2 border-b-2 border-primary text-primary px-6 py-4 bg-primary/5 transition-colors" href="/terminos">
                                    <span className="material-symbols-outlined text-sm">gavel</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">General</span>
                                </Link>
                                <Link className="flex items-center gap-2 border-b-2 border-transparent text-slate-400 hover:text-primary px-6 py-4 transition-colors hover:bg-white/5" href="/terminos/servicios-ia">
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

                        {/* General Terms Content */}
                        <div className="space-y-12 pb-20">

                            {/* Section 1 */}
                            <section className="scroll-mt-24">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded border border-primary/20">01</span>
                                    <h2 className="text-slate-100 text-2xl font-bold tracking-tight">Aceptación de los Términos</h2>
                                </div>
                                <div className="pl-14 space-y-4 text-slate-300 leading-relaxed font-light">
                                    <p>Al acceder o utilizar los servicios proporcionados por WeKrax ("la Agencia"), usted acepta estar legalmente vinculado por estos Términos y Condiciones. Si no está de acuerdo con alguna parte de estos términos, no debe utilizar nuestros servicios.</p>
                                    <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en nuestro sitio web.</p>
                                </div>
                            </section>

                            {/* Section 2 */}
                            <section className="scroll-mt-24 p-8 rounded-2xl bg-white/5 border border-white/10 glass-panel">
                                <div className="flex items-start gap-4 mb-6">
                                    <span className="bg-primary text-black font-bold px-3 py-1 rounded shadow-[0_0_10px_rgba(255,95,0,0.6)]">02</span>
                                    <h2 className="text-slate-100 text-2xl font-bold tracking-tight">Servicios de Automatización IA</h2>
                                </div>
                                <div className="pl-14 space-y-4 text-slate-300 leading-relaxed font-light">
                                    <p>Nuestros servicios de automatización de Inteligencia Artificial se basan en tecnologías de vanguardia y modelos de terceros (como OpenAI, Anthropic, etc.). WeKrax no se hace responsable de:</p>
                                    <ul className="list-disc pl-5 space-y-2 marker:text-primary">
                                        <li>Alucinaciones o imprecisiones generadas por los modelos de IA.</li>
                                        <li>Interrupciones de servicio de proveedores externos de infraestructura de IA.</li>
                                        <li>El uso indebido de las herramientas automatizadas por parte del cliente.</li>
                                    </ul>
                                    <p className="pt-4 border-t border-white/10 text-slate-400 italic text-sm mt-6">
                                        Nota: El cliente es responsable de supervisar los resultados generados por la IA antes de su implementación comercial o publicación.
                                    </p>
                                </div>
                            </section>

                            {/* Section 3 */}
                            <section className="scroll-mt-24">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded border border-primary/20">03</span>
                                    <h2 className="text-slate-100 text-2xl font-bold tracking-tight">Desarrollo Web y Propiedad Intelectual</h2>
                                </div>
                                <div className="pl-14 space-y-4 text-slate-300 leading-relaxed font-light">
                                    <p>Tras el pago total de los servicios contratados, el cliente recibirá la propiedad de los activos finales entregables. Sin embargo, WeKrax retiene la propiedad de:</p>
                                    <ul className="list-none space-y-3 mt-4">
                                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                            Librerías de código base propias desarrolladas previamente.
                                        </li>
                                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                            Metodologías y procesos de trabajo internos.
                                        </li>
                                        <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/5">
                                            <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                                            Diseños conceptuales no seleccionados para el producto final.
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            {/* Section 4 */}
                            <section className="scroll-mt-24">
                                <div className="flex items-start gap-4 mb-4">
                                    <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded border border-primary/20">04</span>
                                    <h2 className="text-slate-100 text-2xl font-bold tracking-tight">Estructura de Pagos</h2>
                                </div>
                                <div className="pl-14 space-y-4 text-slate-300 leading-relaxed font-light">
                                    <p>Todos los proyectos requieren un depósito inicial del 50% antes de comenzar. El saldo restante se facturará en hitos acordados contractualmente o tras la finalización del proyecto.</p>
                                    <div className="p-5 mt-4 bg-black/50 border-l-4 border-primary rounded-r-lg glass-panel">
                                        <p className="text-sm font-medium text-slate-400 italic">Los retrasos en los pagos superiores a 15 días naturales pueden resultar en la suspensión temporal de los servicios y el soporte técnico.</p>
                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* Footer Legal Note within content */}
                        <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 pb-20">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-2xl">contact_support</span>
                                </div>
                                <div>
                                    <p className="text-slate-100 font-bold">¿Tienes dudas legales?</p>
                                    <p className="text-slate-400 text-sm">Contacta con jeremias07leiva@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="/Terminos_WeKrax.pdf" download="Terminos_y_Condiciones_WeKrax.pdf" className="px-6 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors magnetic-hover">Descargar PDF</a>
                                <Link href="/#contacto" className="px-6 py-3 rounded-full bg-primary text-black font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,95,0,0.3)] magnetic-hover">Volver al Inicio</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
