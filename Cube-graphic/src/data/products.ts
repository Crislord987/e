export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock: boolean;
  features: string[];
  sizes: string[];
  gallery: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Roll Up Banners',
    slug: 'roll-up-banners',
    description: 'Banners retráctiles de alta calidad para eventos y exhibiciones',
    price: 117700,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop',
    category: 'Foto Productos',
    inStock: true,
    features: [
      'Material de alta calidad resistente',
      'Fácil instalación y transporte',
      'Impresión de alta resolución',
      'Incluye estuche de transporte',
      'Base estable y duradera'
    ],
    sizes: ['80cm x 200cm', '100cm x 200cm', '120cm x 200cm', '150cm x 200cm'],
    gallery: [
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1200&fit=crop',
    ]
  },
  {
    id: 2,
    name: 'Banner Stands Premium',
    slug: 'banner-stands-premium',
    description: 'Estructuras profesionales para presentaciones corporativas',
    price: 185000,
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1200&fit=crop',
    category: 'Foto Productos',
    inStock: true,
    features: [
      'Estructura premium de aluminio',
      'Diseño elegante y profesional',
      'Cambio rápido de gráficos',
      'Iluminación LED opcional',
      'Garantía extendida'
    ],
    sizes: ['100cm x 200cm', '120cm x 200cm', '150cm x 200cm'],
    gallery: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=1200&fit=crop',
    ]
  },
  {
    id: 3,
    name: 'Banners Personalizados',
    slug: 'banners-personalizados',
    description: 'Diseños únicos adaptados a tus necesidades',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=1200&fit=crop',
    category: 'Foto Productos',
    inStock: true,
    features: [
      'Diseño 100% personalizado',
      'Múltiples acabados disponibles',
      'Impresión eco-friendly',
      'Asesoría de diseño incluida',
      'Entrega rápida'
    ],
    sizes: ['Personalizado'],
    gallery: [
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop',
    ]
  },
  {
    id: 4,
    name: 'Señalización Corporativa',
    slug: 'senalizacion-corporativa',
    description: 'Soluciones profesionales para espacios comerciales',
    price: 245000,
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=1200&fit=crop',
    category: 'Señalización',
    inStock: true,
    features: [
      'Materiales premium duraderos',
      'Instalación profesional incluida',
      'Diseño corporativo personalizado',
      'Múltiples opciones de montaje',
      'Garantía de 2 años'
    ],
    sizes: ['Personalizado según necesidad'],
    gallery: [
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=800&h=1200&fit=crop',
    ]
  },
  {
    id: 5,
    name: 'Impresión Gran Formato',
    slug: 'impresion-gran-formato',
    description: 'Impresión de alta resolución en grandes dimensiones',
    price: 156000,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop',
    category: 'Impresión Digital Gran Formato',
    inStock: true,
    features: [
      'Resolución 1440 DPI',
      'Tintas UV resistentes',
      'Acabados mate o brillante',
      'Hasta 5 metros de ancho',
      'Color garantizado'
    ],
    sizes: ['1m x 2m', '2m x 3m', '3m x 5m', 'Personalizado'],
    gallery: [
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=1200&fit=crop',
    ]
  },
  {
    id: 6,
    name: 'Material POP',
    slug: 'material-pop',
    description: 'Elementos publicitarios para punto de venta',
    price: 78000,
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop',
    category: 'Artículos Promocionales POP',
    inStock: true,
    features: [
      'Exhibidores de mostrador',
      'Displays promocionales',
      'Material resistente',
      'Fácil armado',
      'Diseño llamativo'
    ],
    sizes: ['Varios tamaños disponibles'],
    gallery: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=1200&fit=crop',
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1200&fit=crop',
    ]
  },
];

export const categories = [
  'Papelería Comercial',
  'Impresión Digital Laser',
  'Avisos',
  'Impresión Digital Gran Formato',
  'Fotoplano',
  'Impresión DTF',
  'Corte Laser',
  'Señalización',
  'Retablos',
  'Artículos Promocionales POP',
  'Foto Productos',
  'Impresión de Documentos',
  'Camisetas',
  'Portapendones',
];
