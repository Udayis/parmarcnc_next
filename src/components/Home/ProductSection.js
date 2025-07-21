import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './ProductSection.css';

const products = [
  {
    id: 1,
    title: 'CNC PRESS BRAKE MACHINE EDGE SERIES',
    image: '/images/CNC PRESS BRAKE MACHINE EDGE SERIES.png',
    url: '/products/edge-series'
  },
  {
    id: 2,
    title: 'REAR CYLINDER HYDRAULIC PRESS BRAKE',
    image: '/images/Hydrolic_press_break_machine_img.png',
    url: '/products/hydraulic-press-break'
  },
  {
    id: 3,
    title: 'CNC PRESS BRAKE MACHINE EDGE H SERIES',
    image: '/images/CNC PRESS BRAKE MACHINE EDGE H SERIES.png',
    url: '/products/edge-h-series'
  },
  {
    id: 4,
    title: 'EDGE SERIES SYNCHRO HYDRAULIC PRESS BRAKE',
    image: '/images/synchro_hydrolic_machine_img.png',
    url: '/products/cnc-press-brake'
  },
  {
    id: 5,
    title: 'VARIABLE RACK ANGLE HYDRAULIC SHEARING MACHINE',
    image: '/images/Sharing_machine_img.png',
    url: '/products/hydraulic-shearing-machine'
  }
];

const ProductSection = () => {
  const router = useRouter();

  const handleProductClick = (url) => {
    router.push(url);
  };

  return (
    <section className="product-section">
      <h2 className="product-section-title">Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => handleProductClick(product.url)}
          >
            <div className="product-image">
              <Image src={product.image} alt={product.title} width={400} height={300} />
            </div>
            <h3 className="product-title">{product.title}</h3>
            <div className="nav-circle">→</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection; 