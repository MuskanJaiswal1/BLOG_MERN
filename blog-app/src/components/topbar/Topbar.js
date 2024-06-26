import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-facebook"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-github"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
              <li className="topListItem">HOME</li>
              <li className="topListItem">ABOUT</li>
              <li className="topListItem">CONTACT</li>
              <li className="topListItem">WRITE</li>
              <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
            <img src="https://th.bing.com/th/id/OIP.y00T3ZmjDiwe-D3idsZLpAHaHa?pid=ImgDet&rs=1" alt="ImageII" className="topImg" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
