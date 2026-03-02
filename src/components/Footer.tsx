import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="px-6 md:px-20 py-10 border-t border-white/5 glass-panel mt-auto bg-black/80 backdrop-blur-3xl relative z-10">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="flex items-center gap-3 group grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
                    <div className="flex h-8 w-8 overflow-hidden items-center justify-center rounded-lg bg-primary/20 text-black border border-primary/30 group-hover:neon-border transition-all">
                        <Image
                            src="/Logo.png"
                            alt="WeKrax Logo Footer"
                            width={32}
                            height={32}
                            className="object-cover"
                        />
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-white">WeKrax</span>
                </div>

                <p className="text-slate-500 text-sm order-3 md:order-2">
                    © {new Date().getFullYear()} WeKrax Automation. Todos los derechos reservados.
                </p>

                <div className="flex gap-8 order-2 md:order-3">
                    <Link className="text-slate-500 hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold" href="/privacidad">Privacidad</Link>
                    <Link className="text-slate-500 hover:text-primary transition-colors text-xs uppercase tracking-widest font-bold" href="/terminos">Términos</Link>
                </div>

            </div>
        </footer>
    );
}
