'use client'
import React, { useState } from 'react'
import Image from 'next/image'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slides = 4
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides) % slides)
  }
  return (
    <div className="relative mx-auto w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="w-full flex-shrink-0">
            <section className="h-auto bg-[#222222] px-[1rem] py-[3rem] md:px-[6rem]">
              <div className="skew-x-45 w-auto transform bg-[#FFF400] pl-8 md:w-1/3">
                <h3 className="text-[25px] font-bold italic text-black">
                  Umumiy Qoidalar
                </h3>
              </div>

              <div className="block items-center justify-center sm:flex">
                <div className="mt-[2rem] flex flex-wrap items-center justify-center">
                  <div className="ml-10 flex flex-col flex-wrap items-center justify-center">
                    <h2 className="uppercase">jamoa yig&apos;ing</h2>
                    <p>
                      100 millionlik byudjetdan foydalaning va chempionatning
                      eng yaxshifutbolchilaridan iborat jamoani to&apos;plang
                    </p>
                  </div>

                  <div className="relative h-[230px] w-[230px] sm:h-[430px] sm:w-[430px]">
                    <img
                      alt={'img'}
                      className="absolute left-1/2 top-0 h-[100px] w-[100px] -translate-x-1/2 transform sm:h-auto sm:w-auto"
                      src="/images/promotion-3.png"
                    />
                    <img
                      alt={'img'}
                      className="absolute bottom-0 left-1/2 h-[100px] w-[100px] -translate-x-1/2 transform sm:h-auto sm:w-auto"
                      src="/images/promotion-4.png"
                    />
                    <img
                      alt={'img'}
                      className="absolute left-0 top-1/2 h-[100px] w-[100px] -translate-y-1/2 transform sm:h-auto sm:w-auto"
                      src="/images/promotion-5.png"
                    />
                    <img
                      alt={'img'}
                      className="absolute right-0 top-1/2 h-[100px] w-[100px] -translate-y-1/2 transform sm:h-auto sm:w-auto"
                      src="/images/promotion-6.png"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <img
                    alt={'img'}
                    className="mx-auto h-auto max-h-[248px] w-auto max-w-[400px] lg:max-h-[448px] lg:max-w-[600px] 2xl:max-h-[648px] 2xl:max-w-[865px]"
                    src="/images/promotion-1.png"
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="w-full flex-shrink-0">
            <section className="flex h-full bg-[#222222] px-[1rem] py-[3rem] md:px-[6rem]">
              <div className={'mt-36 h-full'}>
                <h2 className={'text-2xl'}>BALLARNI YIG’ING</h2>
                <p className="mt-3 sm:max-w-full xl:max-w-[651px]">
                  Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan
                  harakatlari uchun ochko oladi yoki yo&apos;qotadi. Ballar soni
                  o&apos;yinchining roliga qarab farq qilishi mumkin. Masalan,
                  himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko oladi
                </p>
              </div>
              <img
                className={'mt-36 h-80 w-96'}
                src="/images/promotion-2.png"
                alt=""
              />
            </section>
          </div>
          <div className="w-full flex-shrink-0">
            <section className="flex h-full bg-[#222222] px-[1rem] py-[3rem] md:px-[6rem]">
              <div className="mt-40 sm:flex">
                <ul className="list-inside pt-[15px]">
                  <div className={'flex pl-16 text-gray-400'}>
                    <p>Jamoa</p>
                    <p className={'ml-40'}>Ball</p>
                  </div>
                  <li className={'mt-3 flex'}>
                    <p className={'me-2'}>1</p>
                    {TriangleIcons('green')}
                    <p className={'w-5/6 text-gray-400'}>Arsenal club</p>
                    <p className={'text-gray-400'}>2048</p>
                  </li>
                  <li className={'mt-3 flex'}>
                    <p className={'me-2'}>2</p>
                    {TriangleIcons('red')}
                    <p className={'w-5/6 text-gray-400'}>Chicago Bears</p>
                    <p className={'text-gray-400'}>2015</p>
                  </li>
                  <li className={'mt-3 flex'}>
                    <p className={'me-2'}>3</p>
                    {TriangleIcons('green')}
                    <p className={'w-5/6 text-gray-400'}>Detroit Lions</p>
                    <p className={'text-gray-400'}>1990</p>
                  </li>
                  <li className={'mt-3 flex'}>
                    <p className={'me-2'}>4</p>
                    {TriangleIcons('green')}
                    <p className={'w-5/6 text-gray-400'}>Eagle Eyed</p>
                    <p className={'text-gray-400'}>1920</p>
                  </li>
                  <li className={'mt-3 flex'}>
                    <p className={'me-2'}>5</p>
                    {TriangleIcons('gray')}
                    <p className={'me-4 w-5/6 text-gray-400'}>The Kings</p>
                    <p className={'text-gray-400'}>1885</p>
                  </li>
                  <li className={'mt-3 flex'}>
                    <p className={'me-2'}>6</p>
                    {TriangleIcons('red')}
                    <p className={'w-5/6 text-gray-400'}>Born to Win</p>
                    <p className={'text-gray-400'}>1755</p>
                  </li>
                  <li className={'mt-3 flex'}>
                    <p className={'me-2'}>7</p>
                    {TriangleIcons('green')}
                    <p className={'w-5/6 text-gray-400'}>Red Bull Wings</p>
                    <p className={'text-gray-400'}>1740</p>
                  </li>
                </ul>
                <div className={'mt-10 sm:ml-80'}>
                  <h1 className={''}>RAQOBATLASHING</h1>
                  <h3 className={'mt-10'}>
                    Boshqa foydalanuvchilar bilan umumiy ligada qatnashing,
                    Ulardan{"ko'proq"} ochko ishlashga harakat qiling va mavsum
                    {"so'ngida g'olib bo'ling"}!
                  </h3>
                </div>
              </div>
            </section>
          </div>
          <div className="w-full flex-shrink-0">
            <section className="flex h-full bg-[#222222] px-[1rem] py-[3rem] md:px-[6rem]">
              <div className="mt-40 sm:flex"></div>
            </section>
          </div>
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
      >
        <svg
          className="text-secondary h-6 w-6 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 transform bg-opacity-50 px-4 py-2 text-white"
      >
        <svg
          className="text-secondary h-6 w-6 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14"
        >
          <path
            stroke="currentColor"
            strokel-linecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
          />
        </svg>
      </button>
    </div>
  )
}

const TriangleIcons = (color) => {
  if (color === 'green') {
    return (
      <Image
        alt={'icon'}
        width={15}
        height={10}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACP0lEQVR4nO2YPWgUYRCGR715d785QwgBEQQLwUYQLGwsVEijXqGd1tpqpdam1ZRa+dOoO3OwjWIhNoKFhQo2ghB/QLAQQRARiZ7kRy65u0iSY/fudvfbwD4w7fI8+83dsktUUVFRsRGh1o4645n2hFHtCG0mnPGMGJb+H2d8lTYDomisle+NokGlJiY449m+AcYf6DEFVFakicv95VembrhEZaR+r77DKX4kBTjDT4llJ5UNZ7idJN+LUNyiMiERHxDFfNoAMSw4qx2ksiCGZwPId+c5LdEW3+4UNvnMEPLLExqf9msfkxPlT8MGiPJnekTizV8M00PLrz7crniRd7HbJYZfGQTMhXG4u/gAhY4sb71nQ1SofKi1Q6JYzCpAFIths3a4GPtp2iqGl5nJW+cUFK/b187dX4zPZS0vq/9KZ3OVn7xDY874S14BTvnrREzjuQU45Wu53X3L+cUn0GCPKP7kHSCKFhR7Mw8Q44e5y1t3+EGm8nULpoqTR+ckgmPZ2Me0zRneFB3gjN/STeKR/Z0GFwq/+9aNCM6PJD+uNOEM3/wF4PvYXZocOkCMb/iSl95vga8PJb/9PvaJ4a//AMzXI94/cIAzfuJd3jqrpPx0MPkIp3xLy9oIw8l09jFBlN/5FpZ1q8QfU33VCxUXvcvaxtN2SwwQ4/e+RaXvGvFsigD89i0qfdcIc8kBilclDniRHNDEifanP++ytm4WxILjiQGdU2gsn4Si5V1c0VrZipTyFRUVFRU0AP8AKFrgQmnzr6MAAAAASUVORK5CYII="
      />
    )
  } else if (color === 'red') {
    return (
      <Image
        alt={'icon'}
        width={15}
        height={10}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVR4nO3UPy5EURiG8Z+ESlSSiUSjsAWFVmgosILZBrtgDVNRKSbuOUMyGzAKG5jkJhQiohAVrkgUV3DduXOKKeZJvvZ9zvcnhykTQWQ/kkeKRJUH9sqCu4ThxWcFbsuCQWpBZFAWbATeUwoydr7tIdBJOJ7Oj0VfsBi5TxD+EGn9dU3tBB20/zvZ3hjh/YKZSkHGSuC5wWheAquV4aUuDhsIDtSlz2zgeoTwmyvmjMI5a5HXGoK3jHVNCBzXeP2RpkTmI8MKQX7GgnHosV3xHexKQeD0F8GJVHRZijyW5v50ybKUBLa+9jHM2EwaPtF8AIXjq8aSESYvAAAAAElFTkSuQmCC"
      />
    )
  } else {
    return (
      <Image
        alt={'icon'}
        width={20}
        height={15}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nN2UTQ4BQRCFJ4TrEbzXuu3nGrP1dwvCkYzfOwh7UkKQaTOjlQWV1KZTqa9fV/WLor8OAHUHGEfOLJla4HhJMpWzLkCpCWpuybYjt4485Sawcca03rl11QLjwsZ8TkuOkiSpFN88oLm7QYBBmWcJau7uSpp5A90oAHbewV+35aSSxsAHmKsBgGkWQK60AJZMfYCDmgLy8FWABfa+GSwVFSx8CmaKgEkGIMalBegBnQwgjuOaJdcKgO1LhxVX/BhgTCPKC3HFDwD9qCjEch05DFjNQSm7flDSLDOTS03Rs7wKGbwYl3iL7Pb1M0ou5Ey2RWqCmv9MnAGuqJjFmbBezQAAAABJRU5ErkJggg=="
      />
    )
  }
}
export default Carousel
