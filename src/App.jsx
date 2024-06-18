import { useState } from 'react'
import './App.css'
import {Btn} from './componets';
import {Valor} from './componets';
import {ResultDisplay} from './componets';
let aux=''
let operador
let nextResult
let resultado=[]

function App() {
  const buttonIds = ['1', '2', '3', '4','5','6','7','8','9','0','+','-','*','/','=',"DEL","AC"];
  const [result, setResult] = useState("");
  const handleChangeValue=(value)=>{
    if(!isNaN(value)){
      setResult((result)=>result+value)
      }else if(value==='='){
        if(aux===''){
          setResult("error")   
        }else{
         operar()
        resultado.push(nextResult) 
        }
        
      }else{
        aux=parseInt(result)
        operador=value
        setResult("")
      }
  }
  const operar=()=>{
    
    switch (operador) {
      case '+':
        nextResult=aux+parseInt(result)
        setResult(nextResult)       
        break;
      case '-':
        nextResult=aux-parseInt(result)
        setResult(nextResult)  
        break;
      case '*':
        nextResult=(aux)*(parseInt(result))
        setResult(nextResult)  
        break;
      case '/':
        if(parseInt(result)>0){
          nextResult=(aux)/(parseInt(result))
          setResult(nextResult)  
        break;
        }else{
          nextResult="indeterminado"
          setResult(nextResult)  
        break;
        }      
      case "DEL":
        setResult((prevResult) => prevResult.substring(0,prevResult.length()-1)); 
        break;    
      case "AC":
        setResult('')  
        break;
    
    }
    
  }
  return (
    <>
      <Valor num={result}></Valor>
      <div className='botones'>
        {buttonIds.map(id => (
          <Btn key={id} onClick={handleChangeValue} id={id}/>
        ))}
      </div>
      <ResultDisplay  resultados={resultado}></ResultDisplay>
      
    </>
  )
}
export default App
