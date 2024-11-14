import React from 'react';
import Masonry from 'react-masonry-css';

interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  url: string;
  title: string;
  description: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80',
    title: 'Wildlife Safari',
    description: 'Capturing the majesty of African wildlife'
  },
  {
    id: '2',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?auto=format&fit=crop&q=80',
    title: 'Cultural Festival',
    description: 'Local celebrations and traditions'
  },
  {
    id: '3',
    type: 'image',
    url: 'https://images.unsplash.com/photo-1523539693385-e5e891eb4465?auto=format&fit=crop&q=80',
    title: 'Artisan Crafts',
    description: 'Traditional craftsmanship in action'
  }
];

function Gallery() {
  const breakpointColumns = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the beauty of our destinations and cultural heritage through our curated collection
          </p>
        </div>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="mb-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                ) : (
                  <video
                    src={item.url}
                    controls
                    className="w-full h-auto"
                  />
                )}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default Gallery;