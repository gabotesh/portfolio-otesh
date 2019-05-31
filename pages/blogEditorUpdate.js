import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import SlateEditor from '../components/slate-editor/Editor';
import {getBlogById, updateBlog} from '../action';
import { toast } from 'react-toastify';


class blogEditorUpdate extends React.Component{

   static async getInitialProps({query}){
        const blogId = query.id;
        let blog ={};

        try{
            const blog= await getBlogById(blogId);
            return{blog};

        }catch(err){
            console.error(err);
        }
        return blog;
    }


  constructor(props){
    super(props);

    this.state={
      isSaving:false
    }
    this.updateOurBlog=this.updateOurBlog.bind(this);

  }
  updateOurBlog(story, heading){
    const{blog}=this.props;

    const updatesdblog={};
    updatesdblog.title= heading.title;
    updatesdblog.subTitle=heading.subtitle;
    updatesdblog.story=story;

    this.setState({isSaving: true});
    
    updateBlog(updatesdblog,blog._id).then(updatedBlog=>{
      toast.success('Blog Saved Successfully!');
       this.setState({isSaving: false});

     }).catch(err=>{
      this.setState({isSaving: false});
       const message= err.message || 'Server Error!';
       toast.error('Unexpected Error, Copy your progress and refresh browser please.');
       console.error(message)
     })
    
  }

 

render(){
 
  const {blog}=this.props;
  const {isSaving}=this.state;
    return(
      <Baselayout {...this.props.auth}>
      <Basepage containerClass="editor-wrapper" className="blog-editor-page">
        <SlateEditor initialValue={blog.story} isLoading ={isSaving}  save={this.updateOurBlog}/>
      </Basepage>
      </Baselayout>

    )
}


}
export default withAuth('siteOwner')(blogEditorUpdate);