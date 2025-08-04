import { useState } from "react";
import { Send, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const ChatInterface = () => {
  const [message, setMessage] = useState("");
  
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
    <Card className="fixed bottom-6 left-20 w-96 bg-gradient-to-br from-card to-medical-light shadow-[var(--shadow-elevated)] border-2 border-transparent" style={{borderImage: 'var(--gradient-chat) 1'}}>
      <CardContent className="p-0">
        {/* Chat Header */}
        <div className="bg-primary text-primary-foreground p-3 rounded-t-lg">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarFallback className="bg-primary-foreground text-primary text-sm">AI</AvatarFallback>
            </Avatar>
            <div className="text-sm font-medium">Medical Assistant</div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="h-64 p-4 overflow-y-auto bg-card">
          <div className="text-sm text-muted-foreground text-center py-8">
            Chat interface ready. Connect Supabase to enable AI conversations.
          </div>
        </div>

        {/* Chat Input */}
        <div className="p-3 border-t border-border bg-card rounded-b-lg">
          <div className="flex items-center gap-2">
            <div className="flex-1 relative">
              <Input
                placeholder="Ask me anything..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="pr-10"
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
            <Button size="sm" variant="outline" className="h-9 w-9 p-0">
              <Mic className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatInterface;