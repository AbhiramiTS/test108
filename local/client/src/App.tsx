import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Products from "@/pages/products";
import Services from "@/pages/services";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";
import AboutUs from "./pages/about-us";
import Quote from "./pages/quote";
// import { Quote } from "lucide-react";

function Router() {
  return (
    <div className="min-h-screen flex flex-col w-full">
  <Navbar />
  <main className="w-full px-4">
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/products" component={Products} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/get-a-quote" component={Quote} />
      <Route component={NotFound} />
    </Switch>
  </main>
  <Footer />
</div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
