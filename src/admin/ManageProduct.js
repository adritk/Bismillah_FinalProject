import React, { Component } from 'react';
import {Table, TableHead, TableCell, TableRow, TableBody} from '@material-ui/core';
import {Modal, ModalHeader, ModalBody, ModalFooter, Input,Label,Button } from 'reactstrap';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Axios from 'axios'
import SideBarAdmin from './SideBarAdmin'
import {API_URL} from '../helpers/API_URL'

class ManageProduct extends Component {
    state = {
        product : [],
        openModal : false,
        addImageFileName : 'Select File',
        addImageFile : undefined,
        showImage : null,
        selectedId : null,
        itinerary: ''
    }

    componentDidMount() {
        this.getPackage()
    }


    getPackage = () => {
        Axios.get(API_URL + '/getpackage')
        .then((res) => {
            // console.log(res.data)
            this.setState({product : res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onBtnUploadFile = (e) => {
        if(e.target.files[0]){
            this.setState({ addImageFileName: e.target.files[0].name, addImageFile : e.target.files[0] })
            this.setState({showImage: URL.createObjectURL(e.target.files[0])})
        }else{
            this.setState({ addImageFileName: 'Select Image', addImageFile: undefined})
        }
    }

    UploadPackage = () => {
        let { addImageFile } = this.state;
        // console.log(addImageFile)
        if(addImageFile){
        let formData = new FormData()
        let title = this.title.value
        let harga = this.harga.value
        let location = this.location.value
        let duration = this.duration.value
        let itinerary = this.state.itinerary
        let product = {
            title,
            harga,
            location,
            duration,
            itinerary
        }
        if (title && harga && location && duration && itinerary){
            formData.append('data', JSON.stringify(product))
            formData.append('image', addImageFile)
            console.log(formData)
            Axios.post(API_URL + '/addpackage', formData)
            .then((res) => {
                console.log(res)
                alert('add succesfull')
                this.setState({openModal : false, showImage : null, addImageFile : undefined})
                this.getPackage()  
            })
            .catch((err) => {
                console.log(err)
            })
                } 
            }
                // else{
                //         alert('isi semua kolom')
                //     }
    }

    editPackage = (id) => {
        let title = this.title.value
        let harga = this.harga.value
        let location = this.location.value
        let duration = this.duration.value
        let itinerary = this.state.itinerary
        let product = {
            title,
            harga,
            location,
            duration,
            itinerary
        }
        Axios.put(API_URL + `/editpackage/${id}`, product)
        .then((res) => {
            // console.log(res.data)
            alert('edit successfull')
            this.getPackage()
            this.setState({selectedId : null})

        })
        .catch((err) => {
            console.log(err)
        })
    }

    
   deletePackage = (id) => {
        Axios.delete(API_URL + `/deletepackage/${id}`)
        .then((res) => {
            alert('delete successfull')
            this.getPackage()
        })
        .catch((err) => {
            console.log(err)
        })
   }

    renderPackage = () => {
        let {product, selectedId} = this.state
            return product.map((item, index) => {
                if(item.id === selectedId) {

                    return (
                        <TableRow>
                                <TableCell>
                                    {item.id}
                                </TableCell>

                                <TableCell>
                                    <Input defaultValue= {item.title} 
                                           innerRef = {(title) => this.title = title}
                                           />
                                </TableCell>

                                <TableCell>
                                    <Input defaultValue={item.harga}
                                           innerRef = {(harga) => this.harga= harga}
                                           /> 
                                </TableCell>

                            

                                <TableCell>
                                    <Input defaultValue= {item.location}
                                           innerRef= {(location) => this.location = location}
                                           />
                                </TableCell>

                                <TableCell>
                                    <Input defaultValue= {item.duration}
                                           innerRef = {(duration) => this.duration = duration}
                                           />
                                </TableCell>

                                <TableCell>
                                <CKEditor
                                editor={ ClassicEditor }
                                data="<p>Hello from CKEditor 5!</p>"
                                onInit={ editor => {
                                    
                                    console.log( 'Editor is ready to use!', editor );
                                }}
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    this.setState({itinerary : data})
                                    console.log( { event, editor, data } );
                                }}
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                }}
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                }}
                                defaultValue={this.state.itinerary}
                                />
                                </TableCell>

                                <TableCell>
                                    <img src={API_URL + '/' + item.imagePath} style={{width: "50px", height: "50px"}} alt="notfound" />
                                </TableCell>

                                <TableCell>
                                    <Button color="warning" onClick={() => this.setState({selectedId: null})}>
                                        Cancel
                                    </Button>
                                    <Button color="danger" onClick={() => this.editPackage(item.id)}>
                                        Confirm
                                    </Button>
                                </TableCell>
                        </TableRow>
                    )
                }
                    return (
                        <TableRow>
                                <TableCell>
                                    {index + 1}
                                </TableCell>

                                <TableCell>
                                    {item.title}         
                                </TableCell>

                                <TableCell>
                                    {item.harga}
                                </TableCell>

                             

                                <TableCell>
                                    {item.location}       
                                </TableCell>

                                <TableCell>
                                   {item.duration}
                                </TableCell>

                                <TableCell>
                                   {item.itinerary}
                                </TableCell>

                                <TableCell>
                                    <img src={API_URL + '/' + item.imagePath} style={{width: "50px", height: "50px"}} alt="notfound" />
                                </TableCell>

                                <TableCell>
                                    <Button color="warning" onClick={() => this.setState({selectedId: (item.id)})}>Edit</Button>
                                    <Button color="danger" onClick={() => this.deletePackage(item.id)}>Delete</Button>
                                </TableCell>
                        </TableRow>
                    )
        })
    }

    render() { 
        let {openModal} = this.state;
        return ( 
            <div>
                <SideBarAdmin />
                <Button color="success" style={{marginTop: "50px", marginLeft: "50px"}} onClick={()=> this.setState({openModal:true})}>Add Package</Button>

                <Modal isOpen={openModal} size="lg">
                    <ModalHeader>Add Package</ModalHeader>
                        <ModalBody >
                            <Label>
                                Title
                            <Input  type="text" 
                                    style={{width: "230%"}}
                                    innerRef = {(title) => this.title = title}/>
                            </Label> <br></br>

                            <Label>
                                Price
                            <Input type="text" 
                                   style={{width: "230%"}}
                                   innerRef = {(harga) => this.harga = harga}/>
                            </Label><br></br>

                        

                            <Label>
                                Location
                            <Input type="text" 
                                   style={{width: "230%"}}
                                   innerRef = {(location) => this.location = location}/>
                            </Label><br></br>

                            <Label>
                                Duration
                            <Input type="text" 
                                   style={{width: "230%"}}
                                   innerRef = {(duration) => this.duration = duration}/>
                            </Label><br></br>

                            <Label>
                                Itinerary
                                <CKEditor
                                editor={ ClassicEditor }
                                data="<p>Hello from CKEditor 5!</p>"
                                onInit={ editor => {
                                    
                                    console.log( 'Editor is ready to use!', editor );
                                } }
                                onChange={ ( event, editor ) => {
                                    const data = editor.getData();
                                    this.setState({itinerary : data})
                                    console.log( { event, editor, data } );
                                } }
                                onBlur={ ( event, editor ) => {
                                    console.log( 'Blur.', editor );
                                } }
                                onFocus={ ( event, editor ) => {
                                    console.log( 'Focus.', editor );
                                } }
                                />
                            </Label>
                            <br></br>

                            <Label>
                                Image
                            <Input 
                            onChange={this.onBtnUploadFile} label={this.state.addImageFileName} type='file' style={{width: "100%"}}/>
                            </Label>

                            <div style={{marginTop:'25px', float: 'right', width: "162px", height:"90px"}}>
                            <label className='CRUD-Input-File'>
                                {
                                    this.state.showImage
                                    ?
                                    <img style={{width: "162px", height: '90px'}} src={this.state.showImage} alt="not-found"/>
                                    :
                                    <div></div>
                                    
                                }
                                
                        
                            </label>
                        </div>
                            
                        </ModalBody>

                        <ModalFooter>
                        <Button color="primary" onClick={this.UploadPackage}>Confirm</Button>
                        <Button color="warning" onClick={() => this.setState({openModal:false,addImageFile: undefined, showImage: null})}>Cancel</Button>
                        </ModalFooter>
                </Modal>
                <br></br>
                <Table>
                    <TableHead>
                            <TableCell>NO</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Itinerary</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Actions</TableCell>
                    </TableHead>
                    <TableBody>
                        {this.renderPackage()}
                    </TableBody>
                </Table>
            </div>
         );
    }
}
 
export default ManageProduct;