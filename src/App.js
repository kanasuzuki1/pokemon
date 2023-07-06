import './App.css';
import Titleimage from './pokemonzya.png';
import React, {Component} from 'react';


class Menu extends Component{
  render(){
  return<div>
    <img src={Titleimage} alt="タイトルイメージ"/>           
      <button>PLAY</button>
      <button>ポケ図鑑</button>
  </div>
   }
}

export default Menu;

