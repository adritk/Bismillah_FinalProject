import React, { Component } from 'react';
import SideBarAdmin from '../component/SideBarAdmin';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
class ManageDescription extends Component {

    state = {
        nuArray : []
    }






     addValue = (myArray) =>{
        // var newArray = [];
        for (var i = 0; i < myArray.length; i++) {
            this.state.nuArray.push(myArray[i]);
        };
        return this.state.nuArray;
    };

    render() { 
        return (
            <div style={{marginTop: "100px"}}>
                <label>Input Nilai</label>
                <input type="text" />
                <input type="button" value="add" onClick={this.addValue}/>
            </div>
          );
    }
}
 
export default ManageDescription;