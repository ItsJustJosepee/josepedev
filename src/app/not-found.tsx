// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <Link href="/">Volver al inicio</Link>
    </div>
  );
}
