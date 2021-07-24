import {useState,useEffect} from 'react'

const useWindowScroll = () => {
    const [scrollHeight, setScrollHeight] = useState({
        height:undefined
    });
    useEffect(()=>{
        const handleScroll=()=>{
            setScrollHeight({
                height:window.scrollY,
            })
        }    

        window.addEventListener('scroll',handleScroll);
        
        handleScroll();
        return ()=>window.removeEventListener('scroll',handleScroll);
    },[])
    return scrollHeight
}
export default useWindowScroll
