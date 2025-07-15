import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'MentorMind',
    short_name: 'MentorMind',
    description: 'MentorMind is a platform for students and early career professionals to find career guidance and mentorship with AI.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#008080',
    icons: [
      {
        src: '/favicon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/favicon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}