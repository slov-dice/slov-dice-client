import roomSettingsImage from './assets/roomSettings.webp'

import * as C from 'styles/components'

export const TutorialBarsTab = () => {
  return (
    <div>
      <div>
        <h1>Настройка баров</h1>
        <C.Divider h={16} md={8} />
        <p>
          Одна из важных составляющих любого D&D мероприятия: настройка возможных состояний для
          ваших воображаемых существ.
        </p>
        <C.Divider h={8} md={4} />
        <p>
          Данная опция находится в пункте меню «Настройки комнаты». Так как данных механизм будет
          применяться к персонажам и болванкам.
        </p>
        <C.Divider h={8} md={4} />
        <p>
          <b>И так!</b> Вы определились какие состояния будут у всех существ, дали название, выбрали
          цвет и нажали кнопку сохранить. Теперь все существующие персонажи и болванки будут иметь
          эти бары!
        </p>
        <C.Divider h={8} md={4} />
        <C.Img src={roomSettingsImage} alt='room-settings' />
      </div>
    </div>
  )
}
