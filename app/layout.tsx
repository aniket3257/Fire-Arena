import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className="bg-[#07080a] text-white antialiased">
            <body className={`${inter.className} pb-24`}>
                    <div className="w-full bg-gradient-to-r from-[#ff5500] to-purple-700 py-1.5 text-center text-xs font-black tracking-widest uppercase">
                              🔥 ₹1,00,000 Mega Grind Tournament Registration Open!
                                      </div>
                                              <main className="max-w-md mx-auto min-h-screen border-x border-zinc-900 px-4 pt-4">
                                                        {children}
                                                                </main>
                                                                      </body>
                                                                          </html>
                                                                            );
                                                                            }
                                                                            