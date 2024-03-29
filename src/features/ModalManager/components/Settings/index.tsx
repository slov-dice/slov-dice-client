import { useMotionValue } from 'framer-motion'
import { useState } from 'react'

import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import { I_TaskItem } from 'features/Header/models'
import { updateToolbar } from 'features/Header/slice'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import * as C from 'styles/components'
import { getAppIcon } from 'utils/icons/app'

export const SettingsModal = () => {
  const toolbar = useStoreSelector((store) => store.header.toolbar)
  const dispatch = useStoreDispatch()

  const [items, setItems] = useState(toolbar)

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleSaveItems = () => {
    dispatch(updateToolbar(items))
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.settings.title')}</C.Title>
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
    </S.Modal>
  )
}

interface TaskBarConstructorItemProps {
  item: I_TaskItem
}

export const TaskBarConstructorItem = ({ item }: TaskBarConstructorItemProps) => {
  const x = useMotionValue(0)

  return (
    <S.TaskBarConstructorItem value={item} id={item.name} style={{ x }}>
      {getAppIcon(item.icon)}
    </S.TaskBarConstructorItem>
  )
}
