import DashboardHeader from "@/components/DashboardHeader";
import Sidebar from "@/components/Sidebar";
import PatientCard from "@/components/PatientCard";
import AppointmentDetails from "@/components/AppointmentDetails";
import MedicalPanels from "@/components/MedicalPanels";
import ChatInterface from "@/components/ChatInterface";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {/* Left Column - Patient Info */}
            <div className="lg:col-span-1">
              <PatientCard />
            </div>
            
            {/* Right Columns - Medical Panels */}
            <div className="lg:col-span-2">
              <MedicalPanels />
            </div>
          </div>
        </main>
      </div>
      
      <ChatInterface />
    </div>
  );
};

export default Index;
