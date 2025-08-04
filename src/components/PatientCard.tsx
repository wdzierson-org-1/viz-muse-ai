import { Calendar, Shield, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const PatientCard = () => {
  return (
    <div className="space-y-4">
      {/* Calendar Widget */}
      <Card className="bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-card)]">
        <CardContent className="p-6 text-center">
          <Calendar className="w-12 h-12 mx-auto mb-3 text-primary" />
          <div className="text-2xl font-bold text-foreground">June 13</div>
          <div className="text-sm text-muted-foreground">Friday</div>
        </CardContent>
      </Card>

      {/* Patient Profile */}
      <Card className="bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-card)]">
        <CardContent className="p-6 text-center">
          <Avatar className="w-16 h-16 mx-auto mb-4">
            <AvatarImage src="/lovable-uploads/4fa3a199-689d-4313-b6ab-6acc2767ac3c.png" alt="Maria Perez" />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">MP</AvatarFallback>
          </Avatar>
          <h3 className="text-lg font-semibold text-foreground mb-2">Maria Perez</h3>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-accent font-medium">HealthSAFE</span>
            <ExternalLink className="w-4 h-4 text-accent" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PatientCard;