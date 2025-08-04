import { 
  Calendar, 
  UserCircle, 
  Sun, 
  Activity, 
  Heart, 
  Settings, 
  MessageSquare,
  FileText
} from "lucide-react";

const Sidebar = () => {
  const sidebarItems = [
    { icon: Calendar, color: "text-primary", bgColor: "bg-primary/10" },
    { icon: UserCircle, color: "text-purple-600", bgColor: "bg-purple-100" },
    { icon: Sun, color: "text-amber-600", bgColor: "bg-amber-100" },
    { icon: Activity, color: "text-green-600", bgColor: "bg-green-100" },
    { icon: Heart, color: "text-red-500", bgColor: "bg-red-100" },
    { icon: FileText, color: "text-blue-600", bgColor: "bg-blue-100" },
    { icon: Settings, color: "text-gray-600", bgColor: "bg-gray-100" },
  ];

  return (
    <aside className="w-16 bg-card border-r border-border flex flex-col items-center py-4 gap-4">
      {sidebarItems.map((item, index) => (
        <button
          key={index}
          className={`w-10 h-10 rounded-xl ${item.bgColor} ${item.color} flex items-center justify-center hover:scale-110 transition-transform duration-200`}
        >
          <item.icon className="w-5 h-5" />
        </button>
      ))}
      
      <div className="mt-auto">
        <button className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
          <MessageSquare className="w-5 h-5" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;