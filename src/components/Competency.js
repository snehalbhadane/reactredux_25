import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchCompetencies ,addCompetency} from "../features/CompetencyActions";
 
export default function Competency({ existing }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: existing || {},
  });
 
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.competency);
 
  useEffect(() => {
    dispatch(fetchCompetencies());
  }, [dispatch]);
 
  const onSubmit = (data) => {
   /*  data.technologies = Array.from(data.technologies);
    if (existing) {
      //dispatch(updateCompetency({ id: existing.id, data }));
    } else {
      dispatch(addCompetency(data));
    }
    console.log(data);
    reset(); */

    const competencyData = {
    competencyName: data.competencyName,
    managerName:data.managerName,
    technologiesList: data.technologiesList ? [...data.technologiesList] : []
  };

  console.log("Submitting Competency: ", competencyData);

 // dispatch(addCompetency(competencyData));
  };
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
 
  return (
<Container>
<h2>Competency Module</h2>
<Form onSubmit={handleSubmit(onSubmit)}>
<Form.Group>
<Form.Label>Competency Name</Form.Label>
<Form.Control
            type="text"
            {...register("competencyName", { required: true })}
            placeholder="Enter competency name"
          />
</Form.Group>
 
        <Form.Group>
<Form.Label>Competency Manager Name</Form.Label>
<Form.Select {...register("managerName", { required: true })}>
<option value="">Select Manager Name</option>
<option value="Pankaj Sharma">Pankaj Sharma</option>
<option value="Maruti Lavate">Maruti Lavate</option>
<option value="Shailesh Sharma">Shailesh Sharma</option>
</Form.Select>
</Form.Group>
 
        <Form.Group>
<Form.Label>Select Technologies</Form.Label>
<Form.Select
            multiple
            {...register("technologiesList", { required: true })}
>
<option value="React">React</option>
<option value="Java">Java</option>
<option value="Spring Boot">Spring Boot</option>
<option value="Node.js">Node.js</option>
<option value="Python">Python</option>
</Form.Select>
</Form.Group>
 
        <Button type="submit" variant="primary">
          {existing ? "Update" : "Add"}
</Button>
</Form>
 
      <hr />
 
      <Table striped bordered hover>
<thead>
<tr>
<th>Id</th>
<th>Competency Name</th>
<th>Competency Manager Name</th>
<th>Technologies</th>
</tr>
</thead>
<tbody>
          {Array.isArray(list) && list.length > 0 ? (
            list.map((c, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{c.competencyName}</td>
                <td>{c.managerName || "—"}</td>
                <td>
                  {Array.isArray(c.technologiesList)
                    ? c.technologiesList.join(", ")
                    : "—"}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} style={{ textAlign: "center" }}>
                No competencies found
              </td>
            </tr>
          )}
        </tbody>
      </Table>
</Container>
  );
}


















/* import React, { useState } from 'react'
import { Table, Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { fetchCompetencies } from './../features/CompetencyActions';


const Competency = () => {
const technologiesList = [
  'React',
  'Angular',
  'Java',
  'Spring Boot',
  'Node.js',
  'Python',
  'AWS'
];
      


        const [competencies,setCompetencies]=useState([//single state for competencies used to store data
          {

            id:1,
            name:"Java competency",
            competencyManagerName:"Snehal",
            technologies: "Java" // array of selected tech
          }
        ])
       
        //hook form
        const{register,handleSubmit,reset }=useForm();

        const onSubmit=(data)=>{
          const newCompetency={
            id:Date.now(),
            ...data,
          };
      
    
    
    
          console.log(newCompetency);
          setCompetencies((prev)=>[...prev,newCompetency]);//add a new competency
          reset();//clears the form data
} 

  return (
   <div>
      <Container className="mt-4">
        <h3 className="text-center text-primary mb-4">Competency Module</h3>
         
         <Form onSubmit={handleSubmit(onSubmit)} className="border p-4 rounded shadow-sm mb-4">
            <Form.Group>
                 <Form.Label>Competency Name</Form.Label>
                 <Form.Control
                  type="text"
                  placeholder="Enter competency name"
                  {...register("name",{required:true,message:"Name is required"})}/>

            </Form.Group>

            <Form.Group>
              <Form.Label>Competency Manager Name</Form.Label>
              <Form.Select {...register("competencyManagerName",{required:true,message:"Manager Name is required"})}>
               <option value="">Select Manager Name</option>
               <option>Pankaj Sharma</option>
               <option>Maruti Lavate</option>
               <option>Shailesh Sharma</option>
            </Form.Select>
          </Form.Group>

      <Form.Group className="mb-3">
          <Form.Label>Select Technologies</Form.Label>
          <Form.Select multiple {...register("technologies")} required>
            <option value="React">React</option>
            <option value="Java">Java</option>
            <option value="Spring Boot">Spring Boot</option>
            <option value="Node.js">Node.js</option>
            <option value="Python">Python</option>
          </Form.Select>
        </Form.Group>

            <Button type="submit">Add Competency</Button>

         </Form>
       <Table className="table table-bordered">
         <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Competency Name</th>
            
            <th scope="col">Technologies</th>
            </tr>
         </thead>
         <tbody>
          {
          competencies.map((c,index)=>(
            <tr key={c.id}>
                <td>{index+1}</td>
                <td scope="row">{c.name}</td>
                <td>{c.technologies}</td>
            </tr> 
          ))};
           
              
         </tbody>

       </Table>

      </Container>
    </div>
  )
}

export default Competency
 */
