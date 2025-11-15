"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useLanguage, type LanguageCode } from "@/contexts/language-context"

export function LanguageSelector() {
  const { currentLanguage, setCurrentLanguage } = useLanguage()

  const languages = [
    { code: "EN" as LanguageCode, name: "English", flag: "🇬🇧" },
    { code: "ES" as LanguageCode, name: "Español", flag: "🇪🇸" },
    { code: "FR" as LanguageCode, name: "Français", flag: "🇫🇷" },
    { code: "DE" as LanguageCode, name: "Deutsch", flag: "🇩🇪" },
    { code: "IT" as LanguageCode, name: "Italiano", flag: "🇮🇹" },
    { code: "PT" as LanguageCode, name: "Português", flag: "🇵🇹" },
    { code: "ZH" as LanguageCode, name: "中文", flag: "🇨🇳" },
    { code: "JA" as LanguageCode, name: "日本語", flag: "🇯🇵" },
    { code: "AR" as LanguageCode, name: "العربية", flag: "🇸🇦" },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-lyra-medium text-lyra-text-secondary hover:bg-lyra-medium/20 bg-transparent"
        >
          <Globe className="h-4 w-4 mr-2" />
          {currentLanguage}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-lyra-dark/95 backdrop-blur-md border-lyra-medium/50 shadow-xl">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setCurrentLanguage(lang.code)}
            className={`text-lyra-text-secondary hover:text-lyra-blue-light hover:bg-lyra-medium/20 cursor-pointer ${
              currentLanguage === lang.code ? "bg-lyra-medium/30" : ""
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
