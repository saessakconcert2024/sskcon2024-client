'use client'

import MOCK_LIST from '@/taeheon/_mocks/MockList'
import { useState } from 'react'
import classes from './questionAccordion.module.css'
import QuestionAndAnswer from './QuestionAndAnswer'
import CategoryBanner from './CategoryBanner'

export default function QuestionAccordion() {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({})

  const onSectionClick = (id: number) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [id]: !prevOpenSections[id],
    }))
  }

  return (
    <div className={classes.container}>
      {MOCK_LIST.map((category) => (
        <div className={classes.card} key={category.category}>
          <CategoryBanner category={category.category} />
          {category.list.map((item) => (
            <QuestionAndAnswer
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              active={!!openSections[item.id]}
              highlightText={item.highlightText}
              onSectionClick={() => onSectionClick(item.id)}
            />
          ))}
        </div>
      ))}
    </div>
  )
}
