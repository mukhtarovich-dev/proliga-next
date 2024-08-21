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
    setCurrentIndex((currentIndex - 1 + slides.length) % slides)
  }
  return (
    <div className="relative w-full  mx-auto ">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          <div className="w-full flex-shrink-0">
            <section className="h-auto bg-[#222222] md:px-[6rem] px-[1rem] py-[3rem] ">
              <div className="bg-[#FFF400]  md:w-1/3 w-auto pl-8 transform skew-x-45">
                <h3 className="text-black   text-[25px] italic font-bold">Umumiy Qoidalar</h3>
              </div>

              <div className="sm:flex block items-center justify-center">
                <div className="flex flex-wrap mt-[2rem] justify-center items-center">
                  <div className="flex flex-col ml-10 flex-wrap justify-center items-center">
                    <h2 className="uppercase">jamoa yig&apos;ing</h2>
                    <p>100 millionlik byudjetdan
                      foydalaning va chempionatning eng yaxshifutbolchilaridan iborat jamoani to&apos;plang</p>
                  </div>

                  <div className="relative sm:w-[430px] sm:h-[430px] w-[230px] h-[230px]">
                    <img
                      className="absolute left-1/2 top-0 sm:w-auto sm:h-auto w-[100px] h-[100px]  transform -translate-x-1/2"
                      src="/images/promotion-3.png" />
                    <img
                      className="absolute left-1/2 bottom-0 sm:w-auto sm:h-auto w-[100px] h-[100px] transform -translate-x-1/2"
                      src="/images/promotion-4.png" />
                    <img
                      className="absolute top-1/2 left-0 sm:w-auto sm:h-auto w-[100px] h-[100px] transform -translate-y-1/2"
                      src="/images/promotion-5.png" />
                    <img
                      className="absolute top-1/2 right-0 sm:w-auto sm:h-auto w-[100px] h-[100px] transform -translate-y-1/2"
                      src="/images/promotion-6.png" />
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <img
                    className="2xl:max-w-[865px] mx-auto 2xl:max-h-[648px] lg:max-w-[600px] lg:max-h-[448px] max-w-[400px] max-h-[248px] w-auto h-auto"
                    src="/images/promotion-1.png" />
                </div>
              </div>
            </section>
          </div>
          <div className="w-full flex-shrink-0">
            <section className="flex h-full bg-[#222222] md:px-[6rem] px-[1rem] py-[3rem] ">
              <div className={'mt-24 h-full'}>
                <h2 className={'text-2xl'}>BALLARNI YIG’ING</h2>
                <p className="xl:max-w-[651px] sm:max-w-full mt-3">
                  Har bir o&apos;yinchi haqiqiy o&apos;yinlarda qilgan harakatlari uchun
                  ochko oladi yoki yo&apos;qotadi. Ballar soni o&apos;yinchining roliga qarab
                  farq qilishi mumkin. Masalan, himoyachi gol uchun 6 ochko, hujumchi esa 4 ochko
                  oladi
                </p>
              </div>
              <div className={'ml-96 mt-28'}>
                <Image width={1000} height={1000} src="/images/promotion-2.png" alt="" />
              </div>
            </section>
          </div>
          <div className="w-full flex-shrink-0">
            <section className="flex h-full bg-[#222222] md:px-[6rem] px-[1rem] py-[3rem]  ">
              <div className="mt-40 sm:flex ">
                <ul className="list-inside  pt-[15px] ">
                  <div className={'flex pl-16 text-gray-400'}>
                    <p>Jamoa</p>
                    <p className={'ml-40'}>Ball</p>
                  </div>
                  <li className={'flex mt-3'}>
                    <p className={'me-2 '}>1</p>
                    {TriangleIcons('green')}
                    <p className={'text-gray-400 w-5/6'}>Arsenal club</p>
                    <p className={'text-gray-400 '}>2048</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>2</p>
                    {TriangleIcons('red')}
                    <p className={'text-gray-400 w-5/6'}>Chicago Bears</p>
                    <p className={'text-gray-400 '}>2015</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>3</p>
                    {TriangleIcons('green')}
                    <p className={'text-gray-400  w-5/6'}>Detroit Lions</p>
                    <p className={'text-gray-400 '}>1990</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>4</p>
                    {TriangleIcons('green')}
                    <p className={'text-gray-400 w-5/6'}>Eagle Eyed</p>
                    <p className={'text-gray-400 '}>1920</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>5</p>
                    {TriangleIcons('gray')}
                    <p className={'text-gray-400 w-5/6 me-4'}>The Kings</p>
                    <p className={'text-gray-400 '}>1885</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>6</p>
                    {TriangleIcons('red')}
                    <p className={'text-gray-400 w-5/6'}>Born to Win</p>
                    <p className={'text-gray-400 '}>1755</p>
                  </li>
                  <li className={'flex mt-3'}>
                    <p className={'me-2'}>7</p>
                    {TriangleIcons('green')}
                    <p className={'text-gray-400 w-5/6'}>Red Bull Wings</p>
                    <p className={'text-gray-400 '}>1740</p>
                  </li>

                </ul>
                <div className={'mt-10 sm:ml-80'}>
                  <h1 className={''}>RAQOBATLASHING</h1>
                  <h3 className={'mt-10'}>
                    Boshqa foydalanuvchilar bilan umumiy ligada qatnashing, Ulardan ko'proq ochko ishlashga harakat
                    qiling va mavsum so'ngida g'olib bo'ling!
                  </h3>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
      <button onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2  bg-opacity-50 text-white px-4 py-2">
        <svg className="w-6 h-6 text-secondary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
        </svg>
      </button>
      <button onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2  bg-opacity-50 text-white px-4 py-2">
        <svg className="w-6 h-6 text-secondary dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
             fill="none" viewBox="0 0 8 14">
          <path stroke="currentColor" strokel-linecap="round" strokeLinejoin="round" strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
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
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACP0lEQVR4nO2YPWgUYRCGR715d785QwgBEQQLwUYQLGwsVEijXqGd1tpqpdam1ZRa+dOoO3OwjWIhNoKFhQo2ghB/QLAQQRARiZ7kRy65u0iSY/fudvfbwD4w7fI8+83dsktUUVFRsRGh1o4645n2hFHtCG0mnPGMGJb+H2d8lTYDomisle+NokGlJiY449m+AcYf6DEFVFakicv95VembrhEZaR+r77DKX4kBTjDT4llJ5UNZ7idJN+LUNyiMiERHxDFfNoAMSw4qx2ksiCGZwPId+c5LdEW3+4UNvnMEPLLExqf9msfkxPlT8MGiPJnekTizV8M00PLrz7crniRd7HbJYZfGQTMhXG4u/gAhY4sb71nQ1SofKi1Q6JYzCpAFIths3a4GPtp2iqGl5nJW+cUFK/b187dX4zPZS0vq/9KZ3OVn7xDY874S14BTvnrREzjuQU45Wu53X3L+cUn0GCPKP7kHSCKFhR7Mw8Q44e5y1t3+EGm8nULpoqTR+ckgmPZ2Me0zRneFB3gjN/STeKR/Z0GFwq/+9aNCM6PJD+uNOEM3/wF4PvYXZocOkCMb/iSl95vga8PJb/9PvaJ4a//AMzXI94/cIAzfuJd3jqrpPx0MPkIp3xLy9oIw8l09jFBlN/5FpZ1q8QfU33VCxUXvcvaxtN2SwwQ4/e+RaXvGvFsigD89i0qfdcIc8kBilclDniRHNDEifanP++ytm4WxILjiQGdU2gsn4Si5V1c0VrZipTyFRUVFRU0AP8AKFrgQmnzr6MAAAAASUVORK5CYII=" />
    )
  } else if (color === 'red') {
    return (
      <Image
        alt={'icon'}

        width={15}
        height={10}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA80lEQVR4nO3UPy5EURiG8Z+ESlSSiUSjsAWFVmgosILZBrtgDVNRKSbuOUMyGzAKG5jkJhQiohAVrkgUV3DduXOKKeZJvvZ9zvcnhykTQWQ/kkeKRJUH9sqCu4ThxWcFbsuCQWpBZFAWbATeUwoydr7tIdBJOJ7Oj0VfsBi5TxD+EGn9dU3tBB20/zvZ3hjh/YKZSkHGSuC5wWheAquV4aUuDhsIDtSlz2zgeoTwmyvmjMI5a5HXGoK3jHVNCBzXeP2RpkTmI8MKQX7GgnHosV3xHexKQeD0F8GJVHRZijyW5v50ybKUBLa+9jHM2EwaPtF8AIXjq8aSESYvAAAAAElFTkSuQmCC" />
    )
  } else {
    return (
      <Image
        alt={'icon'}

        width={20}
        height={15}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA/UlEQVR4nN2UTQ4BQRCFJ4TrEbzXuu3nGrP1dwvCkYzfOwh7UkKQaTOjlQWV1KZTqa9fV/WLor8OAHUHGEfOLJla4HhJMpWzLkCpCWpuybYjt4485Sawcca03rl11QLjwsZ8TkuOkiSpFN88oLm7QYBBmWcJau7uSpp5A90oAHbewV+35aSSxsAHmKsBgGkWQK60AJZMfYCDmgLy8FWABfa+GSwVFSx8CmaKgEkGIMalBegBnQwgjuOaJdcKgO1LhxVX/BhgTCPKC3HFDwD9qCjEch05DFjNQSm7flDSLDOTS03Rs7wKGbwYl3iL7Pb1M0ou5Ey2RWqCmv9MnAGuqJjFmbBezQAAAABJRU5ErkJggg==" />
    )
  }
}
export default Carousel