import './Card.css'

function Card(props){
    const classes = 'card ' + props.className; //TODO: this is to make sure any value set in the class name prop is added to the classes const, class from expense item,
    return <div className= {classes}>{props.children}</div>

}


export default Card;