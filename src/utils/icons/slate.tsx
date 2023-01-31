import { ReactNode } from 'react'

import AlignCenterIcon from 'assets/icons/slate/align-center.svg'
import AlignJustifyIcon from 'assets/icons/slate/align-justify.svg'
import AlignLeftIcon from 'assets/icons/slate/align-left.svg'
import AlignRightIcon from 'assets/icons/slate/align-right.svg'
import BoldIcon from 'assets/icons/slate/bold.svg'
import CodeIcon from 'assets/icons/slate/code.svg'
import H1Icon from 'assets/icons/slate/h1.svg'
import H2Icon from 'assets/icons/slate/h2.svg'
import ItalicIcon from 'assets/icons/slate/italic.svg'
import ListOlIcon from 'assets/icons/slate/list-ol.svg'
import ListUlIcon from 'assets/icons/slate/list-ul.svg'
import QuotesIcon from 'assets/icons/slate/quotes.svg'
import UnderlineIcon from 'assets/icons/slate/underline.svg'

export enum E_SlateIcon {
  alignCenter = 'alignCenter',
  alignJustify = 'alignJustify',
  alignLeft = 'alignLeft',
  alignRight = 'alignRight',
  bold = 'bold',
  code = 'code',
  h1 = 'h1',
  h2 = 'h2',
  italic = 'italic',
  listOl = 'listOl',
  listUl = 'listUl',
  quotes = 'quotes',
  underline = 'underline',
}

export const getSlateIcon = (icon: E_SlateIcon): ReactNode => {
  switch (icon) {
    case E_SlateIcon.alignCenter:
      return <AlignCenterIcon />

    case E_SlateIcon.alignJustify:
      return <AlignJustifyIcon />

    case E_SlateIcon.alignLeft:
      return <AlignLeftIcon />

    case E_SlateIcon.alignRight:
      return <AlignRightIcon />

    case E_SlateIcon.bold:
      return <BoldIcon />

    case E_SlateIcon.code:
      return <CodeIcon />

    case E_SlateIcon.h1:
      return <H1Icon />

    case E_SlateIcon.h2:
      return <H2Icon />

    case E_SlateIcon.italic:
      return <ItalicIcon />

    case E_SlateIcon.listOl:
      return <ListOlIcon />

    case E_SlateIcon.listUl:
      return <ListUlIcon />

    case E_SlateIcon.quotes:
      return <QuotesIcon />

    case E_SlateIcon.underline:
      return <UnderlineIcon />
  }
}
