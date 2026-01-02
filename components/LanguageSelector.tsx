"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useTransition } from "react";
import { Globe } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages, type Locale } from "@/i18n/config";

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace({ pathname }, { locale: newLocale as Locale });
    });
  };

  return (
    <Select value={locale} onValueChange={handleLocaleChange} disabled={isPending}>
      <SelectTrigger className="w-auto gap-2 border-none bg-transparent text-white hover:bg-white/10 focus:ring-0 focus:ring-offset-0">
        <Globe size={18} />
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="border-zinc-700 bg-zinc-900/95 backdrop-blur-xl">
        {languages.map((lang) => (
          <SelectItem
            key={lang.code}
            value={lang.code}
            className="text-white focus:bg-white/10 focus:text-white"
          >
            {lang.nativeName}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
