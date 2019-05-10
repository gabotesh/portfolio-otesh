import React from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends React.Component{

    render(){
        
        const title=this.props.title;

        return(

        <React.Fragment>
        <p>{title}</p>
        {this.props.children}
        <p className="customClass">i am styled how element</p>
        <p className="customClass1">i am styled p element</p>



        <Link href="/">
          <a> home </a>
        </Link>
        <Link href="/blogs"> 
         <a>blogs </a>
        </Link>
        <Link href="/portfolio"> 
         <a>portfolio </a>
        </Link>
        <Link href="/about"> 
         <a>about </a>
        </Link>
        <Link href="/cv"> 
         <a>cv </a>
        </Link>

       {/*  <style jsx>
        {
            `
            a{
                font-size: 20px
            };
            .customClass{
                color: red;
            }
            
            `
        }
        </style> */}

       </React.Fragment>

        )
    }
}
export default Header;