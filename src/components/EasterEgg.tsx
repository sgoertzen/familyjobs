import { useEffect, useState } from 'react'
import { differenceInMilliseconds, setMinutes, setHours, isAfter, addDays, setSeconds } from 'date-fns'
import { SECONDS_TO_SHOW, SlideFrom, SlidingImage } from './SlidingImage'

type eggImage = {
    src: string,
    width: number,
    height: number
    from: SlideFrom
}

const images:eggImage[] = [
    {
        src: "images/Darwin_being_cute.png",
        width: 521,
        height: 405,
        from: SlideFrom.FromBottom
    },
    {
        src: "images/Darwin_cone.png",
        width: 443,
        height: 406,
        from: SlideFrom.FromLeft
    },
    {
        src: "images/Darwin_laying.png",
        width: 373,
        height: 241,
        from: SlideFrom.FromRight
    },
    {
        src: "images/Darwin_laying_around.png",
        width: 507,
        height: 373,
        from: SlideFrom.FromLeft
    },
    {
        src: "images/Darwin_looking_cool.png",
        width: 462,
        height: 367,
        from: SlideFrom.FromRight
    },
    {
        src: "images/Darwin_splooting.png",
        width: 564,
        height: 298,
        from: SlideFrom.FromLeft
    },
    {
        src: "images/Darwin_standoffish.png",
        width: 577,
        height: 433,
        from: SlideFrom.FromBottom
    },
    {
        src: "images/Darwin_sunglasses.png",
        width: 551,
        height: 407,
        from: SlideFrom.FromBottom
    },
    {
        src: "images/Darwin_upsidedown_zoomed.png",
        width: 512,
        height: 352,
        from: SlideFrom.FromTop
    },
    {
        src: "images/Darwin_upsidedown.png",
        width: 418,
        height: 350,
        from: SlideFrom.FromTop
    },
    {
        src: "images/Darwin_with_shirt.png",
        width: 247,
        height: 489,
        from: SlideFrom.FromBottom
    }
]

const getRandomInt = (max:number):number => {
    return Math.floor(Math.random() * max);
}

export const getMillisecondsUntilEgg = (now:Date) => {
    let firstDeadline = setSeconds(setMinutes(setHours(new Date(), 12), 30), 0)
    let secondDeadline = setSeconds(setMinutes(setHours(new Date(), 18), 30), 0)

    if (isAfter(now, secondDeadline)){
        // Both of our deadlines have passed, use tomorrow first
        return differenceInMilliseconds(addDays(firstDeadline, 1), now)
    }
    if (isAfter(now, firstDeadline)) {
        return differenceInMilliseconds(secondDeadline, now)
    }
    return differenceInMilliseconds(firstDeadline, now)
}

export const EasterEgg = () => {


    let [showing, setShowing] = useState(false)
    let [timer, setTimer] = useState<NodeJS.Timeout>()
    
    useEffect(() => {
        setTimer( setTimeout(showEgg, getMillisecondsUntilEgg(new Date())) )
    }, [])

    useEffect(() => {
        // componentWillUnmount
        return () => {
            if (timer !== undefined) {
                clearTimeout(timer);
            }
        }
    }, [timer]);

    const showEgg = () => {
        setShowing(true)
        // Start time for 20 seconds.  This value needs to match the sliding image 
        setTimer( setTimeout(hideEgg, SECONDS_TO_SHOW*1000))
    }

    const hideEgg = () => {
        setShowing(false)
        setTimer( setTimeout(showEgg, getMillisecondsUntilEgg(new Date())) )
    }
    
    let selectedImage = images[getRandomInt(images.length)]

    return (
        showing ? <SlidingImage {...selectedImage} /> : null
    )
}