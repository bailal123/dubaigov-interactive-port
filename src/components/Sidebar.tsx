
import { X, Calendar, CheckSquare } from "lucide-react";
import { useState } from "react";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [tasks] = useState([
    { id: 1, title: "اجتماع القطاع", done: false, date: "2024-02-20" },
    { id: 2, title: "مراجعة التقارير", done: true, date: "2024-02-21" },
    { id: 3, title: "تحديث البيانات", done: false, date: "2024-02-22" },
  ]);

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed right-0 top-0 z-40 h-screen w-80 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <button
          onClick={onClose}
          className="absolute left-4 top-4 rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 md:hidden"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mt-8">
          <div className="mb-6 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-dubai-primary" />
            <h3 className="text-lg font-semibold text-dubai-primary">التقويم والمهام</h3>
          </div>

          {/* Calendar Placeholder */}
          <div className="mb-6 rounded-lg border bg-gray-50 p-4">
            <div className="text-center">
              {selectedDate.toLocaleDateString("ar-AE", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>

          {/* Tasks */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CheckSquare className="h-5 w-5 text-dubai-primary" />
              <h4 className="font-semibold text-dubai-primary">المهام</h4>
            </div>
            <ul className="space-y-2">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="flex items-center gap-2 rounded-lg border bg-white p-3 shadow-sm"
                >
                  <input
                    type="checkbox"
                    checked={task.done}
                    className="h-4 w-4 rounded border-gray-300 text-dubai-primary"
                    readOnly
                  />
                  <span className={task.done ? "text-gray-400 line-through" : ""}>
                    {task.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
