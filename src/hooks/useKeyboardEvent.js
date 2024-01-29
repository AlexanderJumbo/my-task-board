import { useEffect } from 'react'

export function useKeyboardEvent ({ setOpen }) {
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const keyValue = event.key
      if (keyValue.match('Escape')) setOpen(false)
    }, false)
  }, [])
}
