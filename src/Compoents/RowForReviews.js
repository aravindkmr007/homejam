import React from 'react'
import "./RowForReviews.css"
function RowForReviews() {
    return (
        <div className="row row_re">
            <div className="row_header">
                <h3 className="title">Reviews</h3>
                <a href="/" className="row_Button_View">1-12</a>
            </div>
            <div className="row_cards_reviews">
                <div className="card reviewer col-lg-3 col-md-3 col-sm-4">
                    <div className="reviewer_header">
                        <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="ReviewsImg"/>
                        <div className="reviewer_details">
                            <h5>Aravindakumar</h5>
                            <label>Chennai,TamilNadu</label>
                        </div>
                    </div>
                    <div className="review">
                    <p>
                        Lorem Ipsum refers to a dummy block of text that is often used in publishing and graphic design to fill gaps in the page before the actual words are put into the finished product.
                         Lorem ipsum resembles Latin but has no real meaning.
                        </p>

                    </div>  
                </div>
                <div className="card reviewer col-lg-3 col-md-3 col-sm-4">
                    <div className="reviewer_header">
                        <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="ReviewsImg"/>
                        <div className="reviewer_details">
                            <h5>Aravindakumar</h5>
                            <label>Chennai,TamilNadu</label>
                        </div>
                    </div>
                    <div className="review">
                    <p>
                        Lorem Ipsum refers to a dummy block of text that is often used in publishing and graphic design to fill gaps in the page before the actual words are put into the finished product.
                         Lorem ipsum resembles Latin but has no real meaning.
                        </p>

                    </div>  
                </div>
                <div className="card reviewer col-lg-3 col-md-3 col-sm-4">
                    <div className="reviewer_header">
                        <img src="https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg" alt="ReviewsImg"/>
                        <div className="reviewer_details">
                            <h5>Aravindakumar</h5>
                            <label>Chennai,TamilNadu</label>
                        </div>
                    </div>
                    <div className="review">
                        <p>
                        Lorem Ipsum refers to a dummy block of text that is often used in publishing and graphic design to fill gaps in the page before the actual words are put into the finished product.
                         Lorem ipsum resembles Latin but has no real meaning.
                        </p>

                    </div>  
                </div>
            </div>

            
        </div>
    )
}

export default RowForReviews



