import React, { Component } from 'react';
import SideBarAdmin from '../component/SideBarAdmin';
import Axios from 'axios'
import {API_URL} from '../helpers/API_URL'

class ManageCategory extends Component {
    state = {
        addProductId : null,
        addCategoryId : null,
        listPackageCategory : [],
        product : [],
        listCategory : []
    }

    componentDidMount() {
        this.getListPackageCategory()
        this.getListCategory()
        this.getListProduct()
    }

    getListProduct = () => {
        Axios.get(API_URL + '/getpackage')
        .then((res) => {
            this.setState({product : res.data})
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

    getListCategory = () => {
        Axios.get(API_URL + '/category/getcategoryleaf')
        .then((res) => {
            this.setState({listCategory : res.data})
        })
        .catch((err) => {
            console.log(err.response)
        })
    }

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

    renderListPackageCategory = () => {
        return this.state.listPackageCategory.map((item,index) => {
            return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.title}</td>
                    <td>{item.category}</td>
                    <td>
                            <input type="button" value="Delete" onClick={() => this.onBtnDeleteClick(item.productId)} />
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
            this.getListPackageCategory()
            this.getListCategory()
            this.getListProduct()
        })
        .catch((err) => {
            console.log(err.response.data)
        })
    }
    
    render() { 
        return (  
            <div>
                <SideBarAdmin />
                <center>
                <table style={{marginTop: "20px"}}>
                    <thead>
                            <tr>
                                <th>No</th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                    </thead>
                            <tbody>
                                {this.renderListPackageCategory()}
                            </tbody>
                    <tfoot>
                        <tr>
                            <td />
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
                            <td>
                                <input type="button" value="Add" onClick={this.btnAddPackagecat} />
                            </td>
                        </tr>
                    </tfoot>
                </table>
                </center>
            </div>
        );
    }
}
 
export default ManageCategory;