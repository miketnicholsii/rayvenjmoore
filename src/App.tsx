import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import BackToTop from "@/components/ui/BackToTop";
import MobileCTA from "@/components/ui/MobileCTA";
import PageTransition from "@/components/layout/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Career from "./pages/Career";
import Manifesto from "./pages/Manifesto";
import Ventures from "./pages/Ventures";
import VentureDetail from "./pages/VentureDetail";
import CaseStudies from "./pages/CaseStudies";
import Resources from "./pages/Resources";
import Speaking from "./pages/Speaking";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
        <Route path="/manifesto" element={<PageTransition><Manifesto /></PageTransition>} />
        <Route path="/ventures" element={<PageTransition><Ventures /></PageTransition>} />
        <Route path="/ventures/:id" element={<PageTransition><VentureDetail /></PageTransition>} />
        <Route path="/case-studies" element={<PageTransition><CaseStudies /></PageTransition>} />
        <Route path="/resources" element={<PageTransition><Resources /></PageTransition>} />
        <Route path="/speaking" element={<PageTransition><Speaking /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
        <BackToTop />
        <MobileCTA />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
