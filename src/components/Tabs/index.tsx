import { motion, AnimatePresence } from 'framer-motion'
import { ReactElement, useState } from 'react'

import * as S from './styles'

import { t } from 'languages'

interface I_TabsProps {
  children: ReactElement[]
}

export const Tabs = ({ children }: I_TabsProps) => {
  const [selectedTab, setSelectedTab] = useState<ReactElement>(children[0])

  const handleSetActiveTab = (item: ReactElement) => () => {
    setSelectedTab(item)
  }

  return (
    <>
      <S.TabBar>
        {children.map((item) => (
          <S.Option
            key={item.props.id}
            isSelected={item.props.id === selectedTab.props.id}
            onClick={handleSetActiveTab(item)}
          >
            {t(item.props.tabTitle)}
            {item.props.id === selectedTab.props.id ? <S.Underline layoutId='underline' /> : null}
          </S.Option>
        ))}
      </S.TabBar>
      <AnimatePresence mode='wait'>
        <motion.div
          key={selectedTab.props.id}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {selectedTab || ''}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

interface I_TabProps {
  children: ReactElement
  id: string
  tabTitle: string
}
export const Tab = ({ children }: I_TabProps) => children
