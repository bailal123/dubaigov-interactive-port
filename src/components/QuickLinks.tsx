
import { ExternalLink, FileText, Link, FileInput } from "lucide-react";

const QuickLinks = () => {
  const sections = [
    {
      title: "الأنظمة الخارجية",
      items: [
        { name: "نظام الموارد البشرية", icon: ExternalLink, image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "نظام المراسلات", icon: ExternalLink, image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "البريد الإلكتروني", icon: ExternalLink, image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "نظام إدارة الوثائق", icon: ExternalLink, image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=300&h=200&q=80" },
      ],
    },
    {
      title: "الروابط المهمة",
      items: [
        { name: "بوابة الخدمات الإلكترونية", icon: Link, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "بوابة التدريب", icon: Link, image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "خدمات تقنية المعلومات", icon: Link, image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "الدعم الفني", icon: Link, image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=300&h=200&q=80" },
      ],
    },
    {
      title: "النماذج والطلبات",
      items: [
        { name: "طلب إجازة", icon: FileInput, image: "https://images.unsplash.com/photo-1576267423048-15c0040fec78?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "طلب مأمورية", icon: FileInput, image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "طلب إذن خروج", icon: FileInput, image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "نموذج تقييم الأداء", icon: FileInput, image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=300&h=200&q=80" },
      ],
    },
    {
      title: "المكتبة الإلكترونية",
      items: [
        { name: "دليل الموظف", icon: FileText, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "السياسات والإجراءات", icon: FileText, image: "https://images.unsplash.com/photo-1485988412941-77a35537dae4?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "التعاميم", icon: FileText, image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=300&h=200&q=80" },
        { name: "القرارات الإدارية", icon: FileText, image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=300&h=200&q=80" },
      ],
    },
  ];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {sections.map((section) => (
        <div
          key={section.title}
          className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md dark:bg-gray-800"
        >
          <h3 className="mb-4 text-lg font-semibold text-dubai-primary dark:text-white">
            {section.title}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {section.items.map((item) => (
              <a
                key={item.name}
                href="#"
                className="group relative overflow-hidden rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-32 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-4 text-white">
                  <div className="absolute bottom-4 flex items-center gap-2">
                    <item.icon className="h-4 w-4" />
                    <span className="text-sm font-medium">{item.name}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
