import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scissors, Layers, Ruler, Wrench } from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    title: "Custom Cutting",
    description: "Precision cutting services for any glass type and size",
    icon: Scissors,
  },
  {
    title: "Glass Processing",
    description: "Advanced processing including tempering and lamination",
    icon: Layers,
  },
  {
    title: "Custom Designs",
    description: "Bespoke glass solutions tailored to your requirements",
    icon: Ruler,
  },
  {
    title: "Installation",
    description: "Professional installation by experienced technicians",
    icon: Wrench,
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive glass processing services with state-of-the-art technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <service.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/services">
            <button className="text-gray-600 font-semibold text-lg underline underline-offset-2 decoration-gray-300">
              View All
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
