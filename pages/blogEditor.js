import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import {createBlog} from '../action';
import {Router}    from '../routes';
import { toast } from 'react-toastify';



class blogEditor extends React.Component{


  constructor(props){
    super(props);

    this.state={
      isSaving : false,
      lockId : Math.floor(1000 + Math.random() * 9000)
    }

    this.saveBlog=this.saveBlog.bind(this);
  }

  saveBlog(story, heading){
    const{lockId}=this.state;
    const blog={};
    blog.title= heading.title;
    blog.subTitle=heading.subtitle;
    blog.story=story;

    this.setState({isSaving: true});
    createBlog(blog,lockId).then(data=>{
       this.setState({isSaving: false});
       toast.success('Blog Saved Successfully!')
       Router.pushRoute(`/blogs/${data._id}/edit`)

     }).catch(err=>{
      this.setState({isSaving: false});
      toast.error('Unexpected Error occured!')
       const message= err.message || 'Server Error!';
       console.error(message)
     })
    
  }

render(){

  const {isSaving}=this.state;
    return(
      <Baselayout {...this.props.auth}>
      <Basepage containerClass="editor-wrapper" className="blog-editor-page">
        <SlateEditor isLoading ={isSaving}  save={this.saveBlog}/>
      </Basepage>
      </Baselayout>

    )
}


}
export default withAuth('siteOwner')(blogEditor);