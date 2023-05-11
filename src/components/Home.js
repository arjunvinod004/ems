import React from 'react'
import Employee from './Empolyee'
import Table from 'react-bootstrap/Table';
import { FaEdit,FaRegTrashAlt,FaUserPlus } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';


function Home() {
    const History=useNavigate();
    const handleDelete=(id)=>{
        alert(`Are You Sure You Want To Delete`)
        console.log(Employee.map((item)=>item.id).indexOf(id)); // index of array
        let index=Employee.map((item)=>item.id).indexOf(id)
        console.log(index);
        Employee.splice(index,1)// remove last item of array
        console.log(Employee);
        History('/')    
    }
    //console.log(Employee);
    const handleEdit=(id,empname,age,designation,salary)=>{
        localStorage.setItem("ID",id);
        localStorage.setItem("NAME",empname);
        localStorage.setItem("AGE",age);
        localStorage.setItem("DESIGNATION",designation);
        localStorage.setItem("SALARY",JSON.stringify(salary));


    }
    return (
        <div>
            <h1 className='text-center mt-5'>Employee management System</h1>
            <p className='p-4'>
                An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically.
                EMS helps to eliminate the manual process and saves a lot of time and money. This system maintains the professional and personal details of the employees and the company in a safe manner. The employee management system lowers the burden and the pressure on HRs and the business managers. Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.
            </p>
         <Link to={'/add'}>
            <Button className='btn btn-success'>Add<FaUserPlus/></Button>
            </Link>
            <Table striped bordered hover style={{ margin: "50px", border: "2px solid" }} variant="success">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>User Name</th>
                        <th>Age</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        Employee && Employee.length > 0 ?
                            Employee.map((item) => (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.empname}</td>
                                    <td>{item.age}</td>
                                    <td>{item.designation}</td>
                                    <td>{item.salary}</td>
                                    <td>
                                        <Link to={'/edit'}>
                                         <Button onClick={()=>handleEdit(item.id,item.empname,item.age,item.designation,item.salary)}><FaEdit/></Button> 
                                         </Link>
                                    <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><FaRegTrashAlt/></Button>
                                    </td>

                                </tr>
                            ))
                            : "no data available"
                    }

                </tbody>
            </Table>
        </div>
    )
}

export default Home
