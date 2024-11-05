import { Inter, Roboto, Caveat } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
 

export const poppins = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '300', '400', '500',
    '700'
  ]
})



export const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-caveat',
});