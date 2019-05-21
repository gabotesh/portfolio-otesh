import React from 'react';
import Baselayout from '../components/layouts/baselayout';
import Basepage from '../components/basepage';
import withAuth from '../components/HOC/withAuth';
import SlateEditor from '../components/slate-editor/Editor'





class blogEditor extends React.Component{

render(){
    return(
      <Baselayout {...this.props.auth}>
      <Basepage className="blog-editor-page" title="Write your story">
        <SlateEditor/>
      </Basepage>
      </Baselayout>

    )
}


}
export default withAuth('siteOwner')(blogEditor);