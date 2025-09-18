import Image from 'next/image';

export default function Footer() {
    return (
        <footer>
            <p>© 2025 Josepe Dev. Todos los derechos reservados.</p>
            <div>
                {/* Profesional / Tech - siempre visibles */}
                <a href="https://github.com/ItsJustJosepee" target="_blank" rel="noopener noreferrer">
                    <Image src="/github.svg" alt="GitHub" width={24} height={24} className="sm" />
                </a>
                <a href="https://x.com/itsjustjosepee" target="_blank" rel="noopener noreferrer">
                    <Image src="/x.svg" alt="X" width={24} height={24} className="sm" />
                </a>

                {/* Contenido y personal - solo desktop */}
                <a href="https://www.youtube.com/@justjosepee_" target="_blank" rel="noopener noreferrer" className="ms">
                    <Image src="/youtube.svg" alt="Youtube" width={24} height={24} className="sm" />
                </a>
                <a href="https://www.twitch.tv/itsjustjosepee" target="_blank" rel="noopener noreferrer" className="ms">
                    <Image src="/twitch.svg" alt="Twitch" width={24} height={24} className="sm" />
                </a>
                <a href="https://www.tiktok.com/@justjosepee_" target="_blank" rel="noopener noreferrer" className="ms">
                    <Image src="/tiktok.svg" alt="TikTok" width={24} height={24} className="sm" />
                </a>
                <a href="https://www.instagram.com/justjosepeee_" target="_blank" rel="noopener noreferrer" className="ms">
                    <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="sm" />
                </a>
                <a href="https://open.spotify.com/user/31p4w35fsnhguickepfaccipr5wi" target="_blank" rel="noopener noreferrer" className="ms">
                    <Image src="/spotify.svg" alt="Spotify" width={24} height={24} className="sm" />
                </a>
            </div>
        </footer>
    );
}
