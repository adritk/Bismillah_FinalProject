import React, { Component } from 'react';
import SideBarAdmin from './SideBarAdmin';
import Axios from 'axios'
import {API_URL} from '../helpers/API_URL'
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Button } from '@material-ui/core'

class ManageCategory extends Component {
    state = {
        addProductId : null,
        addCategoryId : null,
        listPackageCategory : [],
        product : [],
        listCategory : [],
        getPageOne : [],
        getPageTwo : []
    }

    componentDidMount() {
        this.getListPackageCategory()
        this.getListCategory()
        this.getListProduct()
        // this.getOneToFive()
        this.renderOneToFive()
        this.getFiveToTen()
    }

    getOneToFive = () => {
        Axios.get(API_URL + '/pacagakecat/getonetofive')
        .then((res) => {
            console.log(res.data)
            this.setState({getPageOne : res.data})
        })
    }

    getFiveToTen = () => {
        Axios.get(API_URL + '/pacagakecat/getfivetoten')
        .then((res) => {
            console.log(res.data)
            this.setState({getPageTwo : res.data})
        })
    }

    // ambil semua data products
    getListProduct = () => {
        Axios.get(API_URL + '/getpackage')
        .then((res) => {
            this.setState({product : res.data})
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    // ambil data category paling leaf dan ga punya child
    getListCategory = () => {
        Axios.get(API_URL + '/category/getcategoryleaf')
        .then((res) => {
            this.setState({listCategory : res.data})
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    // ambil semua data products yang sudah di kategorikan
    getListPackageCategory = () => {
        Axios.get(API_URL + '/pacagakecat/getallpackagecat')
        .then((res) => {
            this.setState({
                listPackageCategory : res.data,
                addProductId: null, 
                addCategoryId: null})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    // hapus products dari category
    onBtnDeleteClick = (id) => {
        Axios.delete(API_URL + `/pacagakecat/deletepackagecat/${id}`)
        .then((res) => {
            alert('delete successfull')
            this.getListPackageCategory()
        })
    }


    renderListPackageCategory = () => {
        return this.state.listPackageCategory.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>
                    <Button color="secondary" variant="outlined" onClick={() => this.onBtnDeleteClick(item.productId)}>Delete</Button>
                            {/* <input type="button" value="Delete" onClick={() => this.onBtnDeleteClick(item.productId)} /> */}
                    </td>
                </tr>
            )
        })
    }

    renderListPilihanPackage = () => {
        return this.state.product.map((item) => {
            return (
            <option value={item.id}>{item.title}</option>
            )
        })
    }

    renderListPilihanCategory = () => {
        return this.state.listCategory.map((item) => {
            return (
            <option value={item.id}>{item.category}</option>
            )
        })
    }

    btnAddPackagecat = () => {
        var body = {
            productId: this.state.addProductId,
            categoryId: this.state.addCategoryId
        }

        Axios.post(API_URL + '/pacagakecat/addpackagecat', body)
        .then((res) => {
            alert('Add Category Success')
            this.getListPackageCategory()
            this.getListCategory()
            this.getListProduct()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }

    renderOneToFive = () => {
        return this.state.getPageOne.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>
                    <Button color="secondary" variant="outlined" onClick={() => this.onBtnDeleteClick(item.productId)}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    
    render() { 
        return (  
            <div>
            <SideBarAdmin />
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 30}}>
                            <td>
                                 <select value = {this.state.addProductId} onChange={(e) => this.setState({addProductId: parseInt(e.target.value)})}
                                 >
                                     <option value={null}>---Pilih Product---</option>
                                     {this.renderListPilihanPackage()}
                                 </select>
                             </td>

                           

                            <td>
                                 <select value = {this.state.addCategoryId} onChange={(e) => this.setState({addCategoryId: parseInt(e.target.value)})}
                                 >
                                     <option value={null}>---Pilih Category---</option>
                                    {this.renderListPilihanCategory()}
                                 </select>
                             </td>
                             
                             <Button style={{height: 25, padding: '0px', marginLeft: 5}} color="primary" variant="outlined" onClick={this.btnAddPackagecat}>Add</Button>
                                 {/* <input type="button" value="Add" onClick={this.btnAddPackagecat} /> */}
                         
                                 </div>
            <div className="backgroundCategory">
            <MDBTable bordered>
                <MDBTableHead>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Category</th>
                        <th>Action</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {this.renderListPackageCategory()}
                    {/* {this.renderOneToFive()} */}
                </MDBTableBody>
            </MDBTable>
            

            {/* <nav aria-label="Page navigation example">
                <ul className="pagination pg-blue">
                    <li className="page-item"><a className="page-link">Previous</a></li>
                    <li className="page-item" ><a className="page-link" onClick={this.renderOneToFive}>1</a></li>
                    <li className="page-item"><a className="page-link">2</a></li>
                    <li className="page-item"><a className="page-link">3</a></li>
                    <li className="page-item"><a className="page-link">Next</a></li>
                </ul>
            </nav> */}
            </div>
        </div>
        );
    }
}
 
export default ManageCategory;