import './button.style.css'
const Buttons = (props) => {
    const designClass = props.design
    const Value = props.valueName
    const typeName = props.types
    return(
        <div>
            <button type={typeName} className={designClass} onClick={props.onClick}>{Value}</button>
        </div>
    )
}
export default Buttons