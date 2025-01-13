import { motion } from "motion/react"
import { Dispatch, MouseEvent, SetStateAction, useState } from "react"
import { cards } from "../App"
import clsx from "clsx"
import { Check } from "./svgs/check"
import { Copy } from "./svgs/copy"

interface Props {
  activeIndex: number,
  setActiveIndex: Dispatch<SetStateAction<number | null>>,
}

export function ActiveCard({ activeIndex, setActiveIndex }: Props) {
  const [isCopied, setIsCopied] = useState(false)

  function handleCopy(e: MouseEvent<HTMLDivElement>) {
    e.stopPropagation()

    if(isCopied) return 

    navigator.clipboard.writeText('1298 3408 3248 3249')
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 700);
  }

  return (
    <motion.div 
      onClick={() => setActiveIndex(null)}
      layoutId={`card-${activeIndex}`}
      style={{ 
        borderRadius: 12,
        boxShadow: 'inset 0px 40px 70px rgba(255, 255, 255, .15)'
      }}
      className={clsx(
        "h-40 w-full mb-2 p-2 cursor-default flex flex-col justify-between text-white",
        cards[activeIndex].bgColor
      )}
    >
      <div className="flex justify-between">
        <span>{ cards[activeIndex].name }</span>
        <div className="flex">
          <div className="w-6 h-6 relative left-3 rounded-full border-[1px] border-white" />
          <div className="w-6 h-6 rounded-full border-[1px] border-white" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between text-sm">
          <span className="flex group justify-center items-center relative">
            <span className="group-hover:scale-x-95 scale-x-100 duration-150 ease-in-out">
              1298 3408 3248 3249
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                onClick={handleCopy}
                className={clsx(
                  "bg-white text-black text-xs px-2 py-1 rounded-full font-medium",
                  "opacity-0 group-hover:opacity-100 duration-200 ease-out",
                  "flex justify-center items-center gap-1 cursor-pointer"
                )}
              >
                {
                  isCopied ?
                    <Check />
                  :
                    <Copy />
                }
                {`Cop${isCopied ? 'ied' : 'y'}`}
              </div>
            </div>
          </span>
          <span>12/27</span>
        </div>
        <span className="text-sm font-semibold">Wilfried Ngassarou</span>
      </div>
    </motion.div>
  )
}