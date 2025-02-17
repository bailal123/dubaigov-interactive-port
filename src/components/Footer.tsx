
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "فيسبوك" },
    { icon: Twitter, href: "#", label: "تويتر" },
    { icon: Instagram, href: "#", label: "انستغرام" },
    { icon: Linkedin, href: "#", label: "لينكد إن" },
    { icon: Youtube, href: "#", label: "يوتيوب" },
  ];

  const sections = [
    {
      title: "قطاع الشؤون المؤسسية",
      links: ["إدارة الموارد البشرية", "إدارة الشؤون المالية", "إدارة المشتريات"],
    },
    {
      title: "قطاع التسجيل والخدمات العقارية",
      links: ["إدارة التسجيل العقاري", "إدارة الخدمات العقارية", "إدارة التقييم العقاري"],
    },
    {
      title: "روابط مهمة",
      links: ["بوابة الخدمات الإلكترونية", "بوابة التدريب", "نظام الموارد البشرية"],
    },
  ];

  return (
    <footer className="mt-12 bg-dubai-dark py-12 text-white">
      <div className="container mx-auto">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-4 font-semibold">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-300 hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-700 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">
            جميع الحقوق محفوظة © {new Date().getFullYear()} دائرة الأراضي والأملاك - حكومة دبي
          </p>
          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full bg-white/10 p-2 transition-colors hover:bg-white/20"
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
