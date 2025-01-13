import clsx from "clsx";
import { motion } from "motion/react";
import { Dispatch, MouseEvent, SetStateAction } from "react";

interface Props {
  index: number,
  activeIndex: number | null,
  setActiveIndex: Dispatch<SetStateAction<number | null>>,
  item: { bgColor: string, name: string }
}

export function CardItem({ index, item, activeIndex, setActiveIndex }: Props) {
  function handleClick(e: MouseEvent<HTMLDivElement>) {
    const target = e.target as HTMLElement
    const card = target.closest('.card')! as HTMLElement;
    const index = +card.dataset.index!

    if(activeIndex != null) return setActiveIndex(null)

    setActiveIndex(index)
  }

  return (
    <motion.div
      layoutId={`card-${index}`}
      onClick={handleClick}
      data-index={index}
      whileHover={{ y: -10 }}
      style={{ 
        top: index * 30,
        borderRadius: 12,
        boxShadow: 'inset 0px 40px 70px rgba(255, 255, 255, .1)'
      }}
      className={clsx(
        "absolute left-0 top-0 w-full p-2 h-40 cursor-default",
        "flex flex-col justify-between card text-white",
        item.bgColor
      )} 
    >
      <div className="flex justify-between">
        <span>{ item.name }</span>
        <div className="flex">
          <div className="w-6 h-6 relative left-3 rounded-full border-[1px] border-white" />
          <div className="w-6 h-6 rounded-full border-[1px] border-white" />
        </div>
      </div>
      <span className="text-sm font-semibold">Wilfried Ngassarou</span>
    </motion.div>
  )
}