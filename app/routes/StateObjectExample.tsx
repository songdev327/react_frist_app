import { useState } from "react";

export function StateObjectExample() {
    const [employee, setEmployee] = useState({ 
        name: '', 
        salary: 0 });
    const [name, setName] = useState(employee.name);
    const [salary, setSalary] = useState(employee.salary);

    const updateEmployee = () => {
        setEmployee({ name, salary });
    }

    return (
        <div>
            <h1>Name: {employee.name}</h1>
            <h1>Salary: {employee.salary}</h1>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
            />
            <button onClick={updateEmployee}>Update Employee</button>
        </div>
    );
}
