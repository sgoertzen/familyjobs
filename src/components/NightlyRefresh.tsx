import { differenceInMilliseconds, setHours, startOfTomorrow } from "date-fns";
import { useEffect, useState } from "react";


export const NightlyRefresh = () => {
    
    const refreshPage = () => {
        window.location.reload();
    }

    const [timer, setTimer] = useState<NodeJS.Timeout>()
    useEffect(() => {
        let tomorrow3AM =  setHours(startOfTomorrow(), 3)
        setTimer( setTimeout(refreshPage, differenceInMilliseconds(tomorrow3AM, new Date())) )
    }, [])

    useEffect(() => {
        // componentWillUnmount
        return () => {
            if (timer !== undefined) {
                clearTimeout(timer);
            }
        }
      }, [timer]);

    return null
}