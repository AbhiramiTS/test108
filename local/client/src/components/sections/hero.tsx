import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Hero() {
  return (
    <div className="relative bg-background min-h-[600px] flex items-center">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Where Tradition Meets Innovation in Glass
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Leading glass manufacturer in Kannur, combining traditional craftsmanship with cutting-edge technology. From custom designs to smart glass solutions, we're shaping the future of glass manufacturing.
            </motion.p>

            <motion.div
              className="space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button asChild size="lg">
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AspectRatio ratio={4/3} className="overflow-hidden rounded-lg bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="Modern glass manufacturing facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent" />
            </AspectRatio>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1520164126806-d75ade72e6e3')] bg-cover bg-center"
          style={{ opacity: 0.1 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/20" />
      </div>
    </div>
  );
}