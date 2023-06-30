
import AboutSection from '@/components/(hero)/AboutSection'
import CategorySection from '@/components/(hero)/CategorySection'
import FeedbackSection from '@/components/(hero)/FeedbackSection'
import HeroSection from '@/components/(hero)/HeroSection'
import ItemSection from '@/components/(hero)/ItemSection'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import 'react-modern-drawer/dist/index.css'

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8 px-32 space-y-20">
     <Header/>
      <HeroSection/>
      <ItemSection/>
      <AboutSection/>
      <CategorySection/>
      <FeedbackSection/>
      <Footer/>
    </main>
  )
}
