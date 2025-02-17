
import { ExternalLink, FileText, Link, FileInput } from "lucide-react";

const QuickLinks = () => {
  const departments = [
    {
      title: "قطاع الشؤون المؤسسية",
      sections: [
        {
          title: "الأنظمة الخارجية",
          items: [
            { name: "نظام الموارد البشرية", icon: ExternalLink },
            { name: "نظام المراسلات", icon: ExternalLink },
          ],
        },
        {
          title: "النماذج والطلبات",
          items: [
            { name: "طلب إجازة", icon: FileInput },
            { name: "طلب مأمورية", icon: FileInput },
          ],
        },
      ],
    },
    {
      title: "قطاع التسجيل والخدمات العقارية",
      sections: [
        {
          title: "الوثائق والنماذج",
          items: [
            { name: "دليل الإجراءات", icon: FileText },
            { name: "نماذج التسجيل", icon: FileText },
          ],
        },
        {
          title: "روابط سريعة",
          items: [
            { name: "بوابة التدريب", icon: Link },
            { name: "الدعم الفني", icon: Link },
          ],
        },
      ],
    },
  ];

  return (
    <div className="mt-8 space-y-8">
      {departments.map((department) => (
        <div key={department.title} className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-bold text-dubai-primary">
            {department.title}
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {department.sections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-lg font-semibold text-dubai-secondary">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <a
                        href="#"
                        className="flex items-center gap-2 text-gray-600 transition-colors hover:text-dubai-secondary"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
