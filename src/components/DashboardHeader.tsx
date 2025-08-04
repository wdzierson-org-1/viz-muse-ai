import { Calendar, Plus, LayoutGrid } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardHeader = () => {
  const currentDate = new Date();
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).replace(/\//g, '-');
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <header className="bg-card border-b border-border px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <Calendar className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-foreground">Appointment Dashboard</h1>
            <p className="text-sm text-muted-foreground">
              {formatDate(currentDate)} | {formatTime(currentDate)}
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="gap-2">
          <Plus className="w-4 h-4" />
          New Tile
        </Button>
        <Button variant="outline" size="sm" className="gap-2">
          <LayoutGrid className="w-4 h-4" />
          Clean up board
        </Button>
      </div>
    </header>
  );
};

export default DashboardHeader;