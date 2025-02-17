
import { useState } from "react";
import { Menu, Calendar, Sun, Moon, Languages } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Banner from "@/components/Banner";
import NewsAlert from "@/components/NewsAlert";
import QuickLinks from "@/components/QuickLinks";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState<"ar" | "en">("ar");

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  // Toggle language
  const toggleLanguage = (lang: "ar" | "en") => {
    setLanguage(lang);
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  };

  return (
    <div className={`min-h-screen font-noto ${isDarkMode ? "dark" : ""} ${language === "ar" ? "rtl" : "ltr"}`}>
      <div className="min-h-screen bg-dubai-light dark:bg-gray-900 transition-colors duration-200">
        <Header />
        
        {/* Theme & Language Controls */}
        <div className="fixed top-4 z-20 flex gap-2" style={{ [language === "ar" ? "left" : "right"]: "6rem" }}>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full bg-white dark:bg-gray-800"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-white dark:bg-gray-800"
              >
                <Languages className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => toggleLanguage("ar")}>
                العربية
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => toggleLanguage("en")}>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Sidebar Toggle Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="fixed z-20 rounded-lg bg-dubai-primary p-2 text-white shadow-lg dark:bg-dubai-secondary"
          style={{ [language === "ar" ? "right" : "left"]: "1rem", top: "1rem" }}
        >
          <Menu className="h-6 w-6" />
        </button>
        
        {/* Calendar Button & Dialog */}
        <button
          onClick={() => setCalendarOpen(true)}
          className="fixed z-20 rounded-full bg-dubai-secondary p-3 text-white shadow-lg transition-transform hover:scale-105 dark:bg-dubai-primary"
          style={{ [language === "ar" ? "left" : "right"]: "1rem", top: "1rem" }}
        >
          <Calendar className="h-6 w-6" />
        </button>

        <Dialog open={calendarOpen} onOpenChange={setCalendarOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <div className="grid gap-4 py-4">
              <div className="flex flex-col items-center">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  inline
                  locale={language === "ar" ? "ar-SA" : "en-US"}
                  dateFormat="Pp"
                  showTimeSelect
                  className="dark:bg-gray-800 dark:text-white"
                />
              </div>
            </div>
          </DialogContent>
        </Dialog>
        
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <main className="container mx-auto py-6">
          <Banner />
          <QuickLinks />
        </main>
        <Footer />
        <NewsAlert
          title={language === "ar" ? "تعميم جديد" : "New Circular"}
          content={
            language === "ar"
              ? "نود إعلامكم بتحديث سياسات العمل المرن. يرجى الاطلاع على التفاصيل في صفحة السياسات والإجراءات."
              : "We would like to inform you about the flexible work policy update. Please check the details in the Policies and Procedures page."
          }
        />
      </div>
    </div>
  );
};

export default Index;
