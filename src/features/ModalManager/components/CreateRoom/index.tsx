import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { typeOptions, sizeOptions } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/close.svg'
import { Button } from 'components/Buttons'
import { TextField, SelectField } from 'components/InputFields'
import { Switch, T_SwitchOption } from 'components/Switch'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { t } from 'languages'
import { E_RoomType } from 'models/app'
import { emitCreateRoom } from 'store/room'
import * as C from 'styles/components'

export const CreateRoomModal = () => {
  const dispatch = useStoreDispatch()

  const [form, setForm] = useState({
    'room-name': '',
    'room-size': 2,
    'room-private': false,
    'room-password': '',
  })
  const [selectedSizeOption, setSelectedSizeOption] = useState(sizeOptions[0])
  const [selectedTypeOption, setSelectedTypeOption] = useState(typeOptions[0])

  const handleClose = () => {
    dispatch(closeModal())
  }

  const handleSelectSize = (item: string) => {
    setSelectedSizeOption(item)

    const size = item.split(':')[1]
    setForm((prev) => ({ ...prev, 'room-size': +size }))
  }

  const handleSwitchType = (item: T_SwitchOption) => {
    setSelectedTypeOption(item)
    const isPrivate = item === typeOptions[1]
    setForm((prev) => ({ ...prev, 'room-private': isPrivate }))
  }

  const handleChangeForm = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCreateRoom = () => {
    if (!form['room-name'].trim()) return
    const roomPassword = form['room-password']
    const roomType = form['room-private'] ? E_RoomType.private : E_RoomType.public

    const createRoomPayload = {
      roomName: form['room-name'],
      roomSize: form['room-size'],
      roomPassword: roomPassword,
      roomType,
    }
    dispatch(emitCreateRoom(createRoomPayload))
    handleClose()
  }

  return (
    <S.Window>
      <S.WindowClose onClick={handleClose}>
        <CloseIcon />
      </S.WindowClose>
      <C.Title>{t('modals.createRoom.title')}</C.Title>
      <C.Divider />

      <TextField
        value={form['room-name']}
        onChange={handleChangeForm}
        name='room-name'
        placeholder='name...'
        fullWidth
      />
      <C.Divider />
      <SelectField
        value={selectedSizeOption}
        onChange={(item) => handleSelectSize(item)}
        options={sizeOptions}
        fullWidth
      />
      <C.Divider />
      <Switch value={selectedTypeOption.value} onChange={handleSwitchType} options={typeOptions} />
      <C.Divider />
      <AnimatePresence exitBeforeEnter>
        {selectedTypeOption === typeOptions[1] && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ x: { type: 'ease' } }}
          >
            <TextField
              onChange={handleChangeForm}
              name='room-password'
              placeholder='Пароль...'
              fullWidth
            />
          </motion.div>
        )}
      </AnimatePresence>
      <S.WindowActions>
        <Button onClick={handleClose} mod={Button.mod.primary}>
          CANCEL
        </Button>
        <Button onClick={handleCreateRoom}>CREATE</Button>
      </S.WindowActions>
    </S.Window>
  )
}
