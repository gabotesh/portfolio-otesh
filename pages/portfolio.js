import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import axios from 'axios';
import {Link} from '../routes'
import Basepage from '../components/basepage';






class portfolio extends React.Component{
    static  async getInitialProps(){
        let getPortfolio=[];
        try{
          const response=await axios.get('https://jsonplaceholder.typicode.com/posts');
          //console.log(response.data);
          getPortfolio=response.data;
        }catch(err){
          console.error(err);
        }
       
        return{getPortfolio};
      }

     renderPosts(getPortfolio){
          return getPortfolio.map((post, index)=>{
              return(
                  <li key={index}>
                 <Link route={`/portfoliodetails/${post.id}`}>
                  <a> {post.title} </a>
                </Link>
                  </li>
              )


          })

     }


    render(){
        const {getPortfolio}=this.props;
        return(
            <Baselayout>
            <Basepage>
            <h1>Am portfolio page</h1>
            <ul>

               {this.renderPosts(getPortfolio)}

            </ul>
            </Basepage>
            </Baselayout>
        )
    }
}

export default portfolio;