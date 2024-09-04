
import './Button.modules.css';

const Button = () => {
  
      const handleClick = () => {
      console.log('Button clicked');
  }

    return (
      <button className="searchbutton" onClick={handleClick}>button</button>
    
    )
}
  
  export default Button;