import { Input } from "./style";

// eslint-disable-next-line react/prop-types
export function InputGlobal({placeholderProps, typeProps, refProps}){
  return <Input ref={refProps} placeholder={placeholderProps} type={typeProps}/>
}