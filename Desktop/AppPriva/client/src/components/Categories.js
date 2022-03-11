import React  from "react";
import food from '../images/food.png'
import fix from '../images/fix.png'
import out from '../images/out.png'
import buy from '../images/buy.png'
import travel from '../images/travel.png'
import help from '../images/help.png'

import { connect } from "react-redux";
import {setcategory} from '../reducers/action'





function Categories(props) {

    const nameCategory = (event)=>{
        // console.log(event.target.id);
        props.dataFromCategory(event.target.id)

    }
   
        return (
                <>
                    <div className="CategoriesSection">
                        <ul>
                            <li>
                                <div className="divCategories"  >
                                    <img  className="imgCategories" src={food} alt="food_img"/>
                                    <span onClick={nameCategory} id="food" >food</span>
                                </div>
                            </li>
                            <li>
                                <div className="divCategories">
                                    <img className="imgCategories" src={fix} alt="fix_img" />
                                    <span onClick={nameCategory} id="Fix">fix</span>
                                </div>
                            </li>
                            <li>
                                <div className="divCategories">
                                    <img className="imgCategories" src={out} alt="out_img" />
                                   <span onClick={nameCategory} id="Out">out</span>
                                </div>
                            </li>
                            <li>
                                <div className="divCategories">
                                    <img className="imgCategories" src={buy} alt="buy_img" />
                                   <span onClick={nameCategory} id="Buy">buy</span>
                                </div>
                            </li>
                            <li>
                                <div className="divCategories">
                                    <img className="imgCategories" src={travel} alt="travel_img" />
                                    <span onClick={nameCategory} id="Travel">travel</span> 
                                </div>
                            </li>
                            <li>
                                <div className="divCategories">
                                    <img className="imgCategories" src={help} alt="help_img" />
                                    <span onClick={nameCategory} id="Help">help</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </>
        
        
        )
    
    
}



const mapStateToProps = (state) => {
    // console.log("state from categories ",state.category);
    return {
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       
        dataFromCategory : (category)=> dispatch(setcategory(category))
    }
}






export default connect(mapStateToProps, mapDispatchToProps)(Categories)