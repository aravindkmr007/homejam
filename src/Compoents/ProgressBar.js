import React from 'react'
import "./ProgressBar.css"
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
function ProgressBar() {
    return (
        
            <div className="ring">
                <div className="Progress_Item ">
                    <FavoriteBorderIcon color="primary" style={{ fontSize: 35 }} />
                    <div>0</div>
                    <label>Label</label>
                </div>

            </div>
    )
}

export default ProgressBar
