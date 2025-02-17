
import { Image } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white py-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between">
        {/* Placeholder for Dubai Land Department logo */}
        <div className="flex items-center gap-2">
          <Image className="h-12 w-12 text-dubai-primary" />
          <div className="text-right">
            <h1 className="text-lg font-bold text-dubai-primary">
              دائرة الأراضي والأملاك
            </h1>
            <p className="text-sm text-gray-600">البوابة الداخلية</p>
          </div>
        </div>
        
        {/* Placeholder for Dubai Government logo */}
        <div className="flex items-center gap-2">
          <div className="text-left">
            <h2 className="text-lg font-bold text-dubai-primary">حكومة دبي</h2>
            <p className="text-sm text-gray-600">التميز والابتكار</p>
          </div>
          <Image className="h-12 w-12 text-dubai-primary" />
        </div>
      </div>
    </header>
  );
};

export default Header;
