import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const facilities = [
  {
    title: "State-of-the-art Facility",
    image: "https://images.unsplash.com/photo-1496247749665-49cf5b1022e9",
    description: "Modern manufacturing unit with latest technology"
  },
  {
    title: "Quality Control",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    description: "Rigorous testing at every production stage"
  },
  {
    title: "Processing Units",
    image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85",
    description: "Advanced processing equipment for precision"
  }
];

export default function Manufacturing() {
  return (
    <section className="py-16 bg-accent/5">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Manufacturing Excellence</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our state-of-the-art manufacturing facility ensures the highest quality standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="p-4">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="font-semibold mb-2">{facility.title}</h3>
                  <p className="text-sm text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
