import {useState, useEffect} from "react";


export const useScroll = (margen = 10)  => {

    const [scrolled, setScrolled] = useState(false)


    useEffect(() =>{
        const handleScroll = () =>{
            if (window.scrollY > margen){
                setScrolled(true)
            }else{
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [margen])

    return scrolled
}