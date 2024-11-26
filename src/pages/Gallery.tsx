import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useData } from '../contexts/DataContext';

function Gallery() {
  const { galleryItems, incrementViews } = useData();
  const [activeItems, setActiveItems] = React.useState(galleryItems);

  useEffect(() => {
    setActiveItems(galleryItems.filter(item => item.status === 'active'));
  }, [galleryItems]);

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
          {activeItems.map((item) => (
            <div
              key={item.id}
              className="mb-4"
              onClick={() => incrementViews(item.id, 'gallery')}
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Masonry>

        {activeItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No gallery items available.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;