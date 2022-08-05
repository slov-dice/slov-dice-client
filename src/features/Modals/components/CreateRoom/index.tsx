import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { typeOptions, sizeOptions } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/close.svg'
import { Button, Switch } from 'components/Buttons'
import { TextField, SelectField } from 'components/InputFields'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { getSocket } from 'services/utils'
import { joinRoom } from 'store/profile'
import { setRoom } from 'store/room'
import { closeModal } from 'store/ui'
import * as C from 'styles/components'
import { RoomTypeEnum } from 'models/app'
import { EmitNamespace, EmitPayload, SubscribeNamespace, SubscriptionData } from 'types/socket'
import { ROUTES } from 'utils/constants/routes'

export const CreateRoomModal = () => {
  const [form, setForm] = useState({
    'room-name': '',
    'room-size': 2,
    'room-private': false,
    'room-password': '',
  })
  const [selectedSizeOption, setSelectedSizeOption] = useState(sizeOptions[0])
  const [selectedTypeOption, setSelectedTypeOption] = useState(typeOptions[0])
  const dispatch = useStoreDispatch()

  const handleClose = () => {
    dispatch(closeModal(null))
  }

  const handleSelectSize = (item: string) => {
    setSelectedSizeOption(item)

    const size = item.split(':')[1]
    setForm((prev) => ({ ...prev, 'room-size': +size }))
  }

  const handleSwitchType = (item: string) => {
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
    const roomType = form['room-private'] ? RoomTypeEnum.private : RoomTypeEnum.public

    const createRoomPayload: EmitPayload[EmitNamespace.createRoom] = {
      roomName: form['room-name'],
      roomSize: form['room-size'],
      roomPassword: roomPassword,
      roomType,
    }
    getSocket().emit(EmitNamespace.createRoom, createRoomPayload)

    getSocket().once(
      SubscribeNamespace.getFullRoom,
      (data: SubscriptionData[SubscribeNamespace.getFullRoom]) => {
        console.log(SubscribeNamespace.getFullRoom, data.fullRoom)
        dispatch(setRoom(data.fullRoom))
        dispatch(joinRoom())
        router.push(`${ROUTES.room}/${data.fullRoom.id}`)
      },
    )

    handleClose()
  }

  return (
    <S.Window>
      <S.WindowHead>
        <S.WindowClose onClick={handleClose}>
          <CloseIcon />
        </S.WindowClose>
        <S.WindowTitle>Создание комнаты</S.WindowTitle>
      </S.WindowHead>
      <S.WindowContent>
        <TextField
          value={form['room-name']}
          onChange={handleChangeForm}
          name='room-name'
          placeholder='Название...'
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
        <Switch
          value={selectedTypeOption}
          onChange={(item: string) => handleSwitchType(item)}
          options={typeOptions}
        />
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
      </S.WindowContent>
      <S.WindowActions>
        <Button onClick={handleClose} variants={Button.variants.secondary}>
          Отмена
        </Button>
        <Button onClick={handleCreateRoom}>Создать</Button>
      </S.WindowActions>
    </S.Window>
  )
}
