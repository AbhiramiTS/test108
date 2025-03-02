"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-secondary/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Products</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of premium glass products crafted with precision and care.
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          navigation
          className="pb-6"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="shadow-lg">
                  <CardContent className="p-0">
                    <AspectRatio ratio={4 / 3}>
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
