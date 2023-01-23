const charactersImages = import.meta.glob('../../../../../public/images/characters/*.webp')

export const characterAvatars = Object.keys(charactersImages).map((path) =>
  path.replace('/public', '').replace('../../../../..', ''),
)
