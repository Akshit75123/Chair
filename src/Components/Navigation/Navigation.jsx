import { GoPaste } from "react-icons/go";
import { LiaSearchSolid } from "react-icons/lia";
import List from "../ListItem/List"
import Style from "./Navigation.module.css"

const Navigation = () => {
    return (
        <div className={`${Style.nav}`}>
    
                <div className={Style.heading}>
                    <h1>FOLIO.</h1>
                </div>
                <div className={Style.list_items}>
                    <ul className={Style.list}>

                        <List name="HOME" />
                        <List name="PAGES" />
                        <List name="PORTFOLIO" />
                        <List name="BLOG" />
                        <List name="GALLERY" />
                        <List name="FEATURES" />
                        <List name="SHOP" />


                        <List name={<LiaSearchSolid fontSize="18px"/>}></List>
                        <List name={<GoPaste fontSize="18px"/>}></List>
                    </ul>
                </div>

            
        </div>
    )
}

export default Navigation