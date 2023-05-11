import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Employee from './Empolyee';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import uuid from 'react-uuid';

function Add() {
  const [id,setId]=useState('')
  const [empname,setEmpname]=useState('')
  const [age,setAge]=useState('')
  const [designation,setDesignation]=useState('')
  const [salary,setsalary]=useState(0)
  let history=useNavigate()
  const handleData=(e)=>{
    e.preventDefault();
    let ids=uuid()
    console.log(ids);// unique id
    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);// 8 digit unique id
    Employee.push({ // add data to employee array
      id:uniqueId,
      empname:empname,
      age:age,
      designation:designation,
      salary:salary,

    })
    history('/')

  }
  return (
    <div>
       <h1 className='text-center mt-5'>Update Employee Details</h1>
      <p className='p-4'>
                An employee management system is a distributed system developed to maintain the employee details and the company workflow process systematically.
                EMS helps to eliminate the manual process and saves a lot of time and money. This system maintains the professional and personal details of the employees and the company in a safe manner. The employee management system lowers the burden and the pressure on HRs and the business managers. Thanks to the technology which offers us a plethora of solutions which makes the work easier and faster.
            </p>
            <Row>
              <Col md={5}>
              <img style={{width:"600px",height:"700px"}} src='https://cdn-icons-png.flaticon.com/512/1869/1869679.png'/>
              </Col>
              <Col md={6}>
              <Form className='border border-4 p-5'>
      <Form.Group className="mb-3" >
        <h3 className='text-center'>Update your Details</h3>
        <Form.Label>Employee Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name"
        //  value={empname} 
        onChange={(e)=>setEmpname(e.target.value)} required 
         />
       
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter your age"
        //  value={age} 
        onChange={(e)=>setAge(e.target.value)} required
         />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" placeholder="Enter your Designation"
        //  value={designation} 
        onChange={(e)=>setDesignation(e.target.value)} required
          />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text" placeholder="Enter your salary"
        //  value={salary}
         onChange={(e)=>setsalary(e.target.value)} required
          />
      </Form.Group>

      <Form.Group className="mb-3" controlId='formBasicCheckBox' >
        <Form.Check type="checkbox" label="I agree" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e)=>handleData(e)}>
        Add
      </Button>
    </Form>
              </Col>
            </Row>
    </div>
  )
}

export default Add
