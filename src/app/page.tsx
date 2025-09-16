import Image from "next/image";

export default function Home() {
  return (
    <section className="p-6">
      <h3>Biografía</h3>
      <div className="img-div">
        <Image
            src="/foto.jpg"
            alt="Logo de Josepe Dev"
            width={300}
            height={300}
            sizes="{max-width: 768px} 100vw, 50vw"
            className="img-split"
          />
        <p className="img-txt">
        Hola, soy José Barajas (Josepe), un chico de 16 años quien le gusta jugar videojuegos como Minecraft, Geometry Dash y roblox<br></br>
        Me encanta escuchar música, amo a artistas como Ariana Grande, Billie Eilish, Magdalena Bay, etc.<br></br>
        También me apasiona la programación y la tecnología, siempre estoy aprendiendo cosas nuevas.<br></br>
        Me considero sociable, me gusta hacer amigos y ayudar a las personas :)<br></br>
        Disfruto de la pizza, ver peliculas y series, y pasar tiempo con mi familia y amigos •-•
        </p>
      </div>
      
      <br></br>
      <h3>Proyectos de Código </h3>
      <p>
        Estoy haciendo algunas aplicaciones de Windows en Visual Studio usando C#.<br></br>
        Así como aplicaciones para android utilizando Android Studio usando Kotlin.<br></br>
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
