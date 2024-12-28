import {  Table,Button } from 'antd';
import React, { useEffect, useState }  from 'react';
// import {  useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import {logoutadmin} from "../reduxtoolkit/LoginSlice"

function Homepage() {
    const [customer ,setCustomer] = useState([]);
    const [supplier ,setSupplier] = useState([])
    const navigate = useNavigate()

    useEffect( ()=>{
        const customerdata = JSON.parse(localStorage.getItem("customerdata")) ||[];
        setCustomer(customerdata);
        const supplierdata = JSON.parse(localStorage.getItem("supplierdata")) ||[];
        setSupplier(supplierdata)


    })
    // const dispatch = useDispatch();
    // const [filterdata ,setFilterdata] = useState([])

    
            const combinedata = [
                ...customer.map((list,index)=>({...list , role:"customer", key:index})),
                ...supplier.map((list,index)=>({...list , role:"supplier",key:customer.length + index}))
            ];
            

    const clickcustomer=()=>{
        navigate('/customersignuppage',{role:"customer"})
        

    }

    const clicksupplier=()=>{
        navigate('/suppliersignuppage' ,{role:"supplier"})

    }
    const adminlogout = ()=>{
        localStorage.removeItem("login")
        // dispatch(logoutadmin())
        navigate("/")
    }
    

    const handlenameclick =(record)=>{
        navigate(`/customerdetails/${record.key} `,{ user:record})
    }
  return (
    <div>
        <div>
        <h1>Admin Page</h1>
        <Button onClick={clickcustomer}>Customer</Button>
        <Button onClick={clicksupplier}>supplier</Button>
        <Button onClick={adminlogout}>Logout</Button>

        </div>

        <div>
            <Table 
            pagination = {false}
            columns={
                [
                    {
                        title:"Name",
                        dataIndex:"name",
                        key:"name",
                        render:(text,record)=>{
                            return <a onClick={()=>handlenameclick(record)}>{text}</a>
                        }
                    },
                    {
                        title:"Email",
                        dataIndex:"email",
                        key:"email"
                    },
                    
                    {
                        title:"Role",
                        dataIndex:"role",
                        key:"role"
                    }
                ]
            }
            dataSource={combinedata }
                
                // <div key={list.id}>
                //     <p>{list.name}</p>
                //     <p>{list.email}</p>
                //     <p>{list.role}</p>
                    
                // </div>

            // ))}
            />
                 {/* {customer || supplier.map( (list)=>(
                <div key={list.id}>
                    <p>{list.name}</p>
                    <p>{list.email}</p>
                    <p>{list.role}</p>
                    
                </div>
            ))} */}

            
           
        </div>
    </div>
  );
}

export default Homepage;
