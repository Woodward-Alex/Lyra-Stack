"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { X, Send, Minus, MessageCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Message {
  id: string
  text: string
  sender: "user" | "lyra"
  timestamp: Date
}

export function LyraChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { t, currentLanguage } = useLanguage()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const initialMessage: Message = {
      id: "1",
      text: t.chatbotWelcome,
      sender: "lyra",
      timestamp: new Date(),
    }
    setMessages([initialMessage])
  }, [currentLanguage, t])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (
      lowerMessage.includes("service") ||
      lowerMessage.includes("servicio") ||
      lowerMessage.includes("服务") ||
      lowerMessage.includes("サービス") ||
      lowerMessage.includes("خدمة")
    ) {
      return t.chatbotServicesResponse
    }

    if (
      lowerMessage.includes("how much") ||
      lowerMessage.includes("cost") ||
      lowerMessage.includes("price") ||
      lowerMessage.includes("cuánto") ||
      lowerMessage.includes("precio") ||
      lowerMessage.includes("多少") ||
      lowerMessage.includes("いくら") ||
      lowerMessage.includes("كم")
    ) {
      return t.chatbotPricingResponse
    }

    if (
      lowerMessage.includes("international") ||
      lowerMessage.includes("global") ||
      lowerMessage.includes("worldwide") ||
      lowerMessage.includes("国际") ||
      lowerMessage.includes("グローバル") ||
      lowerMessage.includes("دولي")
    ) {
      return t.chatbotInternationalResponse
    }

    if (
      lowerMessage.includes("industr") ||
      lowerMessage.includes("sector") ||
      lowerMessage.includes("行业") ||
      lowerMessage.includes("業界") ||
      lowerMessage.includes("صناعة")
    ) {
      return t.chatbotIndustriesResponse
    }

    if (
      lowerMessage.includes("long") ||
      lowerMessage.includes("time") ||
      lowerMessage.includes("cuando") ||
      lowerMessage.includes("时间") ||
      lowerMessage.includes("どのくらい") ||
      lowerMessage.includes("وقت")
    ) {
      return t.chatbotTimelineResponse
    }

    if (
      lowerMessage.includes("building block") ||
      lowerMessage.includes("module") ||
      lowerMessage.includes("模块") ||
      lowerMessage.includes("モジュール") ||
      lowerMessage.includes("كتل")
    ) {
      return t.chatbotBuildingBlocksResponse
    }

    if (
      lowerMessage.includes("support") ||
      lowerMessage.includes("help") ||
      lowerMessage.includes("apoyo") ||
      lowerMessage.includes("支持") ||
      lowerMessage.includes("サポート") ||
      lowerMessage.includes("دعم")
    ) {
      return t.chatbotSupportResponse
    }

    return t.chatbotDefaultResponse
  }

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    setTimeout(() => {
      const lyraResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getResponse(text),
        sender: "lyra",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, lyraResponse])
    }, 800)
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark shadow-2xl hover:shadow-lyra-blue/50 transition-all duration-300 group p-0 overflow-hidden border-2 border-lyra-text-primary/20"
          aria-label="Open Lyra chatbot"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <MessageCircle className="h-8 w-8 text-lyra-text-primary group-hover:scale-110 transition-transform duration-300" />
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-lyra-darkest animate-pulse"></div>
          </div>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card
          className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-2rem)] max-w-[380px] bg-lyra-dark/95 backdrop-blur-xl border-lyra-medium shadow-2xl flex flex-col transition-all duration-300 ${
            isMinimized ? "h-[60px]" : "h-[600px] max-h-[calc(100vh-8rem)]"
          }`}
        >
          <CardHeader className="border-b border-lyra-medium/50 p-4 bg-gradient-to-r from-lyra-blue/10 to-lyra-purple/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-lyra-blue to-lyra-purple flex items-center justify-center">
                    <MessageCircle className="h-5 w-5 text-lyra-text-primary" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-lyra-dark"></div>
                </div>
                <div>
                  <CardTitle className="text-lyra-text-primary text-lg">Lyra</CardTitle>
                  <p className="text-xs text-lyra-text-muted">Your Digital Guide</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-lyra-text-secondary hover:text-lyra-text-primary hover:bg-lyra-medium/30 h-8 w-8"
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-lyra-text-secondary hover:text-lyra-text-primary hover:bg-lyra-medium/30 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {!isMinimized && (
            <>
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl p-3 ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-lyra-blue to-lyra-purple text-lyra-text-primary"
                          : "bg-lyra-medium/40 text-lyra-text-secondary border border-lyra-medium/50"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                ))}

                {messages.length === 1 && (
                  <div className="space-y-2 mt-4">
                    <p className="text-xs text-lyra-text-muted text-center mb-3">{t.chatbotQuickQuestions}</p>
                    {[
                      currentLanguage === "EN"
                        ? "What services do you offer?"
                        : currentLanguage === "ES"
                          ? "¿Qué servicios ofrecen?"
                          : currentLanguage === "FR"
                            ? "Quels services offrez-vous?"
                            : currentLanguage === "DE"
                              ? "Welche Dienstleistungen bieten Sie an?"
                              : currentLanguage === "IT"
                                ? "Quali servizi offrite?"
                                : currentLanguage === "PT"
                                  ? "Quais serviços vocês oferecem?"
                                  : currentLanguage === "ZH"
                                    ? "你们提供什么服务？"
                                    : currentLanguage === "JA"
                                      ? "どんなサービスを提供していますか？"
                                      : "ما هي الخدمات التي تقدمونها؟",

                      currentLanguage === "EN"
                        ? "How much does it cost?"
                        : currentLanguage === "ES"
                          ? "¿Cuánto cuesta?"
                          : currentLanguage === "FR"
                            ? "Combien ça coûte?"
                            : currentLanguage === "DE"
                              ? "Wie viel kostet es?"
                              : currentLanguage === "IT"
                                ? "Quanto costa?"
                                : currentLanguage === "PT"
                                  ? "Quanto custa?"
                                  : currentLanguage === "ZH"
                                    ? "要多少钱？"
                                    : currentLanguage === "JA"
                                      ? "費用はいくらですか？"
                                      : "كم تكلفة؟",

                      currentLanguage === "EN"
                        ? "Do you work internationally?"
                        : currentLanguage === "ES"
                          ? "¿Trabajan internacionalmente?"
                          : currentLanguage === "FR"
                            ? "Travaillez-vous à l'international?"
                            : currentLanguage === "DE"
                              ? "Arbeiten Sie international?"
                              : currentLanguage === "IT"
                                ? "Lavorate internazionalmente?"
                                : currentLanguage === "PT"
                                  ? "Vocês trabalham internacionalmente?"
                                  : currentLanguage === "ZH"
                                    ? "你们在国际上工作吗？"
                                    : currentLanguage === "JA"
                                      ? "国際的に活動していますか？"
                                      : "هل تعملون دولياً؟",

                      currentLanguage === "EN"
                        ? "How long does it take?"
                        : currentLanguage === "ES"
                          ? "¿Cuánto tiempo toma?"
                          : currentLanguage === "FR"
                            ? "Combien de temps cela prend-il?"
                            : currentLanguage === "DE"
                              ? "Wie lange dauert es?"
                              : currentLanguage === "IT"
                                ? "Quanto tempo ci vuole?"
                                : currentLanguage === "PT"
                                  ? "Quanto tempo leva?"
                                  : currentLanguage === "ZH"
                                    ? "需要多长时间？"
                                    : currentLanguage === "JA"
                                      ? "どのくらい時間がかかりますか？"
                                      : "كم من الوقت يستغرق؟",
                    ].map((question, index) => (
                      <button
                        key={index}
                        onClick={() => handleQuickQuestion(question)}
                        className="w-full text-left px-3 py-2 text-sm bg-lyra-medium/20 hover:bg-lyra-medium/40 text-lyra-text-secondary rounded-lg border border-lyra-medium/30 hover:border-lyra-blue/50 transition-all duration-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>

              <div className="p-4 border-t border-lyra-medium/50">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    handleSendMessage(inputValue)
                  }}
                  className="flex space-x-2"
                >
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={t.chatbotAskAnything}
                    className="flex-1 bg-lyra-medium/30 border-lyra-medium/50 text-lyra-text-primary placeholder:text-lyra-text-muted focus:border-lyra-blue"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    className="bg-gradient-to-r from-lyra-blue to-lyra-purple hover:from-lyra-blue-dark hover:to-lyra-purple-dark shrink-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </>
          )}
        </Card>
      )}
    </>
  )
}
