import {useState} from "react";

export const useLoad = (initial: boolean = true) => {
 const [load, setLoad] = useState<boolean>(initial)
 const startLoad = () => setLoad(true)
 const stopLoad = () => setLoad(false)
 return {load, startLoad, stopLoad}
}