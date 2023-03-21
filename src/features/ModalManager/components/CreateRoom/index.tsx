import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

import { typeOptions, sizeOptions } from './data'
import * as S from './styles'

import CloseIcon from 'assets/icons/app/close.svg'
import { Button } from 'components/Buttons'
import { TextField, SelectField } from 'components/InputFields'
import { Switch, T_SwitchOption } from 'components/Switch'
import { closeModal } from 'features/ModalManager/slice'
import { useStoreDispatch } from 'hooks/useStoreDispatch'
import { useStoreSelector } from 'hooks/useStoreSelector'
import { t } from 'languages'
import { E_RoomType } from 'models/shared/app'
import { appActions } from 'store/app'
import { E_AppLoader } from 'store/app/data'
import { roomActions } from 'store/room'
import * as C from 'styles/components'

export const CreateRoomModal = () => {
  const dispatch = useStoreDispatch()

  const { isUserInRoom, isRoomCreating } = useStoreSelector((store) => ({
    isUserInRoom: store.profile.statuses.inRoom,
    isRoomCreating: store.app.loaders.isRoomCreating,
  }))

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
    if (!form['room-name'].trim() || (form['room-private'] && !form['room-password'].trim())) return
    if (isRoomCreating) return
    dispatch(appActions.setLoading({ loader: E_AppLoader.isRoomCreating, status: true }))
    const roomPassword = form['room-password']
    const roomType = form['room-private'] ? E_RoomType.private : E_RoomType.public

    const createRoomPayload = {
      roomName: form['room-name'],
      roomSize: form['room-size'],
      roomPassword: roomPassword,
      roomType,
    }
    if (isUserInRoom) {
      dispatch(roomActions.emitLeaveRoom())
    }
    dispatch(roomActions.emitCreateRoom(createRoomPayload))
    handleClose()
  }

  return (
    <S.Modal>
      <S.ModalClose onClick={handleClose}>
        <CloseIcon />
      </S.ModalClose>
      <C.Title>{t('modals.createRoom.title')}</C.Title>

      <S.ModalContent>
        <div>
          <C.Divider />
          <TextField
            value={form['room-name']}
            onChange={handleChangeForm}
            name='room-name'
            placeholder={t('modals.createRoom.fields.name')}
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
            value={selectedTypeOption.value}
            onChange={handleSwitchType}
            options={typeOptions}
            name='roomType'
          />
          <C.Divider />
          <AnimatePresence mode='wait'>
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
                  placeholder={t('modals.createRoom.fields.password')}
                  fullWidth
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div>
          <C.Divider decorated />
          <S.ModalActions>
            <Button onClick={handleClose} mod={Button.mod.secondary}>
              {t('modals.createRoom.actions.cancel')}
            </Button>
            <Button disabled={isRoomCreating} onClick={handleCreateRoom}>
              {t('modals.createRoom.actions.create')}
            </Button>
          </S.ModalActions>
        </div>
      </S.ModalContent>
    </S.Modal>
  )
}
