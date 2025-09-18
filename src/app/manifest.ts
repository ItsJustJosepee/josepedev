import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Josepe Dev',
    short_name: 'Josepe',
    description: 'Sitio Web de Josepe',
    start_url: '/',
    display: 'standalone',
    background_color: '#fdba74',
    theme_color: '#f97316',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      }
    ],
  };
}
