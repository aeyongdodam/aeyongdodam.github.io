'use client'

import { useEffect, useRef, useState } from 'react'

const MacContent = ({ setLoaded }: { setLoaded: (value: boolean) => void }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [headers, setHeaders] = useState<string[]>([])

  useEffect(() => {
    if (contentRef.current) {
      setLoaded(true) // 요소가 렌더링됐다고 가정
    }
  }, [setLoaded])

  useEffect(() => {
    if (contentRef.current) {
      const extractedHeaders: string[] = []
      contentRef.current
        .querySelectorAll('h1, h2')
        .forEach((header: Element) => {
          extractedHeaders.push(header.textContent || '')
        })
      setHeaders(extractedHeaders)
    }
  }, [])

  return (
    <>
      <h1 className="font-inter m absolute left-1/2 top-24p -translate-x-1/2 transform text-4p font-semibold">
        글 제목
      </h1>
      <div
        ref={contentRef}
        className="absolute left-9.2p top-38p flex max-w-68p flex-col space-y-10"
      >
        <h2 className="break-words text-left text-2p font-semibold">
          제목1가나다라가나다라가나다라마
        </h2>
        {/* 왜.... 어쩔땐 띄어쓰기가 되고 어쩔땐 안되는걸까... 너무 괴롭다 */}
        <p className="break-words">가나다라 </p>
        <h2 className="break-words text-left text-2p font-semibold">
          제목2제목1가나다라가나다라가나다라마
        </h2>
        <p className="break-words">내용</p>
        <h2 className="break-words text-left text-2p font-semibold">
          제목3제목1가나다라가나다라가나다라마
        </h2>
        <p className="break-words">내용 </p>
      </div>
      <div className="absolute left-80p top-38p flex flex-col">
        <div className="relative pl-4">
          <div className="before:absolute before:inset-y-0 before:left-0 before:w-0.7p before:bg-black before:content-['']">
            {headers.map((header, index) => (
              <div key={index} className="text-1.25rem mb-7p last:mb-0">
                {header}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default MacContent
