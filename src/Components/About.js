import React from 'react'

function About(props) {
    return (
        <>
            <div className="container my-3">
                <div className="row justify-content-center">
                    <div className="card" style={{ width: "48rem", backgroundColor: props.mode==='dark'? "#1f2937" : 'white', color: props.mode==='dark'? "white" : 'black' }}>
                        <div className="card-body">
                            <h5 className="card-title">About Us</h5>
                            <p className="card-text">Welcome to our textiles website! We are a team of passionate textile enthusiasts who are dedicated to providing our customers with high-quality, beautiful and sustainable textiles for their homes and businesses.<br /><br />Our collection of textiles includes a wide range of products such as bed linens, towels, tablecloths, curtains, and more. We believe that every piece of textile should not only be functional but also be a work of art that adds beauty and style to your space.<br /><br />We take pride in using only the finest materials in our textiles, sourcing from trusted suppliers who share our commitment to quality and sustainability. We work closely with local artisans to create unique and beautiful designs that reflect the culture and heritage of the regions where they are made.<br /><br /> At our textiles website, we are committed to making a positive impact on the environment and the communities we work with. That's why we use sustainable production methods and materials that are kind to the earth and support fair trade practices.<br /><br />We invite you to explore our collection and discover the beauty and quality of our textiles. Whether you are looking for a special piece to complete your home decor or a gift for a loved one, we are confident that you will find something that you will love. Thank you for choosing our textiles website for your textile needs!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About