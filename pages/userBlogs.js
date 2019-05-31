import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import {Container,Row,Col, Button} from 'reactstrap';
import {getUserBlogs,updateBlog, deleteBlog} from '../action';
import {Link, Router} from '../routes'
import PortButtonDropDown from '../components/buttonDropDown'


class userBlogs extends React.Component{
    static async getInitialProps({req}){
        let blogs=[];
        try{
            blogs= await getUserBlogs(req);

        } catch(err){
            console.error(err);

        }
        return {blogs};
    }

    changeBlogStatus(status,blogId){

        updateBlog({status},blogId).then(()=>{
            Router.pushRoute('/userBlogs');

        }).catch(err=>{
            console.error(err.message);
        })
    }

    deleteBlogWarning(blogId){
        const res= confirm('Are you sure you want to delete this blog post?');
        if(res){
            this.deleteBlog(blogId);
        }

    }

    deleteBlog(blogId){
       deleteBlog(blogId).then(status=>{           
        Router.pushRoute('/userBlogs');
       }).catch(err=>console.error(err.message))

    }

    seperateBlogs(blogs){
        const published=[];
        const draft=[];

        blogs.forEach((blog)=>{
            blog.status==='draft' ? draft.push(blog) : published.push(blog);

        });

        return {published, draft};

    }

    CreateStatus(status){
        return status === 'draft' ? {view:'Publish Story',value:'published'}
                                  :{view:'Make a Draft',value:'draft'};

    }

    dropDownOptions=(blog)=>{
        const status=this.CreateStatus(blog.status);

        return[
            {text: status.view, handlers:{onClick: ()=> this.changeBlogStatus(status.value, blog._id)}},
            {text: 'Delete',handlers:{onClick: ()=>this.deleteBlogWarning(blog._id)}}

        ]

    }

    renderBlogs(blogs){
        return(
            <ul className="user-blogs-lists"> 
            {
                blogs.map((blog, index)=>(
                    <li key={index}>
                        <Link route={`/blogs/${blog._id}/edit`}>
                            <a>{blog.title}</a>
                        </Link>
                        <PortButtonDropDown items={this.dropDownOptions(blog)}/>
                    </li>
                )
                )
            }
            </ul>
        )
    }

render(){
    const {blogs}=this.props;
    const {published, draft}= this.seperateBlogs(blogs);
    return(
        <Baselayout {...this.props.auth} headerType={'landing'} >
        <div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
          <div className="overlay"></div>
          <Container>
            <div className="row">
              <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                  <h1>Blogs Dashboard</h1>
                  <span className="subheading">Lets write some nice blog today..
                  <Link route='/blogs/new'>
                <Button color="success"> Create a New Blog</Button>
                  </Link>  
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Basepage className="blog-user-page">            
         <Row>
             <Col md="6" className="mx-auto text-center" >
                <h2 className="blog-status-title">Published blogs</h2> 
                {this.renderBlogs(published)}
             </Col>
             <Col md="6" className="mx-auto text-center" >
                 <h2 className="blog-status-title">draft blogs</h2>
                 {this.renderBlogs(draft)}

             </Col>
         </Row>
        </Basepage>        
      </Baselayout>

    )
}


}
export default withAuth('siteOwner') (userBlogs);