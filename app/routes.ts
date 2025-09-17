import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout('routes/layout.tsx',[
        route('product', "routes/product.tsx"),
        route('employee', "routes/employee.tsx"),
        route('employee/:id', "routes/employeeInfo.tsx"),
    ]),

    route('use-config', 'routes/UseConfig.tsx'),
    route('use-component', 'routes/UseComponent.tsx'),
    route('use-sweet-alert-example', 'routes/UseSweetAlertExample.tsx'),
    route('query-string', 'routes/QueryStringExample.tsx'),
    route('http-client', 'routes/HttpExample.tsx'),
    route('header-example', 'routes/HeaderExample.tsx'),
    route('upload-example', 'routes/UploadFileExample.tsx'),

    route('workshop', 'routes/workshop/page/Layout.tsx', [
        route('page/home', 'routes/workshop/page/Home.tsx'),
        route('page/about', 'routes/workshop/page/About.tsx'),
        route('page/contact', 'routes/workshop/page/Contact.tsx'),
    ])


] satisfies RouteConfig;