import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.css"
import StripeCheckout from "react-stripe-checkout";




class Header extends React.Component{

  constructor(props){
    super(props)
    this.state={
      hasScrolled: false
    };
  }

  componentDidMount(){
    window.addEventListener('scroll',
    this.handleScroll)
  }

  handleScroll=(event)=>{
    const scrollTop= window.pageYOffset;

    if(scrollTop>50){
      this.setState({ hasScrolled:true});

    }else{
      this.setState({ hasScrolled:false});
    }

  }

  handlePurchase= (token)=> {
    const amount= 5000;
    const description = "My awsome product"

    const bodyObject = {
      tokenId: token.id,
      email: token.email,
      name: token.name,
      description,
      amount
    }
    
    fetch("http://localhost:9000/stripe-charge",{
      mothod: 'POST',
      body: JSON.stringify(bodyObject)
    })
  }

  render(){
    return(
      <div className={this.state.hasScrolled ?
      'Header HeaderScrolled':'Header'}>
        <div className="HeaderGroup">
            <Link to="/"><img src={require('../images/logo-designcode.svg')} width="30"/></Link>
            <Link to="/courses">Courses</Link>
            <Link to="/downloards">Downloads</Link>
            <Link to="/workshops">Workshops</Link>
            <StripeCheckout
             amount={5000}
             image="https://cl.ly/1U1F170x3D0L/download/logo-react-small.png"
             token={this.hundlePurchase}
             stripeKey={'pk_test_SOfu21DGkzkP81QVsIYKBqk400YOmAH2uz'}>
             <button>Buy</button>
            </StripeCheckout>
        </div>
      </div>
    )
  }

}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
