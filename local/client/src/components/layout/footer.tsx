import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  return (
    <footer className="bg-secondary/10 border-t">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Logo size={36} />
              <h3 className="font-bold text-lg">Abhirami Mirror Industry</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Premier glass and mirror manufacturer in Kannur, Kerala, delivering quality solutions since 1995.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/about-us" className="block text-sm text-muted-foreground hover:text-primary">About Us</Link>
              <Link href="/products" className="block text-sm text-muted-foreground hover:text-primary">Products</Link>
              <Link href="/services" className="block text-sm text-muted-foreground hover:text-primary">Services</Link>
              <Link href="/contact" className="block text-sm text-muted-foreground hover:text-primary">Contact</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Industrial Area, Kannur, Kerala
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 94466 58540
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 96056 56294
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                info@abhiramimirror.com
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Working Hours</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Abhirami Mirror Industry. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}