import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { cookies } from "next/headers";
import { ClerkProvider } from "@clerk/nextjs";
import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`font-sans ${inter.variable} flex min-h-screen flex-col bg-gray-100 dark:bg-gray-800`}
        >
          <TRPCReactProvider cookies={cookies().toString()}>
            <nav className="flex items-center justify-between bg-white p-6 shadow-lg dark:bg-gray-900">
              <a href="/">
                <h1 className="text-2xl font-bold">
                  Tweet vs Commit Comparison
                </h1>
              </a>
              <div className="space-x-4">
                <a
                  className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  Home
                </a>
                <a
                  className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  About
                </a>
                <a
                  className="text-gray-600 hover:text-gray-800 dark:hover:text-gray-200"
                  href="#"
                >
                  Contact
                </a>
              </div>
            </nav>
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
