
import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface NewsAlertProps {
  title: string;
  content: string;
}

const NewsAlert = ({ title, content }: NewsAlertProps) => {
  const [open, setOpen] = useState(true);
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const moods = [
    { emoji: "😢", label: "حزين جداً" },
    { emoji: "🙁", label: "حزين" },
    { emoji: "😐", label: "محايد" },
    { emoji: "🙂", label: "سعيد" },
    { emoji: "😊", label: "سعيد جداً" },
  ];

  const handleSubmit = () => {
    if (selectedMood !== null) {
      console.log(`User mood rating: ${selectedMood + 1}`);
      setSubmitted(true);
      setTimeout(() => setOpen(false), 1000);
    }
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-center text-xl">
            كيف تشعر اليوم؟
          </AlertDialogTitle>
        </AlertDialogHeader>
        
        {!submitted ? (
          <>
            <div className="flex flex-col items-center space-y-6 py-4">
              <div className="flex justify-center gap-4">
                {moods.map((mood, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedMood(index)}
                    className={`transform rounded-full p-2 text-3xl transition-all hover:scale-110 ${
                      selectedMood === index
                        ? "scale-110 bg-dubai-primary/10 ring-2 ring-dubai-primary"
                        : ""
                    }`}
                  >
                    {mood.emoji}
                  </button>
                ))}
              </div>
              {selectedMood !== null && (
                <p className="text-center text-gray-600">
                  {moods[selectedMood].label}
                </p>
              )}
            </div>
            <AlertDialogFooter className="flex-col space-y-2 sm:flex-row sm:justify-center sm:space-x-2 sm:space-y-0">
              <Button
                onClick={handleSubmit}
                disabled={selectedMood === null}
                className="min-w-[120px]"
              >
                إرسال
              </Button>
              <Button
                variant="outline"
                onClick={() => setOpen(false)}
                className="min-w-[120px]"
              >
                إلغاء
              </Button>
            </AlertDialogFooter>
          </>
        ) : (
          <div className="py-4 text-center">
            <p className="text-green-600">شكراً لمشاركتنا شعورك!</p>
          </div>
        )}
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewsAlert;
