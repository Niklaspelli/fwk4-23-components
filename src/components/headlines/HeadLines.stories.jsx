import HeadLines from "./HeadLines";

export default {
    title: "FWK/HeadLines",
    component: HeadLines,
};

export const Login = {
    args: {
        title: "Login HeadLine"
    }
}

export const Register = {
    args: {
        title: "Register HeadLine"
    }
}

export const Default = {
    args: {
        title: "Headline",
        subTitle: "Sub headline"
    }
}

// export const Default = () => {
//     return <HeadLines />;
// }

// export const Default = {
// args: {
//     login: "Login Page",
//     register: "Register Page",
//     toDo: "My Todos",
//     newTask: "Add New Task",
//     deleteTask: "Delete Task",
// }
// };