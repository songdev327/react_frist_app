import type { EmployeeInterface } from "~/interface/EmployeeInterface";

export const ArrayAndMapExample = () => {

    //const languages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

    const employees: EmployeeInterface[] = [
        { id: 1, name: 'Alice', position: 'Developer' },
        { id: 2, name: 'Bob', position: 'Designer' },
        { id: 3, name: 'Charlie', position: 'Manager' },
    ];
    
    return (
        <div>
            {employees.map((employee) => (
                <div key={employee.id}>
                    <h2>{employee.name}</h2>
                    <p>Position: {employee.position}</p>
                </div>
            ))}
            
        </div>
    );
}
