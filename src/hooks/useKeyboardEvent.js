import { useEffect } from 'react'

export function useKeyboardEvent ({ setOpen }) {
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      const keyValue = event.key
      // const codeValue = event.code
      if (keyValue.match('Escape')) setOpen(false)
    }, false)
  }, [])
}
