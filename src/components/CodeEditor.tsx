"use client"
import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ImageIcon, SendIcon } from "lucide-react";
import { api } from "../../convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import { useUser } from "@clerk/nextjs";
import { ResizablePanelGroup } from "./ui/resizable";

interface Message {
  _id: string;
  content: string;
  userId: string;
  userName: string;
  timestamp: number;
  userImage?: string;
  imageUrl?: string;
}

function CodeEditor() {
  const { user } = useUser();
  const [inputMessage, setInputMessage] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const roomId = "room-1";
  
  const messages = useQuery(api.messages.getRoomMessages, { roomId });
  const sendMessage = useMutation(api.messages.sendMessage);
  const uploadImage = useMutation(api.messages.uploadImage);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if ((!inputMessage.trim() && !fileInputRef.current?.files?.length) || !user) return;
    
    const files = fileInputRef.current?.files;

    if (files && files.length > 0) {
      const file = files[0];
      const formData = new FormData();
      formData.append("file", file);
    }

    await sendMessage({
      content: inputMessage,
      roomId,
      userName: user.fullName || user.username || "Anonymous",
      
    });
    
    setInputMessage("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    scrollToBottom();
  };

  const handleFileSelect = () => {
    fileInputRef.current?.click();
  };

  return (
    <ResizablePanelGroup direction="vertical" className="min-h-[calc-100vh-4rem-1px]">
      <Card className="flex flex-col h-full border-0 rounded-none bg-[#1E2022]">
        <CardHeader className="border-b border-border/10 bg-[#1E2022]">
          <CardTitle className="text-white text-lg">Room Chat</CardTitle>
        </CardHeader>
        
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages?.map((message) => (
              <div
                key={message._id}
                className={`flex ${
                  message.userId === user?.id ? "justify-end" : "justify-start"
                } mb-4`}
              >
                {message.userId !== user?.id && (
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src={message.userImage || `https://ui-avatars.com/api/?name=${message.userName}`}
                        alt={message.userName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex flex-col max-w-[70%]">
                  {message.userId !== user?.id && (
                    <span className="text-sm text-gray-400 mb-1 ml-2">
                      {message.userName}
                    </span>
                  )}
                  <div
                    className={`rounded-2xl px-4 py-2 ${
                      message.userId === user?.id
                        ? "bg-[#28A745] text-white ml-auto"
                        : "bg-[#2A2D2E] text-white"
                    }`}
                  >
                    {message.content}
                  </div>
                  <span className={`text-xs text-gray-500 mt-1 ${
                    message.userId === user?.id ? "text-right" : "text-left"
                  }`}>
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        <div className="p-4 border-t border-border/10 sticky bottom-0 bg-[#1E2022]">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Nhập tin nhắn..."
              className="flex-1 bg-[#2A2D2E] border-0 text-white placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#28A745]"
            />
            <Button 
              onClick={handleSendMessage}
              className="bg-[#28A745] hover:bg-[#218838] text-white"
            >
              Gửi
            </Button>
          </div>
        </div>
      </Card>
    </ResizablePanelGroup>
  );
}

export default CodeEditor;
