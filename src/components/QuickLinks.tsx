
import { ExternalLink, FileText, Link } from "lucide-react";

const QuickLinks = () => {
  const links = [
    {
      title: "الأنظمة الخارجية",
      items: [
        { name: "نظام الموارد البشرية", icon: ExternalLink },
        { name: "نظام المراسلات", icon: ExternalLink },
        { name: "البريد الإلكتروني", icon: ExternalLink },
      ],
    },
    {
      title: "الوثائق والنماذج",
      items: [
        { name: "دليل الموظف", icon: FileText },
        { name: "نماذج الموارد البشرية", icon: FileText },
        { name: "السياسات والإجراءات", icon: FileText },
      ],
    },
    {
      title: "روابط سريعة",
      items: [
        { name: "بوابة التدريب", icon: Link },
        { name: "خدمات تقنية المعلومات", icon: Link },
        { name: "الدعم الفني", icon: Link },
      ],
    },
  ];

  return (
    <div className="mt-8 grid gap-6 md:grid-cols-3">
      {links.map((section) => (
        <div
          key={section.title}
          className="rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md"
        >
          <h3 className="mb-4 text-lg font-semibold text-dubai-primary">
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
  );
};

export default QuickLinks;
