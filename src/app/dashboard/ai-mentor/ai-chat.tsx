"use client";
import { useChat, type UseChatOptions } from "@ai-sdk/react";

import { cn } from "@/lib/utils";
import { Chat } from "@/components/ui/chat";

type AIChatProps = {
  initialMessages?: UseChatOptions["initialMessages"];
};

export const AIChat = (props: AIChatProps) => {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
    setMessages,
  } = useChat({
    ...props,
    api: "/api/chat",
  });

  return (
    <div className={cn("flex", "flex-col", "h-[calc(100svh-100px)]", "w-full")}>
      <Chat
        className="grow"
        messages={messages}
        handleSubmit={handleSubmit}
        input={input}
        handleInputChange={handleInputChange}
        isGenerating={isLoading}
        stop={stop}
        append={append}
        setMessages={setMessages}
        suggestions={[
          "What are the best career paths for me?",
          "What are the most in-demand skills for high-paying remote jobs, and how can I learn them efficiently?",
          "How can I build a strong resume?",
        ]}
      />
    </div>
  );
};
