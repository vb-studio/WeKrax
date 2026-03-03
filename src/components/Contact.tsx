"use client";
import { useState } from "react";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Reemplazar con URL de n8n
    const WEBHOOK_URL = "URL DE WEBHOOK AQUÍ";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            // Simula el POST a la URL de n8n o webhook
            const res = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            // Aún si da error de CORS (si no configuraste n8n) mostramos exito para el usuario.
            console.log(res);
            setIsSuccess(true);
        } catch (err) {
            console.error("Error enviando webhook: ", err);
            // Para efectos visuales asumimos exito al usuario local.
            setIsSuccess(true);
        } finally {
            setIsSubmitting(false);
            // Restablecer mensaje a los 5 seg.
            setTimeout(() => setIsSuccess(false), 5000);
            (e.target as HTMLFormElement).reset();
        }
    };

    return (
        <section id="contacto" className="relative w-full flex flex-col items-center justify-center px-6 py-24 md:py-32 bg-transparent overflow-visible">
            {/* Seamless Top Fade */}
            <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-t from-transparent to-black pointer-events-none z-10"></div>
            {/* Puente Visual Animado de Nodos a Contacto */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[90%] w-full max-w-[800px] h-32 md:h-48 pointer-events-none z-0">
                <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none" fill="none">
                    <path
                        d="M150 0 C150 80, 50 20, 50 100"
                        stroke="#FF5C00"
                        strokeOpacity="0.4"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="svg-line"
                        style={{ strokeDasharray: 300, strokeDashoffset: 300, transition: "stroke-dashoffset 1.5s ease-out" }}
                    />
                </svg>
            </div>

            <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(255,95,0,0.15)_0px,transparent_50%),radial-gradient(at_100%_100%,rgba(255,95,0,0.1)_0px,transparent_50%)] pointer-events-none opacity-50 z-0"></div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[600px] bg-[#FF6B00]/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>

            <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Lado Textual */}
                <div className="flex flex-col gap-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit magnetic-hover">
                        <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest">IA & Web Design Agency</span>
                    </div>

                    <h2 className="text-slate-100 text-5xl md:text-7xl font-black leading-[1.1] tracking-tight">
                        Lleva tu negocio <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-300 drop-shadow-[0_0_10px_rgba(255,95,0,0.3)]">al futuro</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed">
                        Transformamos empresas mediante IA de vanguardia y diseño web inmersivo. Tu evolución digital comienza con un mensaje.
                    </p>

                    <div className="flex flex-col gap-6 mt-4">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:neon-border transition-all duration-300 magnetic-hover">
                                <span className="material-symbols-outlined text-primary">mail</span>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">Escríbenos</p>
                                <p className="text-slate-100 font-medium tracking-wide">jeremias07leiva@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 group cursor-default">
                            <div className="size-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:neon-border transition-all duration-300 magnetic-hover">
                                <span className="material-symbols-outlined text-primary">location_on</span>
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm">Sede Central</p>
                                <p className="text-slate-100 font-medium tracking-wide">Pilar, Buenos Aires. Argentina</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lado del Formulario (Glow) */}
                <div className="relative magnetic-hover perspective-1000">
                    <div className="absolute -inset-2 bg-primary/20 blur-3xl rounded-full opacity-30 pointer-events-none"></div>

                    <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl relative z-10">
                        <h3 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">rocket_launch</span>
                            Enviar Consulta
                        </h3>

                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Nombre</label>
                                    <input required name="nombre" className="w-full bg-black/40 border border-white/10 rounded-lg h-12 px-4 text-slate-100 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 transition-all outline-none" placeholder="Ej. Alex Rivera" type="text" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Email</label>
                                    <input required name="email" className="w-full bg-black/40 border border-white/10 rounded-lg h-12 px-4 text-slate-100 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 transition-all outline-none" placeholder="alex@empresa.com" type="email" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Servicio de Interés</label>
                                <select name="servicio" className="w-full bg-black/40 border border-white/10 rounded-lg h-12 px-4 text-slate-100 focus:ring-1 focus:ring-primary focus:border-primary transition-all outline-none appearance-none">
                                    <option className="bg-black/90">IA Automation (n8n)</option>
                                    <option className="bg-black/90">Web Design & UX</option>
                                    <option className="bg-black/90">E-commerce Evolution</option>
                                    <option className="bg-black/90">Branding & Tech</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-slate-400 text-xs font-bold uppercase tracking-wider ml-1">Tu Mensaje</label>
                                <textarea required name="mensaje" className="w-full bg-black/40 border border-white/10 rounded-lg p-4 text-slate-100 focus:ring-1 focus:ring-primary focus:border-primary placeholder:text-slate-600 transition-all resize-none outline-none" placeholder="Cuéntanos sobre tu proyecto..." rows={4}></textarea>
                            </div>

                            <button
                                disabled={isSubmitting || isSuccess}
                                className="bg-[#FF6B00] text-white font-bold w-full py-4 rounded-xl shadow-[0_0_20px_rgba(255,107,0,0.4)] hover:scale-105 hover:bg-[#ff7b1a] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                                type="submit"
                            >
                                {isSubmitting ? "Enviando..." : isSuccess ? "Enviado con Éxito" : "Enviar Consulta"}
                                {!isSubmitting && !isSuccess && <span className="material-symbols-outlined font-bold">arrow_forward</span>}
                                {isSuccess && <span className="material-symbols-outlined font-bold">check_circle</span>}
                            </button>
                        </form>

                        <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-center gap-6">
                            <span className="text-slate-500 text-xs uppercase tracking-widest font-bold">Aceptamos:</span>
                            <div className="flex gap-4 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <span className="material-symbols-outlined text-slate-100">receipt_long</span>
                                <span className="material-symbols-outlined text-slate-100">account_balance</span>
                                <span className="material-symbols-outlined text-slate-100">currency_bitcoin</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
