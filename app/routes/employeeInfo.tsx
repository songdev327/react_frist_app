import type { Route } from './+types/employeeInfo';

export default function EmployeeInfo({ params } : Route.LoaderArgs) {
    const id = params.id

    return <div>di = {id}</div>
}