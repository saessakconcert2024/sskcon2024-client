import React from 'react'
import AskPageCard from './AskPageCard'
import QuestionAccordion from './QuestionAccordion'
import MainText from './MainText'

export default function AskPageComponent() {
  return (
    <AskPageCard>
      <MainText />
      <QuestionAccordion />
    </AskPageCard>
  )
}
