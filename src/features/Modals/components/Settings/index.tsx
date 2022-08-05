import { useMotionValue } from 'framer-motion'
import { useState } from 'react'

import * as S from './styles'

import { Button } from 'components/Button'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { I_TaskItem } from 'models/ui'
import { closeModal, updateToolbar } from 'store/ui'
import * as C from 'styles/components'
import { getIcon } from 'utils/helpers/icons'

export const SettingsModal = () => {
  const toolbar = useStoreSelector((state) => state.ui.toolbar)
  const dispatch = useStoreDispatch()

  const [items, setItems] = useState(toolbar)

  const handleClose = () => {
    dispatch(closeModal(null))
  }

  const handleSaveItems = () => {
    dispatch(updateToolbar(items))
  }

  return (
    <S.Window>
      <div>
        <S.WindowClose onClick={handleClose}>X</S.WindowClose>
        <C.Divider />
        Options
        <C.Divider />
        TaskBar:
        <C.Divider />
        <S.TaskBarConstructor axis='x' onReorder={setItems} values={items}>
          {items.map((item) => (
            <TaskBarConstructorItem key={item.name} item={item} />
          ))}
        </S.TaskBarConstructor>
        <C.Divider />
        <Button onClick={handleSaveItems}>Save</Button>
      </div>
      <S.WindowActions>PRIVET</S.WindowActions>
    </S.Window>
  )
}

interface TaskBarConstructorItemProps {
  item: I_TaskItem
}

export const TaskBarConstructorItem = ({ item }: TaskBarConstructorItemProps) => {
  const x = useMotionValue(0)

  return (
    <S.TaskBarConstructorItem value={item} id={item.name} style={{ x }}>
      {getIcon(item.icon)}
    </S.TaskBarConstructorItem>
  )
}
