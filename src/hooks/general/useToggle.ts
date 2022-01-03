import {useState} from "react";

export const useToggle = (initial: boolean = false) => {
 const [state, setState] = useState(initial)
 const toggle = (value?: boolean) =>
  setState(typeof value === 'undefined' ? !state : value)
 return {toggle, state}
}