import React from 'react'

import img2 from "./img2.png"
function Card() {
    return (
        <div>
            <div class="container px-4 py-5" id="custom-cards">
                <h2 class="pb-2 border-bottom">Custom cards</h2>

                <div class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" backgroundImage={img2}>
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Short title, long jacket</h2>
                            
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: {img2}}}>
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Much longer title that wraps to multiple lines</h2>
                           
                            </div>
                        </div>
                    </div>

                    <div class="col">
                        <div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-4 shadow-lg" style={{backgroundImage: "url('unsplash-photo-3.jpg')"}}>
                            <div class="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                                <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">Another longer title belongs here</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card