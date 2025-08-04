import { MoreHorizontal, Pill, ScanLine, FileText, UserCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const MedicalPanels = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Diagnoses Panel */}
      <Card className="bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-card)]">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <span>📋 Diagnoses</span>
            <MoreHorizontal className="w-4 h-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <div>
            <div className="font-medium text-sm text-foreground">Otolaryngology (ENT)</div>
            <div className="text-sm text-muted-foreground">Chronic Sinusitis</div>
            <div className="text-xs text-muted-foreground">Diagnosed: 01/22/2004</div>
            <div className="text-xs">Status: <span className="text-success">Active</span></div>
            <div className="text-xs">Stage: Chronic</div>
          </div>
        </CardContent>
      </Card>

      {/* CT Scan Panel */}
      <Card className="bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-card)]">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <span>📄 CT Scan</span>
            <MoreHorizontal className="w-4 h-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="text-sm font-medium mb-2">Perez-CT-Scan-Report-Of-Maxillary-Sinus-01.2025.png</div>
          <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center mb-2">
            <ScanLine className="w-8 h-8 text-gray-400" />
          </div>
          <div className="text-xs text-muted-foreground">01/22/2025</div>
        </CardContent>
      </Card>

      {/* Prescriptions Panel */}
      <Card className="bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-card)]">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <span>🔗 Prescriptions</span>
            <MoreHorizontal className="w-4 h-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 space-y-3">
          <div className="space-y-2">
            <Badge variant="secondary" className="w-full justify-start">Active</Badge>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Pill className="w-4 h-4 text-primary" />
                <span className="text-sm">Fluticasone Propionate</span>
              </div>
              <div className="text-xs text-muted-foreground">01/02/2025</div>
              
              <div className="flex items-center gap-2">
                <Pill className="w-4 h-4 text-primary" />
                <span className="text-sm">Azelastine</span>
              </div>
              <div className="text-xs text-muted-foreground">01/02/2025</div>
            </div>
            
            <Badge variant="outline" className="w-full justify-start">Inactive</Badge>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Pill className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Azithromycin (Z-Pak)</span>
              </div>
              <div className="text-xs text-muted-foreground">01/10/2025</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Allergen Report Panel */}
      <Card className="bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-card)]">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <span>📄 Allergen Report</span>
            <MoreHorizontal className="w-4 h-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="bg-gray-100 rounded-lg h-32 flex items-center justify-center mb-2">
            <FileText className="w-8 h-8 text-gray-400" />
          </div>
          <div className="text-xs text-muted-foreground">01/13/2025</div>
        </CardContent>
      </Card>

      {/* Community ENT Matches - Full Width */}
      <Card className="bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-card)] lg:col-span-2">
        <CardHeader className="bg-warning text-white rounded-t-lg">
          <CardTitle className="flex items-center justify-between text-sm font-medium">
            <span>🔍 Community ENT Matches</span>
            <MoreHorizontal className="w-4 h-4" />
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground">DF</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">Dr. Damien Faust, MD</div>
                <div className="text-xs text-muted-foreground">Otolaryngology</div>
                <div className="text-xs text-muted-foreground">Akron Community Medical Center</div>
                <div className="text-xs text-muted-foreground">Medical management of recurrent sinus infections.</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground">ML</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">Dr. Mark Li, MD</div>
                <div className="text-xs text-muted-foreground">Otolaryngology</div>
                <div className="text-xs text-muted-foreground">Lakeside ENT & Hearing Center</div>
                <div className="text-xs text-muted-foreground">Diagnosis and treatment of sore throats, hoarseness...</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 p-3 border border-border rounded-lg">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-primary text-primary-foreground">HR</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-sm">Dr. Helen Ramirez, MD</div>
                <div className="text-xs text-muted-foreground">Otolaryngology</div>
                <div className="text-xs text-muted-foreground">Westwood Family ENT</div>
                <div className="text-xs text-muted-foreground">Evaluation of hearing loss, ear pain, and balance...</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MedicalPanels;