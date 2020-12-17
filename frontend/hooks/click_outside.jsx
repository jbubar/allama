import { useRef, useEffect } from "react";
export const useClickOutside = (handler) => {
    const ref = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
        if(ref.current && !ref.current.contains(e.target)){
            handler()
        }
    }

        document.addEventListener('mousedown', handleClickOutside)
        return () => (
            document.removeEventListener('mousedown', handleClickOutside)
        )
    }, [ref])
    return ref;
}