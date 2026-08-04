
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import ServicePage from "./pages/ServicePage";
import PromotionPage from "./pages/PromotionPage";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import Cabinet from "./pages/Cabinet";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import useVisitTracker from "./hooks/useVisitTracker";

const queryClient = new QueryClient();

function AppRoutes() {
  useVisitTracker();
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/service/:slug" element={<ServicePage />} />
      <Route path="/promotion" element={<PromotionPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cabinet" element={<Cabinet />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;