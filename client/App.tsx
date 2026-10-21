import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "./components/theme-provider";
import { LocaleProvider } from "./i18n";

const queryClient = new QueryClient();

function LocalizedNotFound() {
  const { pathname } = useLocation();
  return <LocaleProvider locale={pathname.startsWith("/ar/") ? "ar" : "en"}><NotFound /></LocaleProvider>;
}

const App = () => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem
    disableTransitionOnChange
  >
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LocaleProvider locale="en"><Index /></LocaleProvider>} />
            <Route path="/en" element={<LocaleProvider locale="en"><Index /></LocaleProvider>} />
            <Route path="/ar" element={<LocaleProvider locale="ar"><Index /></LocaleProvider>} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<LocalizedNotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
