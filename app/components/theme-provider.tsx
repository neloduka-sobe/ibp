'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { ThemeProviderProps as NextThemeProviderProps } from 'next-themes';
import type { ReactNode } from 'react';

type Attribute = 'class' | 'data-theme';

// Create a type that keeps all NextThemeProviderProps properties except 'attribute'
export interface ThemeProviderProps extends Omit<NextThemeProviderProps, 'attribute'> {
  attribute?: Attribute | Attribute[];
  children: ReactNode;
  // other custom props if needed
}

export function ThemeProvider({
  children,
  attribute, // <--- This line extracts the custom attribute
  ...props   // <--- ...props now contains the other standard props
}: ThemeProviderProps) {

  // Construct the props object specifically for NextThemesProvider
  const nextThemeProviderProps: NextThemeProviderProps = {
    ...props, // Spread the standard props
    // Conditionally add the attribute prop with the correct type (string | undefined)
    ...(attribute !== undefined && {
      attribute: Array.isArray(attribute) ? attribute[0] : attribute // <-- Processing the attribute
    }) as Pick<NextThemeProviderProps, 'attribute'> | {} // Type assertion helps here
  };

  // This line now spreads an object (nextThemeProviderProps) that *should*
  // be compatible with NextThemeProviderProps
  return <NextThemesProvider {...nextThemeProviderProps}>{children}</NextThemesProvider>;
}