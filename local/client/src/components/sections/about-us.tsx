import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Award, History, Stars, Users } from "lucide-react";

const achievements = [
  {
    icon: History,
    title: "25+ Years Experience",
    description: "Operating since 1995, formally established in 2004"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized with the Best Entrepreneur Award by DIC, Government of Kerala"
  },
  {
    icon: Stars,
    title: "Expert Craftsmanship",
    description: "Decades of expertise in glass manufacturing"
  },
  {
    icon: Users,
    title: "Trusted Partner",
    description: "Serving businesses and homes across Kerala"
  }
];

export default function AboutUs() {
  return (
    <section id="about" className="scroll-mt-16 py-16">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
          With over two decades of excellence in the glass industry, Abhirami Mirror Industry has established itself as a leading innovator in glass manufacturing and processing. As one of the pioneers of mirror manufacturing in India, our journey began in 1995, and since our formal establishment in 2004, we've continued to push the boundaries of what's possible with glass.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="pt-6">
                  <achievement.icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary/5 rounded-lg p-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Journey</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Starting as craftsmen in 1995, we've grown to become one of Kerala's most trusted names in glass manufacturing. Our dedication to quality and innovation has earned us recognition, including the prestigious Best Entrepreneur Award from DIC, Govt. of Kerala
                </p>
                <p>
                  Today, we combine our traditional expertise with cutting-edge technology, offering everything from classic mirror work to smart glass solutions. Our commitment to excellence and customer satisfaction remains as strong as ever.
                </p>
                
              </div>
            </div>
            <div className="relative h-[300px] bg-[url('/images/cert1_1.jpg')] bg-cover bg-center rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-sm"></p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}