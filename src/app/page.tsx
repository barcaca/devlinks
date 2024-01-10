import { Icons } from '@/components/icons'
import { IconLink } from '@/components/list'
import { ThemeToggle } from '@/components/themetoggle'
import { dataList } from '@/data/data'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto mt-14 w-[360px]">
      <header className="flex flex-col gap-2 p-6 text-center">
        <Link href={'http://github.com/barcaca.png'}>
          <Image
            className="mx-auto h-28 w-28 rounded-full border-2 border-black/50 dark:border-white/50"
            src={'http://github.com/barcaca.png'}
            alt={'User Profile'}
            width={112}
            height={112}
            priority
          />
        </Link>
        <p className="font-medium leading-6">@barcaca</p>
      </header>
      <div className="flex items-center justify-center">
        <ThemeToggle />
      </div>
      <div className="flex flex-col gap-4 p-6">
        {dataList.map((data, index) => {
          return (
            <IconLink
              className="flex items-center justify-center border border-black/50 bg-black/5 py-4 text-lg dark:border-white dark:bg-white/10"
              key={index}
              href={data.url}
            >
              {data.text}
            </IconLink>
          )
        })}
      </div>
      <div className="flex items-center justify-center gap-2 py-6">
        {Icons.map((icon, index) => {
          return (
            <IconLink className="" key={index} href={icon.url} icon={icon.icon}>
              {icon.name}
            </IconLink>
          )
        })}
      </div>
      <footer className="flex justify-center gap-x-2 p-6 text-[0.8125rem]/6 text-gray-700">
        {/* Texto informativo */}
        Code by{' '}
        <Link
          href="https://github.com/Barcaca"
          className="transition-color font-medium text-black hover:text-sky-500 dark:text-sky-300"
        >
          {/* Link to the developer's homepage */}
          Luan Barcaça
        </Link>
      </footer>
    </div>
  )
}
