export const Button = (props) => {
  const { text, bg, color, pad, click, hover } = props;
  return(
    <div>
      <button onClick={click}  onMouseOver={hover} style={{background: bg, padding: pad, color: color}}>{text}</button>
    </div>
  )
}
export default Button
