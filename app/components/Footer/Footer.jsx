import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="flex justify-around bg-neutral-900 bg-opacity-90 px-12 pb-28 pt-8 text-white">
      <div className="flex flex-col gap-4">
        <Link href="/" className="hover:underline">
          Biz haqimizda
        </Link>
      </div>
      <span className="rounded-md border-2 border-black" />
      <div className="flex flex-col gap-4">
        <Link href="/" className="hover:underline">
          Qoidalarimiz va maxfiylik
        </Link>
        <Link href="/" className="hover:underline">
          Foydalanuvchi shartnomasi
        </Link>
      </div>
      <span className="rounded-md border-2 border-black" />
      <section className="flex flex-col gap-4">
        <h3 className="font-medium">Bizning ijtimoiy tarmoqlarimiz</h3>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com">
            <Image
              src={'/icons/instagram.svg'}
              alt="instagram"
              width={24}
              height={24}
              className="size-8 transition-all hover:scale-110"
            />
          </Link>
          <Link href="https://www.facebook.com">
            <Image
              src={'/icons/facebook.svg'}
              alt="facebook"
              width={24}
              height={24}
              className="size-8 transition-all hover:scale-110"
            />
          </Link>
          <Link href="https://www.telegram.org">
            <Image
              src={'/icons/telegram.svg'}
              alt="telegram"
              width={24}
              height={24}
              className="size-8 transition-all hover:scale-110"
            />
          </Link>
        </div>
      </section>
    </footer>
  )
}

export default Footer
