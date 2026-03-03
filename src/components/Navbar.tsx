import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/40 backdrop-blur-xl transition-all duration-300">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
                <Link href="/" className="flex items-center gap-3 group cursor-pointer">
                    <div className="flex h-10 w-10 overflow-hidden items-center justify-center rounded-lg bg-primary/20 text-black border border-primary/30 group-hover:neon-border transition-all">
                        <Image
                            src="/Logo.png"
                            alt="WeKrax Logo"
                            width={40}
                            height={40}
                            className="object-cover"
                        />
                    </div>
                    <span className="text-2xl font-bold tracking-tighter text-white">
                        WE<span className="text-primary">KRAX</span>
                    </span>
                </Link>

                {/* Contenedor Derecho: Links + Botón Contacto agupados */}
                <div className="flex items-center gap-10">
                    <nav className="hidden items-center gap-8 md:flex">
                        <Link href="/#inicio" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                            Inicio
                        </Link>
                        <Link href="/#servicios" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                            Servicios
                        </Link>
                        <Link href="/#contacto" className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
                            Contacto
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4 border-l border-white/10 pl-6">
                        {/* Botón Primario CTA */}
                        <Link href="/solicitar-demo" className="rounded-full bg-primary px-6 py-2.5 text-xs font-bold uppercase tracking-widest text-black shadow-[0_0_20px_rgba(255,95,0,0.3)] hover:shadow-[0_0_30px_rgba(255,95,0,0.6)] hover:-translate-y-0.5 transition-all duration-300 block">
                            Solicitar Demo
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
