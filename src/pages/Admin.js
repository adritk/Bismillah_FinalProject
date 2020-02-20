import React, { Component } from 'react';
import {Table, TableHead, TableCell, TableRow, TableBody} from '@material-ui/core';
import {Modal, ModalHeader, ModalBody, ModalFooter, Input,Label,Button } from 'reactstrap';
import Axios from 'axios'
import {API_URL} from '../helpers/API_URL'
class AdminPage extends Component {
    state = {
        product : [],
        openModal : false,
        addImageFileName : 'Select File',
        addImageFile : undefined,
        showImage : null
    }

    componentDidMount() {
        // Axios.get(API_URL + '/getpackage')
        // .then((res) => {
        //     console.log(res.data)
        //     this.setState({product : res.data})
        // })
        this.getProduct()
    }


    getProduct = () => {
        Axios.get(API_URL + '/getpackage')
        .then((res) => {
            console.log(res.data)
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

    UploadProduct = () => {
        let { addImageFile } = this.state;
        console.log(addImageFile)
        if(addImageFile){
        let formData = new FormData()
        let title = this.title.value
        let harga = this.harga.value
        let description = this.description.value
        let location = this.location.value
        let duration = this.duration.value
        let product = {
            title,
            harga,
            description,
            location,
            duration
        }
        if (title && harga && description && location && duration ){
            formData.append('data', JSON.stringify(product))
            formData.append('image', addImageFile)
            console.log(formData)
            Axios.post(API_URL + '/addpackage', formData)
            .then((res) => {
                console.log(res)
                alert('add succesfull')
                this.setState({openModal : false, showImage : null, addImageFile : null})
                this.getProduct()  
            })
            .catch((err) => {
                console.log(err)
            })
                } 
            }
                else{
                        alert('isi semua kolom')
                    }
    }
    

    // addProduct = () => {
    //     let title = this.title.value
    //     let harga = this.harga.value
    //     let description = this.description.value
    //     let location = this.location.value
    //     let duration = this.duration.value
    //     let product = {
    //         title,
    //         harga,
    //         description,
    //         location,
    //         duration
    //     }
    //     if (title && harga && description && location && duration ) {
    //         Axios.post(API_URL + `/addpackage`, product)
    //         .then((res) => {
    //             console.log(res.data)
    //             this.getProduct()   
    //         })
    //         .catch((err) => {
    //             console.log(err)
    //         })
    //     }
            
    // }

    renderProduct = () => {
        return this.state.product.map((item, index) => {
            return (
                <TableRow>
                <TableCell>
                    {item.id}
                </TableCell>
                <TableCell>
                    {item.title}
                </TableCell>
                <TableCell>
                   Rp. {item.harga}
                </TableCell>
                <TableCell>
                    {item.description}
                </TableCell>
                <TableCell>
                   {item.location}
                </TableCell>
                <TableCell>
                  {item.duration}
                </TableCell>
                <TableCell>
                  <img src={API_URL + '/' + item.imagePath} style={{width: "50px", height: "50px"}} alt="notfound" />
                </TableCell>
                <TableCell>
                         <Button color="warning" onClick={() => this.setState({selectedId: (item.id)})}>Edit</Button>
                         <Button color="danger" onClick={() => this.deleteMovie(item.id)}>Delete</Button>
                     </TableCell>
            </TableRow>
            )
        })
    }

    render() { 
        let {openModal} = this.state;
        return ( 
            <div>
                <Button color="success" style={{marginTop: "80px", marginLeft: "50px"}} onClick={()=> this.setState({openModal:true})}>Add Package</Button>

                <Modal isOpen={openModal}>
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
                                Description
                            <Input type="text" 
                                   style={{width: "230%"}}
                                   innerRef = {(description) => this.description = description}/>
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
                                Image
                            <Input 
                            onChange={this.onBtnUploadFile} label={this.state.addImageFileName} type='file'/>
                              {/* <Button onClick={this.uploadImage}  //func upload product
                              style={{width: '100px', height: "30px", padding: '0px', marginLeft: '0px'}}>
                                 Upload 
                              </Button> */}
                            </Label>

                            <div style={{marginTop:'25px', float: 'right', width: "162px", height:"90px"}}>
                            <label className='CRUD-Input-File'>
                                {
                                    this.state.showImage
                                    ?
                                    <img style={{width: "162px", height: '90px'}} src={this.state.showImage}/>
                                    :
                                    <div></div>
                                    
                                }
                                
                        
                            </label>
                        </div>
                            
                        </ModalBody>

                        <ModalFooter>
                        <Button color="primary" onClick={this.UploadProduct}>Confirm</Button>
                        <Button color="warning" onClick={() => this.setState({openModal:false,addImageFile: null, showImage: null})}>Cancel</Button>
                        </ModalFooter>
                </Modal>
                <br></br>
                <Table>
                    <TableHead>
                            <TableCell>ID</TableCell>
                            <TableCell>Title</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Duration</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Actions</TableCell>
                    </TableHead>
                    <TableBody>
                        {this.renderProduct()}
                    </TableBody>
                </Table>
            </div>
         );
    }
}
 
export default AdminPage;