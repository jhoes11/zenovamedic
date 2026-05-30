import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Nosotros from "./pages/Nosotros";
import Servicios from "./pages/Servicios";
import Tienda from "./pages/Tienda";
import Contacto from "./pages/Contacto";
import LibroReclamaciones from "./pages/LibroReclamaciones";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-20">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/tienda" element={<Tienda />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/libro-reclamaciones" element={<LibroReclamaciones />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
