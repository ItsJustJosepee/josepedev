import Image from "next/image";

export default function Home() {
  return (
    <section>

      <div className="img-div">
        <Image
          src="/foto.jpg"
          alt="Foto de Josepe"
          width={600}
          height={600}
          sizes="{max-width: 768px} 100vw, 50vw"
          className="img-split border-4 border-black"
        />

        {/* Iconos sociales solo en móvil */}
        <div className="socials">
          <a href="https://www.youtube.com/@justjosepee_" target="_blank" rel="noopener noreferrer">
            <Image src="/youtube.svg" alt="YouTube" width={24} height={24} />
          </a>
          <a href="https://www.twitch.tv/itsjustjosepee" target="_blank" rel="noopener noreferrer">
            <Image src="/twitch.svg" alt="Twitch" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/justjosepeee_" target="_blank" rel="noopener noreferrer">
            <Image src="/instagram.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="https://www.tiktok.com/@justjosepee_" target="_blank" rel="noopener noreferrer">
            <Image src="/tiktok.svg" alt="TikTok" width={24} height={24} />
          </a>
          <a href="https://open.spotify.com/user/31p4w35fsnhguickepfaccipr5wi" target="_blank" rel="noopener noreferrer">
            <Image src="/spotify.svg" alt="Spotify" width={24} height={24} />
          </a>
        </div>

        <div className="img-txt">
          <h3>Biografía</h3>
          <p>
            Hola, soy José Barajas (Josepe), un chico de 16 años quien le gusta jugar videojuegos como Minecraft, Geometry Dash y roblox<br />
            Me encanta escuchar música, amo a artistas como Ariana Grande, Billie Eilish, Magdalena Bay, etc.<br />
            También me apasiona la programación y la tecnología, siempre estoy aprendiendo cosas nuevas.<br />
            Me considero sociable, me gusta hacer amigos y ayudar a las personas :)<br />
            Disfruto de la pizza, ver peliculas y series, y pasar tiempo con mi familia y amigos •-•
          </p>
        </div>
      </div>


      <br></br>
      <h3>Proyectos de Código </h3>
      <p>
        Estoy haciendo algunas aplicaciones de Windows en Visual Studio usando C#.<br></br>
        Así como aplicaciones para android en Android Studio usando Kotlin.<br></br>
        También estoy aprendiendo a hacer páginas web con HTML, CSS Y JavaScript.

        Recientemente ya estoy viendo sobre TypeScript y el uso de frameworks como AngularJS y Next.js.
      </p>
      <p>
        <b>Actualmente estoy utilizando Next.js para esta página web.</b>
      </p>
      <p>
        Proximamente estaré compartiendo mis aplicaciones aquí en mi sitio web.<br></br>
        ¡Espero que les gusten! •-•
      </p>
    </section>
  );
}
