import React, { Component } from 'react';
import SideBarAdmin from '../component/SideBarAdmin';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
class ManageDescription extends Component {
    state = {
        financialGoal: 0
    }


    render() { 
        return (
            <div>
                
                {/* <input style={{width: '150px'}} type="text" pattern="[0-9]*" value={this.state.financialGoal}  onInput={this.handleChange.bind(this)}/> */}
            </div>
          );
    }
}
 
export default ManageDescription;