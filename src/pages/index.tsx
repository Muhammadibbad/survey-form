import Image from 'next/image'
import { Inter } from 'next/font/google'
import SurveyForm from '@/components/survey'
import Surveyhome from '@/components/surveyhome'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
  <Surveyhome/>
    </>
  )
}
