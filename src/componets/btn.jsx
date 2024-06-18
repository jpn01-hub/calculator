
const Btn=({onClick,  id})=>{

    return(
      <>
    <button id={id}  onClick={() => onClick(id)}>{id}</button>
    </>  
    )
    
}

export default Btn;