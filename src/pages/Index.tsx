
import { useState } from "react";
import { Menu, Github, Linkedin, Mail, Phone, MapPin, Download } from "lucide-react";
import Banner from "@/components/Banner";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const skills = {
    professional: [
      "تطوير الويب الأمامي والخلفي",
      "تصميم متجاوب",
      "أتمتة سير العمل",
      "إدارة قواعد البيانات",
      "التعاون وعمل الفريق",
      "حل المشكلات"
    ],
    technical: [
      "C#", "JavaScript", "SQL", "HTML", "CSS", "React",
      "ASP.NET", "TypeScript", "Bootstrap", "jQuery",
      "SharePoint", "Power Automate", "PowerApps",
      "SQL Server", "Power BI", "Android Studio"
    ]
  };

  const projects = [
    {
      title: "بوابة الشؤون الإدارية",
      client: "دائرة الأراضي والأملاك",
      technologies: ["SharePoint Online", "Power Automate", "React", "TypeScript", "Tailwind CSS"],
      description: [
        "تطوير بوابة إدارية باستخدام SharePoint Online",
        "بناء مكونات ديناميكية باستخدام React و TypeScript",
        "تطبيق Tailwind CSS لتصميم متجاوب",
        "دمج مصادر البيانات الخارجية وواجهات API"
      ]
    },
    {
      title: "البوابة الداخلية للموظفين",
      client: "دائرة الأراضي والأملاك",
      technologies: ["ASP.NET Web Forms", "C#", "Bootstrap", "CSS", "SQL Server"],
      description: [
        "تطوير بوابة داخلية متجاوبة للموظفين",
        "تحسين تجربة المستخدم باستخدام Bootstrap و CSS",
        "إدارة تفاعلات قاعدة بيانات SQL Server",
        "تنفيذ لوحات معلومات الموظفين وإدارة المستندات"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <button
        onClick={() => setSidebarOpen(true)}
        className="fixed right-4 top-4 z-20 rounded-lg bg-dubai-primary p-2 text-white shadow-lg"
      >
        <Menu className="h-6 w-6" />
      </button>

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Hero Section */}
      <section className="relative h-screen bg-gradient-to-b from-dubai-primary to-dubai-secondary">
        <div className="container mx-auto flex h-full items-center px-4">
          <div className="text-white">
            <h1 className="mb-4 text-5xl font-bold">بلال الديار بكرلي</h1>
            <h2 className="mb-6 text-2xl">مطور ويب</h2>
            <p className="mb-8 max-w-2xl text-lg">
              مطور ويب متحمس وملتزم مع أكثر من 4 سنوات من الخبرة في البرمجة والتنفيذ وإصلاح الأخطاء.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="outline"
                className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                onClick={() => window.open("mailto:bailal123@hotmail.com")}
              >
                <Mail className="ml-2 h-4 w-4" />
                تواصل معي
              </Button>
              <Button
                variant="outline"
                className="bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
              >
                <Download className="ml-2 h-4 w-4" />
                تحميل السيرة الذاتية
              </Button>
            </div>
          </div>
        </div>
        
        {/* Contact Info */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 p-4 backdrop-blur-sm">
          <div className="container mx-auto flex flex-wrap justify-center gap-6 text-white">
            <a href="tel:+971569427147" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              +971 569427147
            </a>
            <a href="mailto:bailal123@hotmail.com" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              bailal123@hotmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              الإمارات العربية المتحدة
            </span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">المهارات</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>المهارات المهنية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.professional.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>المهارات التقنية</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.technical.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">المشاريع</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.client}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <ul className="list-inside list-disc space-y-2">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">الخبرات</h2>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>مطور ويب - Data Cell، دبي</CardTitle>
                <CardDescription>فبراير 2022 - حتى الآن</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  <li>تصميم وتطوير وتخصيص بوابات SharePoint Online</li>
                  <li>تنفيذ سير العمل باستخدام Power Automate</li>
                  <li>تطوير مكونات ويب باستخدام SharePoint Framework</li>
                  <li>دمج مصادر البيانات الخارجية باستخدام REST APIs</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>مطور برمجيات مستقل</CardTitle>
                <CardDescription>يناير 2020 - ديسمبر 2021</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-inside list-disc space-y-2">
                  <li>تصميم وتطوير تطبيقات ويب لمشاريع تخرج الطلاب</li>
                  <li>إنشاء تطبيقات سطح المكتب لشركة ETAC</li>
                  <li>بناء تطبيقات Android خلال مشاريع الجامعة</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">التعليم</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>ماجستير</CardTitle>
                <CardDescription>علوم الويب - جاري الدراسة</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>بكالوريوس</CardTitle>
                <CardDescription>تكنولوجيا المعلومات - 2018</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>دبلوم</CardTitle>
                <CardDescription>هندسة الحاسوب - 2013</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">تواصل معي</h2>
          <div className="mx-auto max-w-md">
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="h-5 w-5 text-dubai-primary" />
                    <a href="mailto:bailal123@hotmail.com">bailal123@hotmail.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-5 w-5 text-dubai-primary" />
                    <a href="tel:+971569427147">+971 569427147</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <MapPin className="h-5 w-5 text-dubai-primary" />
                    <span>الإمارات العربية المتحدة</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
