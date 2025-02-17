
import Banner from "@/components/Banner";
import NewsAlert from "@/components/NewsAlert";
import QuickLinks from "@/components/QuickLinks";

const Index = () => {
  return (
    <div className="min-h-screen bg-dubai-light font-noto">
      <main className="container mx-auto py-6">
        <h1 className="mb-6 text-center text-3xl font-bold text-dubai-primary">
          بوابة موظفي دائرة الأراضي والأملاك
        </h1>
        <Banner />
        <QuickLinks />
      </main>
      <NewsAlert
        title="تعميم جديد"
        content="نود إعلامكم بتحديث سياسات العمل المرن. يرجى الاطلاع على التفاصيل في صفحة السياسات والإجراءات."
      />
    </div>
  );
};

export default Index;
