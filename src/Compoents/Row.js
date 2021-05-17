import React  from "react";
import TheatersIcon from '@material-ui/icons/Theaters';
import './Row.css'


function Row({ title, fetchUrl, isLargeRow }) {


  return (
    <div className="row">
            <div className="row_header">
                <h3 className="title">Upcoming Shows</h3>
                <a href="/" className="row_Button_View">ViewAll</a>
            </div>
            <div className="row_cards">
                <div className="card singer col-lg-2 col-md-3 col-sm-4">
                    <img className src="https://imagevars.gulfnews.com/2018/1/21/1_16a0847aa61.2160631_3262452866_16a0847aa61_large.jpg"  alt="aravind" />
                    <div className="card-body">
                        <header>Folk</header>
                        <h5 className="card-title">Bennay Dayal</h5>
                        <div className="cards_Bottom">
                            <a href="/">More Info</a>
                            <TheatersIcon fontSize="medium" color="primary" />
                        </div>
                    </div>
                </div>
                <div className="card singer col-lg-2 col-md-3 col-sm-4 ">
                    <img className src="https://imagevars.gulfnews.com/2018/1/21/1_16a0847aa61.2160631_3262452866_16a0847aa61_large.jpg"  alt="aravind" />
                    <div className="card-body">
                        <header>Folk</header>
                        <h5 className="card-title">Bennay Dayal</h5>
                        <div className="cards_Bottom">
                            <a href="/">More Info</a>
                            <TheatersIcon fontSize="medium" color="primary" />
                        </div>
                    </div>
                </div>
                <div className="card singer col-lg-2 col-md-3 col-sm-4 ">
                    <img className src="https://imagevars.gulfnews.com/2018/1/21/1_16a0847aa61.2160631_3262452866_16a0847aa61_large.jpg"  alt="aravind" />
                    <div className="card-body">
                        <header>Folk</header>
                        <h5 className="card-title">Bennay Dayal</h5>
                        <div className="cards_Bottom">
                            <a href="/">More Info</a>
                            <TheatersIcon fontSize="medium" color="primary" />
                        </div>
                    </div>
                </div>
                <div className="card singer col-lg-2 col-md-3 col-sm-4 ">
                    <img className src="https://imagevars.gulfnews.com/2018/1/21/1_16a0847aa61.2160631_3262452866_16a0847aa61_large.jpg"  alt="aravind" />
                    <div className="card-body">
                        <header>Folk</header>
                        <h5 className="card-title">Bennay Dayal</h5>
                        <div className="cards_Bottom">
                            <a href="/">More Info</a>
                            <TheatersIcon fontSize="medium" color="primary" />
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
  );
}

export default Row;
