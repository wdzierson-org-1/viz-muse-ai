import { Clock, AlertCircle, Pill, Stethoscope, FileText, ScanLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AppointmentDetails = () => {
  return (
    <Card className="bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-card)]">
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="text-sm text-muted-foreground mb-2">
            Good morning Dr. Mendes! You have an upcoming appointment:
          </div>
          <h3 className="text-lg font-bold text-foreground mb-3">MARIA PEREZ AT 10:00 AM</h3>
        </div>

        <div className="space-y-3 mb-6">
          <div>
            <h4 className="font-medium text-foreground mb-2">Presents with concerns:</h4>
            <ul className="space-y-1 text-sm text-foreground">
              <li>• Facial and "sinus" pressure</li>
              <li>• Nasal drainage</li>
              <li>• Postnasal drip</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Status/Time Period:</h4>
            <ul className="space-y-1 text-sm text-foreground">
              <li>• Recurrent and worsening</li>
              <li>• Over last 6 months</li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">Medications:</h4>
            <div className="text-sm text-foreground">
              • Azithromycin did not help with her symptoms (01/10/2025)
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="text-sm text-muted-foreground mb-2">On your dashboard are Maria's:</div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="gap-1">
              <Stethoscope className="w-3 h-3" />
              Diagnoses
            </Badge>
            <Badge variant="outline" className="gap-1">
              <Pill className="w-3 h-3" />
              Prescriptions
            </Badge>
            <Badge variant="outline" className="gap-1">
              <ScanLine className="w-3 h-3" />
              CT Scan
            </Badge>
            <Badge variant="outline" className="gap-1">
              <FileText className="w-3 h-3" />
              Allergen Report
            </Badge>
          </div>
        </div>

        <div className="mt-4 p-3 bg-info/10 border border-info/20 rounded-lg">
          <div className="text-sm text-foreground">
            If Maria needs further evaluation, you will find ENT matches in the{" "}
            <span className="text-warning font-medium">Care Matching</span> tile.
          </div>
        </div>

        <div className="mt-4 text-sm text-foreground">
          Please let me know if I can help with anything else!
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentDetails;