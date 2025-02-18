
import { useState } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ThumbsUp, ThumbsDown } from "lucide-react";

interface NewsAlertProps {
  title: string;
  content: string;
}

const NewsAlert = ({ title, content }: NewsAlertProps) => {
  const [open, setOpen] = useState(true);
  const [rated, setRated] = useState(false);

  const handleRating = (isPositive: boolean) => {
    console.log(`User rated: ${isPositive ? "positive" : "negative"}`);
    setRated(true);
    setTimeout(() => setOpen(false), 1000);
  };

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
        </AlertDialogHeader>
        <div className="py-4">{content}</div>
        <AlertDialogFooter className="flex-col space-y-2">
          {!rated ? (
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => handleRating(true)}
                className="flex items-center gap-2 hover:bg-green-100 hover:text-green-600"
              >
                <ThumbsUp className="h-4 w-4" />
                مفيد
              </Button>
              <Button
                variant="outline"
                onClick={() => handleRating(false)}
                className="flex items-center gap-2 hover:bg-red-100 hover:text-red-600"
              >
                <ThumbsDown className="h-4 w-4" />
                غير مفيد
              </Button>
            </div>
          ) : (
            <p className="text-center text-green-600">شكراً لتقييمك!</p>
          )}
          <Button variant="outline" onClick={() => setOpen(false)}>
            إغلاق
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NewsAlert;
