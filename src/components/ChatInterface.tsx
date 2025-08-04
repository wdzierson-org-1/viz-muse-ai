import { useState } from "react";
import { Send, Mic, Minimize2, Maximize2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  const [isMinimized, setIsMinimized] = useState(false);
  
  const handleSendMessage = () => {
    if (message.trim()) {
      // TODO: Implement actual chat functionality with Supabase + OpenAI
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Card className={`fixed bottom-6 left-20 bg-card shadow-[var(--shadow-elevated)] border-2 rounded-2xl transition-all duration-300 ${isMinimized ? 'w-80 h-16' : 'w-80'}`} style={{borderImage: 'var(--gradient-chat) 1'}}>
      <CardContent className="p-0">
        {/* Header with minimize/maximize button */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-t-2xl">
          <span className="text-sm font-medium">Medical Assistant</span>
          <Button 
            size="sm" 
            variant="ghost" 
            className="h-6 w-6 p-0 text-white hover:bg-white/20"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
          </Button>
        </div>

        {!isMinimized && (
          <>
            {/* Chat Messages Area with appointment content */}
            <div className="p-4 overflow-y-auto bg-card max-h-96">
              <div className="text-sm text-foreground space-y-3">
                <div className="text-sm text-foreground mb-2">
                  Good morning Dr. Mendes! You have an upcoming appointment:
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">MARIA PEREZ AT 10:00 AM</h3>
                
                <div>
                  <h4 className="font-medium text-foreground mb-2">Presents with concerns:</h4>
                  <ul className="space-y-1 text-sm text-foreground ml-4">
                    <li>• Facial and "sinus" pressure</li>
                    <li>• Nasal drainage</li>
                    <li>• Postnasal drip</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Status/Time Period:</h4>
                  <ul className="space-y-1 text-sm text-foreground ml-4">
                    <li>• Recurrent and worsening</li>
                    <li>• Over last 6 months</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Medications:</h4>
                  <div className="text-sm text-foreground ml-4">
                    • Azithromycin did not help with her symptoms (01/10/2025)
                  </div>
                </div>

                <div>
                  <div className="text-sm text-foreground mb-2">On your dashboard are Maria's:</div>
                  <ul className="space-y-1 text-sm ml-4">
                    <li className="text-medical-blue">• Diagnoses</li>
                    <li className="text-medical-blue">• Prescriptions</li>
                    <li className="text-medical-blue">• CT Scan</li>
                    <li className="text-medical-blue">• Allergen Report</li>
                  </ul>
                </div>

                <div className="text-sm text-foreground">
                  If Maria needs further evaluation, you will find ENT matches in the{" "}
                  <span className="text-warning font-medium">Care Matching</span> tile.
                </div>

                <div className="text-sm text-foreground">
                  Please let me know if I can help with anything else!
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t border-border bg-card rounded-b-2xl">
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500">
                  <AvatarFallback className="bg-transparent text-white text-sm font-medium">AI</AvatarFallback>
                </Avatar>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Ask me anything..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="pr-10 border-0 bg-muted/50 rounded-full"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 p-0"
                    onClick={handleSendMessage}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                  <Mic className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ChatInterface;