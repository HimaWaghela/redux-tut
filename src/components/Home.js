import React from 'react'

function Home(){
    return(
        <div>
                <div className="add-to-cart">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlRhD-UumDM3Qb9O17V-GEpIk-5Pxll6712ngDOa_DlgLPsRlwv2S4M6_BP5Atz3sJst4&usqp=CAU"/>
                </div>
            
            <h1>Home Component</h1>

        
            <div className="cart-wrapper"> 
                <div className="img-wrapper item">
                    <img src="https://image.shutterstock.com/image-photo/bangkok-thailand-25-june-2019-600w-1466022749.jpg" />
                </div>

                <div className="text-wrapper item">
                    <span>
                        Real-Me
                    </span>

                    <span>
                        Price: Rs 15,000
                    </span>

                </div>

                <div className="btn-wrapper item">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home