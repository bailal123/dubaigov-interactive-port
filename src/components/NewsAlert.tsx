
import { X } from "lucide-react";
import { useState, useEffect } from "react";

interface NewsAlertProps {
  title: string;
  content: string;
}

const NewsAlert = ({ title, content }: NewsAlertProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm">
      <div className="animate-fade-in relative w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <button
          onClick={() => setIsVisible(false)}
          className="absolute left-2 top-2 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <X className="h-5 w-5" />
        </button>
        <h3 className="mb-2 text-xl font-bold text-dubai-primary">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

export default NewsAlert;
