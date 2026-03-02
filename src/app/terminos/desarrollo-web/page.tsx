import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function TerminosDesarrolloWeb() {
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
                                Especificaciones técnicas y cláusulas legales para nuestros servicios de arquitectura web, interfaces de alto impacto y activos digitales.
                            </p>
                        </div>

                        {/* Tabs Navigation */}
                        <div className="mb-10 overflow-x-auto">
                            <div className="flex border-b border-primary/10 min-w-max gap-2">
                                <Link className="flex items-center gap-2 border-b-2 border-transparent text-slate-400 hover:text-primary px-6 py-4 transition-colors hover:bg-white/5" href="/terminos">
                                    <span className="material-symbols-outlined text-sm">gavel</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">General</span>
                                </Link>
                                <Link className="flex items-center gap-2 border-b-2 border-transparent text-slate-400 hover:text-primary px-6 py-4 transition-colors hover:bg-white/5" href="/terminos/servicios-ia">
                                    <span className="material-symbols-outlined text-sm">psychology</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">Servicios IA</span>
                                </Link>
                                <Link className="flex items-center gap-2 border-b-2 border-primary text-primary px-6 py-4 bg-primary/5 transition-colors" href="/terminos/desarrollo-web">
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

                            {/* Specialized Web Section */}
                            <section className="scroll-mt-24 p-8 md:p-12 rounded-[2rem] bg-white/5 border border-white/10 glass-panel shadow-2xl relative">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,95,0,0.05)_0%,transparent_50%)] rounded-[2rem] pointer-events-none"></div>

                                <div className="flex items-start gap-4 mb-8 relative z-10">
                                    <span className="bg-primary text-black font-bold px-4 py-2 rounded-lg shadow-[0_0_15px_rgba(255,95,0,0.6)] text-xl">03</span>
                                    <h2 className="text-slate-100 text-3xl font-bold tracking-tight uppercase">Condiciones de Desarrollo Web</h2>
                                </div>

                                <div className="pl-0 md:pl-16 space-y-8 relative z-10">
                                    <p className="text-slate-300 leading-relaxed text-lg font-light">
                                        WeKrax se especializa en la <span className="text-white font-semibold">creación de interfaces visuales de alto impacto</span> (Landings, One-Pages) diseñadas para la conversión y el rendimiento tecnológico superior.
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

                                        {/* Item 1 */}
                                        <div className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                                            <h3 className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                                <span className="material-symbols-outlined text-xl">copyright</span>
                                                Propiedad Intelectual
                                            </h3>
                                            <p className="text-white leading-relaxed text-sm font-light">
                                                El cliente obtiene la <strong>propiedad intelectual total</strong> de los activos finales (código fuente personalizado, diseños visuales y contenido procesado) exclusivamente tras la recepción del <strong>pago completo</strong> del proyecto.
                                            </p>
                                            <p className="text-slate-400 text-xs italic">
                                                Se exceptúan metodologías internas de WeKrax, frameworks base y librerías preexistentes propiedad de la agencia.
                                            </p>
                                        </div>

                                        {/* Item 2 */}
                                        <div className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                                            <h3 className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                                <span className="material-symbols-outlined text-xl">rate_review</span>
                                                Proceso de Revisión
                                            </h3>
                                            <p className="text-white leading-relaxed text-sm font-light">
                                                Los proyectos incluyen ciclos limitados de revisión. Se definen <strong>dos (2) fases de ajustes menores</strong> sobre el diseño aprobado. Cambios estructurales tras la fase de desarrollo frontend incurrirán en costes adicionales.
                                            </p>
                                        </div>

                                        {/* Item 3 */}
                                        <div className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                                            <h3 className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                                <span className="material-symbols-outlined text-xl">speed</span>
                                                Optimización y Rendimiento
                                            </h3>
                                            <p className="text-white leading-relaxed text-sm font-light">
                                                WeKrax garantiza estándares de rendimiento óptimos, incluyendo métricas de <strong>Core Web Vitals</strong> en verde y prácticas de <strong>SEO técnico</strong> estandarizadas para asegurar la visibilidad orgánica inicial.
                                            </p>
                                        </div>

                                        {/* Item 4 */}
                                        <div className="space-y-4 bg-black/40 p-6 rounded-2xl border border-white/5 hover:border-primary/20 transition-colors">
                                            <h3 className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                                                <span className="material-symbols-outlined text-xl">dns</span>
                                                Alojamiento y Dominio
                                            </h3>
                                            <p className="text-white leading-relaxed text-sm font-light">
                                                La gestión de dominios y servicios de hosting es <strong>responsabilidad del cliente</strong>, a menos que se contrate explícitamente un plan de mantenimiento. WeKrax asistirá en la configuración técnica inicial del despliegue.
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </section>

                        </div>

                        {/* Footer Legal Note */}
                        <div className="mt-10 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 pb-20">
                            <div className="flex items-center gap-4">
                                <div className="bg-primary/20 p-3 rounded-full border border-primary/30">
                                    <span className="material-symbols-outlined text-primary text-2xl">contact_support</span>
                                </div>
                                <div>
                                    <p className="text-slate-100 font-bold">¿Dudas sobre el desarrollo web?</p>
                                    <p className="text-slate-400 text-sm">Contacta con nuestro equipo legal: jeremias07leiva@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                <button className="px-6 py-3 rounded-full border border-white/20 text-white font-bold hover:bg-white/10 transition-colors magnetic-hover">Descargar PDF</button>
                                <Link href="/#contacto" className="px-6 py-3 rounded-full bg-primary text-black font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(255,95,0,0.3)] magnetic-hover">Acepto los términos</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
