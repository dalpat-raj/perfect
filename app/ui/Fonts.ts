import { Inter, Caveat } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 
export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
});