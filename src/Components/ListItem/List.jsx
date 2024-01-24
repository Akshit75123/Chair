import Styles from './List.module.css'

const List = (props) => {
    return (
        <div>
            <li href = "#" className={Styles.list_item}>{props.name}</li>
        </div>
    )
}

export default List