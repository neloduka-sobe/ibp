"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: string
  storageKey?: string
  forcedTheme?: string
  enableSystem?: boolean
  disableTransitionOnChange?: boolean
  themes?: string[]
  attribute?: string | "class"
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
