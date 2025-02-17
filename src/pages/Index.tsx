
import { useState } from "react";
import { Menu, Calendar } from "lucide-react";
import Banner from "@/components/Banner";
import NewsAlert from "@/components/NewsAlert";
import QuickLinks from "@/components/QuickLinks";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dubai-light font-noto">
      <Header />
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed right-4 top-4 z-20 rounded-lg bg-dubai-primary p-2 text-white shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </button>
      
      {/* Floating Calendar Button */}
      <button
        onClick={() => {
          // Add calendar functionality here
        }}
        className="fixed left-4 top-4 z-20 rounded-full bg-dubai-secondary p-3 text-white shadow-lg transition-transform hover:scale-105"
      >
        <Calendar className="h-6 w-6" />
      </button>
      
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="container mx-auto py-6">
        <Banner />
        <QuickLinks />
      </main>
      <Footer />
      <NewsAlert
        title="تعميم جديد"
        content="نود إعلامكم بتحديث سياسات العمل المرن. يرجى الاطلاع على التفاصيل في صفحة السياسات والإجراءات."
      />
    </div>
  );
};

export default Index;
