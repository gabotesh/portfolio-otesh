import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import {withRouter} from 'next/router';
import axios from 'axios';
import Basepage from '../components/basepage';





class Portfoliodetails extends React.Component{

    static  async getInitialProps({query}){
        const portfolioid=query.id;
        let postid=[];
        try{
          const response=await axios.get(`https://jsonplaceholder.typicode.com/posts/${portfolioid}`);
          //console.log(response.data);
          postid=response.data;
        }catch(err){
          console.error(err);
        }
       
        return{postid};
      }


      renderPosts(postid){
        return postid.map((post)=>{
            return(
                <li>
               <Link as={`/portfoliodetails/${post.id}`} href={`/portfoliodetails?title=${post.title}`}>
                <a> {post.title} </a>
              </Link>
                </li>
            )


        })

   }

    render(){

        const {postid}=this.props;
        return(
            <Baselayout>
            <Basepage>
            <h1>{postid.title}</h1>
            <p> Body: {postid.body}</p>
            <p> Id : {postid.id}</p>
            </Basepage>

            </Baselayout>
        )

    }
    
}
export default withRouter(Portfoliodetails);