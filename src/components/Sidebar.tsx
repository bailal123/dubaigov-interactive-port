
import { X, Bell, FileText, Settings, Users, Building2, Inbox } from "lucide-react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const menuItems = [
    {
      title: "الإشعارات",
      icon: Bell,
      count: 5,
    },
    {
      title: "البريد الوارد",
      icon: Inbox,
      count: 3,
    },
    {
      title: "القطاعات",
      icon: Building2,
      items: [
        "قطاع الشؤون المؤسسية",
        "قطاع التسجيل والخدمات العقارية",
        "قطاع الأراضي",
      ],
    },
    {
      title: "الموظفين",
      icon: Users,
      items: [
        "دليل الموظفين",
        "الهيكل التنظيمي",
        "فريق العمل",
      ],
    },
    {
      title: "المعاملات",
      icon: FileText,
      items: [
        "الطلبات المقدمة",
        "الطلبات المعلقة",
        "الطلبات المكتملة",
      ],
    },
    {
      title: "الإعدادات",
      icon: Settings,
    },
  ];

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-40 h-screen w-80 transform overflow-y-auto bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute left-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mt-12">
          <h2 className="mb-6 text-xl font-bold text-dubai-primary">القائمة الرئيسية</h2>
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <div key={item.title} className="space-y-2">
                <button className="flex w-full items-center justify-between rounded-lg p-3 text-gray-600 transition-colors hover:bg-dubai-light hover:text-dubai-primary">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </div>
                  {item.count && (
                    <span className="rounded-full bg-dubai-primary px-2 py-1 text-xs text-white">
                      {item.count}
                    </span>
                  )}
                </button>
                {item.items && (
                  <div className="mr-8 space-y-1 border-r border-gray-200 pr-4">
                    {item.items.map((subItem) => (
                      <button
                        key={subItem}
                        className="flex w-full rounded-lg py-2 text-sm text-gray-500 transition-colors hover:text-dubai-primary"
                      >
                        {subItem}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
