import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const products = [ 
  {
    title: "Shower Enclosures & Partitions",
    image: "/public/images/shower.png",
    description: "Custom glass solutions for bathrooms and offices",
  },
  {
    title: "Mirrors (Silver, Gray, Gold, Bronze, Colored, Tinted, Antique, LED)",
    image: "/public/images/led.png",
    description: "Various types for decoration and functional use.",
  },
  {
    title: "Laminated Glass",
    image: "/public/images/shelf.png",
    description: "Multi-layered glass with plastic interlayers for safety and soundproofing",
  },
  {
    title: "Glass Table Tops & Shelves",
    image: "/public/images/table.jpeg",
    description: "High-quality glass for furniture and display applications",
  },
  {
    title: "Glass Railings & Balustrades",
    image: "/public/images/rail.png",
    description: "Safety and decorative solutions for staircases and balconiess",
  },
  {
    title: "Automotive, Industrial & Medical Glass",
    image: "/public/images/microscope.jpg",
    description: "High-performance glass for vehicles, machinery, microscopy, and healthcare applications",
  },
  {
    title: "Tempered/Toughened Glass",
    image: "/public/images/tough.jpg",
    description: "Superior strength and safety for various applications",
  },
  {
    title: "Aranmula Kannadi",
    image: "/images/ar1.jpg",
    description: "Exquisite Handmade Metal Mirrors from Kerala",
  },
  {
    title: "Decorative & Textured Glass",
    image: "/images/dome.jpg",
    description: " Includes frosted, etched, stained, brick and patterned glass for aesthetic applications",
  }
];


export default function Products() {
  return (
    <div className="py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of glass products, each crafted with precision and care to meet your specific needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-0">
                  <AspectRatio ratio={4/3}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover rounded-t-lg"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
