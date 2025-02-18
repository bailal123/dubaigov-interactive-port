
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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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

  const tasks = [
    { date: new Date(2024, 2, 15), title: "اجتماع مجلس الإدارة" },
    { date: new Date(2024, 2, 20), title: "ورشة عمل التخطيط الاستراتيجي" },
    { date: new Date(2024, 2, 25), title: "لقاء الموظفين الشهري" },
  ];

  return (
    <div className={`min-h-screen bg-dubai-light dark:bg-gray-900 font-noto ${isDarkMode ? "dark" : ""}`}>
      <Header />
      
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed right-4 top-4 z-20 rounded-lg bg-dubai-primary p-2 text-white shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </button>
      
      <button
        onClick={() => setCalendarOpen(true)}
        className="fixed left-4 top-4 z-20 rounded-full bg-dubai-secondary p-3 text-white shadow-lg transition-transform hover:scale-105"
      >
        <Calendar className="h-6 w-6" />
      </button>

      <Dialog open={calendarOpen} onOpenChange={setCalendarOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center">
              {language === "ar" ? "التقويم والمهام" : "Calendar & Tasks"}
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center">
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date) => setSelectedDate(date)}
                inline
                locale={language === "ar" ? "ar-SA" : "en-US"}
              />
              <div className="mt-4 w-full space-y-2">
                <h3 className="font-semibold">
                  {language === "ar" ? "المهام القادمة" : "Upcoming Tasks"}
                </h3>
                {tasks.map((task, index) => (
                  <div
                    key={index}
                    className="rounded-lg border bg-white p-3 shadow-sm dark:bg-gray-800"
                  >
                    <p className="text-sm font-medium">{task.title}</p>
                    <p className="text-xs text-gray-500">
                      {task.date.toLocaleDateString(language === "ar" ? "ar-SA" : "en-US")}
                    </p>
                  </div>
                ))}
              </div>
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
        title="تعميم جديد"
        content="نود إعلامكم بتحديث سياسات العمل المرن. يرجى الاطلاع على التفاصيل في صفحة السياسات والإجراءات."
      />
    </div>
  );
};

export default Index;
