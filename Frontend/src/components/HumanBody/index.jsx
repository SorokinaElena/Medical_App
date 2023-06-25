import React, { useContext } from 'react';
import s from './index.module.css';
import human from './media/Siluet_human.png';
import { Context } from '../../context';


export default function HumanBody() {

  let coords_head = "";
  let coords_right_hand = "";
  let coords_right_shoulder ="";
  let coords_left_hand = "";
  let coords_left_shoulder = "";
  let coords_right_leg = "";
  let coords_left_leg = "";
  let coords_upper_back = "";
  let coords_mid_back = "";
  let coords_small_of_the_back = "";

if (window.matchMedia('screen and (max-width: 359px)').matches) {
  coords_head = "46,0,44,40,86,42,86,2,66,1";
  coords_right_hand = "21,114,51,116,29,198,2,193";
  coords_right_shoulder = "49,50,17,67,15,92,51,95";
  coords_left_hand = "84,123,113,115,137,190,110,203";
  coords_left_shoulder = "86,51,84,91,118,93,116,67";
  coords_right_leg = "28,217,60,212,62,290,29,293";
  coords_left_leg = "82,212,78,290,110,291,114,216";
  coords_upper_back = "189,37,220,37,227,65,180,65";
  coords_mid_back = "166,73,241,73,239,110,172,109";
  coords_small_of_the_back = "184,121,226,121,234,159,179,160";
};

 if (window.matchMedia('screen and (min-width: 360px) and (max-width: 389px)').matches) {
  coords_head = "66,0,58,14,58,30,63,43,64,58,88,57,88,45,95,32,93,10,80,1";
  coords_right_hand = "28,96,31,131,23,164,20,193,1,200,11,227,25,226,32,206,45,172,46,136,48,96";
  coords_right_shoulder = "71,95,28,94,33,77,51,66,61,60,75,60";
  coords_left_hand = "105,95,108,136,111,161,125,196,133,227,148,226,147,205,157,201,140,189,126,132,127,97";
  coords_left_shoulder = "79,63,85,95,125,96,123,75,95,60";
  coords_right_leg = "42,197,43,230,51,262,50,291,53,318,61,350,58,367,51,373,73,374,75,359,76,315,74,278,73,246,79,216,77,197";
  coords_left_leg = "81,197,79,226,84,246,86,278,80,302,85,332,84,361,85,373,102,375,98,327,109,308,108,277,114,237,114,198";
  coords_upper_back = "201,78,223,53,248,53,265,63,268,77";
  coords_mid_back = "199,80,208,142,267,142,275,80";
  coords_small_of_the_back = "209,142,204,188,273,189,268,143";
};

if (window.matchMedia('screen and (min-width: 390px) and (max-width: 427px)').matches) {
  coords_head = "101,1,70,0,59,25,69,45,68,60,97,60,108,24";
  coords_right_hand = "51,102,29,102,35,141,1,214,14,246,30,244,55,167";
  coords_right_shoulder = "83,63,39,58,31,100,84,99";
  coords_left_hand = "120,101,118,175,148,246,163,240,169,213,134,102";
  coords_left_shoulder = "88,64,128,59,146,102,88,99";
  coords_right_leg = "85,207,46,207,49,292,66,387,58,404,83,405";
  coords_left_leg = "88,207,93,303,90,405,115,405,119,301,128,207";
  coords_upper_back = "234,14,244,55,199,88,321,88,275,53,284,14,257,15";
  coords_mid_back = "205,89,224,136,296,137,315,89";
  coords_small_of_the_back = "230,139,219,206,302,205,292,139";
};

if (window.matchMedia('screen and (min-width: 428px) and (max-width: 479px)').matches) {
  coords_head = "82,3,71,18,73,50,78,76,109,77,116,41,111,7";
  coords_right_hand = "57,128,33,129,38,166,21,241,0,249,12,283,31,278,56,195";
  coords_right_shoulder = "87,79,40,70,35,128,86,127";
  coords_left_hand = "134,132,131,205,164,285,185,279,189,246,165,231,151,132";
  coords_left_shoulder = "91,79,143,75,157,130,94,126";
  coords_right_leg = "97,242,52,239,53,353,80,440,55,463,95,467";
  coords_left_leg = "99,243,106,345,101,457,127,462,136,347,139,242";
  coords_upper_back = "266,28,309,28,309,68,341,100,231,102,263,67";
  coords_mid_back = "232,105,248,158,327,158,343,102";
  coords_small_of_the_back = "248,160,248,234,327,235,325,160";
};

if (window.matchMedia('screen and (min-width: 480px)').matches) {
  coords_head = "94,6,79,24,78,52,88,74,86,86,123,86,123,69,131,47,130,23,110,4";
  coords_right_hand = "40,140,42,191,25,272,3,282,14,291,13,319,35,318,46,282,66,224,62,141";
  coords_right_shoulder = "104,90,88,88,47,93,28,141,105,138";
  coords_left_hand = "150,144,151,231,174,275,181,318,203,320,214,281,187,264,174,192,173,144";
  coords_left_shoulder = "106,89,110,138,181,143,170,95,125,86";
  coords_right_leg = "59,276,59,345,70,390,73,439,87,501,73,519,94,525,105,513,103,445,101,391,105,346,107,276";
  coords_left_leg = "109,276,112,344,118,392,116,463,115,515,126,529,143,520,140,458,149,388,157,275";
  coords_upper_back = "307,67,298,80,265,116,384,115,341,67";
  coords_mid_back = "262,118,283,186,367,186,384,113";
  coords_small_of_the_back = "283,187,372,188,377,276,279,278,283,232";
};

  const {bodyArea, setBodyArea, toggleBodyArea, checked} = useContext(Context);

  const getBodyArea = (event) => {
    event.preventDefault();
    const answer = event.target.title;
    toggleBodyArea(answer);
  };

  console.log(bodyArea)

  const getDotClasses = (name, dotClass) => {
    const res = [s.dot, dotClass];
    if (bodyArea.includes(name)) {
      res.push(s.dot_active);
    }
    return res;
  }
 
  // className={getDotClasses('head', s.head).join(' ') - 'head' - title from area
  
  return (
      <div className={s.block_human}>
        <div className={getDotClasses('head', s.head).join(' ')}> </div> 
        <div className={getDotClasses('right_hand', s.right_hand).join(' ')}> </div>
        <div className={getDotClasses('right_shoulder', s.right_shoulder).join(' ')}> </div>
        <div className={getDotClasses('left_hand', s.left_hand).join(' ')}> </div>
        <div className={getDotClasses('left_shoulder', s.left_shoulder).join(' ')}> </div>
        <div className={getDotClasses('right_leg', s.right_leg).join(' ')}> </div>
        <div className={getDotClasses('left_leg', s.left_leg).join(' ')}> </div>
        <div className={getDotClasses('upper_back', s.upper_back).join(' ')}> </div>
        <div className={getDotClasses('mid_back', s.mid_back).join(' ')}> </div>
        <div className={getDotClasses('small_of_the_back', s.small_of_the_back).join(' ')}> </div>

        <img src={human} alt='human' useMap="#image-map" />

        <map name="image-map">
          <area onClick={getBodyArea} alt="head" title="head" href="" coords={coords_head} shape="poly"/>  
          <area onClick={getBodyArea} alt="right hand" title="right_hand" href="" coords={coords_right_hand} shape="poly"/>
          <area onClick={getBodyArea} alt="right shoulder" title="right_shoulder" href="" coords={coords_right_shoulder} shape="poly"/>
          <area onClick={getBodyArea} alt="left hand" title="left_hand" href="" coords={coords_left_hand} shape="poly"/>
          <area onClick={getBodyArea} alt="left shoulder" title="left_shoulder" href="" coords={coords_left_shoulder} shape="poly"/>
          <area onClick={getBodyArea} alt="right leg" title="right_leg" href="" coords={coords_right_leg} shape="poly"/>
          <area onClick={getBodyArea} alt="left leg" title="left_leg" href="" coords={coords_left_leg} shape="poly"/>
          <area onClick={getBodyArea} alt="upper back" title="upper_back" href="" coords={coords_upper_back} shape="poly"/>
          <area onClick={getBodyArea} alt="mid back" title="mid_back" href="" coords={coords_mid_back} shape="poly"/>
          <area onClick={getBodyArea} alt="small of the back" title="small_of_the_back" href="" coords={coords_small_of_the_back} shape="poly"/>
        </map>
      </div>   
  )
}

// https://www.image-map.net/


