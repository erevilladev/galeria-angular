import { Injectable } from '@angular/core';
import { ImageItem } from '../models/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private readonly images: ImageItem[] = [
    {
      id: 1,
      title: 'Amanecer en las Altas Montañas',
      category: 'Naturaleza',
      url: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80',
      description: 'Primeros rayos de sol iluminando los picos nevados de una cordillera alpina.',
      author: 'Kaley Dykstra',
      date: '2026-03-15',
      likes: 142,
      tags: ['montañas', 'paisaje', 'amanecer']
    },
    {
      id: 2,
      title: 'Rascacielos Futurista en Tokio',
      category: 'Arquitectura',
      url: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=600&q=80',
      description: 'Perspectiva vertical y simétrica de la arquitectura contemporánea de cristal y acero.',
      author: 'Aleksandar Pasaric',
      date: '2026-04-02',
      likes: 98,
      tags: ['arquitectura', 'ciudad', 'tokio']
    },
    {
      id: 3,
      title: 'Estación de Trabajo y Código',
      category: 'Tecnología',
      url: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80',
      description: 'Entorno de desarrollo de software con código TypeScript en pantallas de alta resolución.',
      author: 'Fotis Fotopoulos',
      date: '2026-04-18',
      likes: 215,
      tags: ['código', 'desarrollo', 'frontend']
    },
    {
      id: 4,
      title: 'Playa de Aguas Turquesas',
      category: 'Viajes',
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
      description: 'Costa tropical con arena blanca, palmeras y olas suaves bajo el sol caribeño.',
      author: 'Sean Oulashin',
      date: '2026-05-10',
      likes: 189,
      tags: ['playa', 'viajes', 'mar']
    },
    {
      id: 5,
      title: 'Bosque Místico en la Niebla',
      category: 'Naturaleza',
      url: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=600&q=80',
      description: 'Árboles centenarios rodeados de una densa bruma matutina en un entorno templado.',
      author: 'Sebastian Unrau',
      date: '2026-05-22',
      likes: 114,
      tags: ['bosque', 'niebla', 'naturaleza']
    },
    {
      id: 6,
      title: 'Composición Geométrica Abstracta',
      category: 'Arte',
      url: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=600&q=80',
      description: 'Exploración plástica con texturas acrílicas, contrastes y dinamismo cromático.',
      author: 'Steve Johnson',
      date: '2026-06-05',
      likes: 87,
      tags: ['arte', 'abstracto', 'textura']
    },
    {
      id: 7,
      title: 'Puente Colgante Iluminado',
      category: 'Arquitectura',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80',
      description: 'Ingeniería estructural y luces urbanas reflejándose en las aguas de la bahía.',
      author: 'Joseph Barrientos',
      date: '2026-06-19',
      likes: 163,
      tags: ['puente', 'noche', 'ingeniería']
    },
    {
      id: 8,
      title: 'Circuitos y Silicio',
      category: 'Tecnología',
      url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
      description: 'Microprocesador con pistas luminosas que simulan interconexiones lógicas.',
      author: 'Alexandre Debiève',
      date: '2026-07-03',
      likes: 275,
      tags: ['hardware', 'chips', 'tecnología']
    },
    {
      id: 9,
      title: 'Callejuelas de Kioto',
      category: 'Viajes',
      url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
      description: 'Calles tradicionales con farolillos de papel y arquitectura histórica en Japón.',
      author: 'Sora Sagano',
      date: '2026-07-28',
      likes: 230,
      tags: ['kioto', 'japón', 'cultura']
    },
    {
      id: 10,
      title: 'Escultura de Metal Pulido',
      category: 'Arte',
      url: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
      description: 'Volúmenes curvos de acero inoxidable interactuando con los reflejos del entorno.',
      author: 'Birmingham Museums Trust',
      date: '2026-08-14',
      likes: 102,
      tags: ['escultura', 'museo', 'diseño']
    },
    {
      id: 11,
      title: 'Cascada en Selva Virgen',
      category: 'Naturaleza',
      url: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=600&q=80',
      description: 'Corriente de agua precipitándose entre vegetación densa y rocas con musgo.',
      author: 'Seth Macey',
      date: '2026-08-30',
      likes: 178,
      tags: ['cascada', 'agua', 'selva']
    },
    {
      id: 12,
      title: 'Cúpula Geodésica',
      category: 'Arquitectura',
      url: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1400&q=85',
      thumbnailUrl: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=600&q=80',
      description: 'Estructura modular de vidrio que resguarda un jardín botánico interior.',
      author: 'Luca Upper',
      date: '2026-09-12',
      likes: 134,
      tags: ['cúpula', 'vidrio', 'botánica']
    }
  ];

  getImages(): ImageItem[] {
    return [...this.images];
  }

  getCategories(): string[] {
    return ['Todas', ...new Set(this.images.map(img => img.category))];
  }

  toggleLike(id: number): ImageItem | undefined {
    const item = this.images.find(img => img.id === id);
    if (!item) return undefined;

    item.liked = !item.liked;
    item.likes += item.liked ? 1 : -1;
    return { ...item };
  }
}
