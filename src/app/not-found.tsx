// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4.5rem)] bg-orange-300 text-center">
      <h1 className="text-6xl font-bold text-black">404</h1>
      <p className="text-2xl mt-4 text-black">Página no encontrada</p>
      <Link
        href="/"
        className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
