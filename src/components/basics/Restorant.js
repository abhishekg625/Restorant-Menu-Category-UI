import React, { useState } from 'react';
import  './style.css';
import Menu from './menuAPI';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


// const uniqueList =  [...new Set(Menu.map((currEle)=>{
//   return currEle.category;
// })), "All",];
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

const Restorant = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList)


  const filterItem=(category)=>{
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList =Menu.filter((currEle)=>{
      return currEle.category===category;
    })
    setMenuData(updatedList);

  }
 
  return (
    <>
    <Navbar filterItem={filterItem} menuList={menuList}  />
    <MenuCard  menuData={menuData}/>
    
    </>
  )
}

export default Restorant
