import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Corporate from "./pages/Corporate";
import AboutV2 from "./pages/v2/AboutV2";
import PrivacyV2 from "./pages/v2/PrivacyV2";
import TermsV2 from "./pages/v2/TermsV2";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import HOAServices from "./pages/services/HOAServices";
import ApartmentServices from "./pages/services/ApartmentServices";
import RetailServices from "./pages/services/RetailServices";
import LogisticsServices from "./pages/services/LogisticsServices";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/v2" element={<Corporate />} />
            <Route path="/v2/about" element={<AboutV2 />} />
            <Route path="/v2/privacy" element={<PrivacyV2 />} />
            <Route path="/v2/terms" element={<TermsV2 />} />
            <Route path="/services/hoa" element={<HOAServices />} />
            <Route path="/services/apartments" element={<ApartmentServices />} />
            <Route path="/services/retail" element={<RetailServices />} />
            <Route path="/services/logistics" element={<LogisticsServices />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
