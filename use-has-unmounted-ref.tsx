import {useEffect, useRef} from 'react'
import { logsType } from './use-has-unmounted-ref.type'

export const useHasUnmountedRef = (sets:logsType) => {
  const {logs, title, color} = sets;
  const hasUnmountedRef = useRef(false);

  const log = (state: string) => {
    return console.log(
      "%c" + (title ? title + " " : "") + state,
      'color: ' + color ?? 'green'
    )
  }

  useEffect(() => {
    logs && log('hasMountedRef');
    return () => {
      logs && log('hasUnmountedRef');
      hasUnmountedRef.current = true;
    }
  }, []);

  return hasUnmountedRef;
}
