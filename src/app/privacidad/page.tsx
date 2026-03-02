import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Privacidad() {
    return (
        <>
            <Navbar />
            <main className="flex min-h-screen flex-col items-center justify-between w-full overflow-hidden pt-20">

                {/* Top subtle glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-primary/10 blur-[120px] pointer-events-none"></div>

                <div className="flex-1 flex justify-center py-12 px-6 w-full relative z-10">
                    <div className="max-w-[800px] w-full flex flex-col gap-8">

                        {/* Page Title & Meta */}
                        <div className="border-l-4 border-primary pl-6 py-2">
                            <nav className="flex items-center gap-2 mb-4">
                                <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">WeKrax</span>
                                <span className="text-slate-600 text-xs">/</span>
                                <span className="text-primary text-sm font-bold uppercase tracking-widest">Legal</span>
                            </nav>
                            <h1 className="text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tighter mb-2">
                                Política de <span className="text-primary drop-shadow-[0_0_15px_rgba(255,95,0,0.4)]">Privacidad</span>
                            </h1>
                            <p className="text-slate-500 text-base font-medium">Última actualización: 24 de Octubre, 2023</p>
                        </div>

                        {/* Hero Image placeholder */}
                        <div className="w-full h-48 rounded-2xl overflow-hidden relative group border border-white/5 neon-border magnetic-hover">
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCxyvJYr6GkQFF6NRphNI5JOKzCD9E2J5olKmamlJPgAWdjs0bwaRY9jzyoUICsKPPjVHj2Hnyd5GBD3WUlyPuv9Bs54YGUATiqO4z1j_xqDRfiRYI7ZwUf_mVzvnzR1SXXGdAG7CIJyFjivJ6-Rz0BjxxethKwyFkCTVAgig6VL5CwDjMXtA83TOMrFgRxzA3icqzbdJSPVyA8iTv6RmeDIhklZc3ElBmBYOJtebDCXGE0LQdYs7_NwQqOrctnxSjkKNZzVeOEO1JR"
                                alt="Abstract digital security network with orange light pulses"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60"
                            />
                        </div>

                        {/* Content Sections */}
                        <div className="flex flex-col gap-12 mt-4 glass-panel p-8 md:p-12 rounded-[2rem] border border-white/5 shadow-2xl relative">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,95,0,0.05)_0%,transparent_50%)] rounded-[2rem] pointer-events-none"></div>

                            <section className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_10px_rgba(255,95,0,0.8)]">database</span>
                                    <h2 className="text-slate-100 text-2xl font-bold tracking-tight">1. Recopilación de Datos</h2>
                                </div>
                                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                                    <p>
                                        En WeKrax, la privacidad de nuestros clientes y visitantes es fundamental. Recopilamos información personal solo cuando es estrictamente necesario para proporcionar nuestros servicios de consultoría y desarrollo.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-slate-400 marker:text-primary">
                                        <li>Datos de contacto (nombre, email, teléfono).</li>
                                        <li>Información técnica sobre el uso del sitio web.</li>
                                        <li>Documentación proporcionada para proyectos específicos.</li>
                                    </ul>
                                </div>
                            </section>

                            <section className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_10px_rgba(255,95,0,0.8)]">psychology</span>
                                    <h2 className="text-slate-100 text-2xl font-bold tracking-tight">2. Uso de Inteligencia Artificial</h2>
                                </div>
                                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                                    <p>
                                        Como agencia de vanguardia, utilizamos herramientas de IA para optimizar nuestros procesos. Sin embargo, garantizamos que:
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors magnetic-hover">
                                            <h3 className="text-white font-bold mb-2">Privacidad de Datos</h3>
                                            <p className="text-slate-400 text-sm">Ningún dato sensible del cliente se utiliza para entrenar modelos de IA públicos.</p>
                                        </div>
                                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-colors magnetic-hover">
                                            <h3 className="text-white font-bold mb-2">Transparencia</h3>
                                            <p className="text-slate-400 text-sm">Informamos siempre que un proceso crítico haya sido asistido por algoritmos de IA.</p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_10px_rgba(255,95,0,0.8)]">security</span>
                                    <h2 className="text-slate-100 text-2xl font-bold tracking-tight">3. Seguridad</h2>
                                </div>
                                <div className="space-y-4 text-slate-300 leading-relaxed text-lg">
                                    <p>
                                        Implementamos medidas técnicas y organizativas robustas para proteger su información contra accesos no autorizados, pérdida o alteración. Nuestro ecosistema digital está cifrado de extremo a extremo y auditado periódicamente.
                                    </p>
                                </div>
                            </section>

                            <section className="flex flex-col gap-4 relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-primary text-3xl drop-shadow-[0_0_10px_rgba(255,95,0,0.8)]">share_reviews</span>
                                    <h2 className="text-slate-100 text-2xl font-bold tracking-tight">4. Compartición de Información</h2>
                                </div>
                                <p className="text-slate-300 leading-relaxed text-lg">
                                    WeKrax no vende, alquila ni distribuye su información personal a terceros con fines comerciales. Solo compartimos datos con proveedores de servicios críticos bajo estrictos acuerdos de confidencialidad.
                                </p>
                            </section>
                        </div>

                        {/* Contact / Footer in content area */}
                        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col items-center text-center gap-6 pb-16 relative z-10">
                            <p className="text-slate-400 max-w-md italic">
                                "La confianza es el pilar de nuestra agencia. Proteger sus datos es proteger nuestro futuro."
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="mailto:jeremias07leiva@gmail.com" className="bg-black hover:bg-white/5 text-slate-100 px-8 py-3 rounded-full text-sm font-bold border border-white/20 hover:border-white/40 transition-all magnetic-hover backdrop-blur-md">
                                    Contactar DPO
                                </a>
                                <Link href="/terminos" className="bg-primary hover:bg-primary/90 text-black px-8 py-3 rounded-full text-sm font-bold transition-all magnetic-hover shadow-[0_0_20px_rgba(255,95,0,0.3)] hover:shadow-[0_0_30px_rgba(255,95,0,0.6)]">
                                    Ver Términos Generales
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
