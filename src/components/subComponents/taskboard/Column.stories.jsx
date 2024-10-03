import Column from "./Column"

export default {
    title: "FWK/Column",
    component: Column,
}

export const Default = () => (
    <Column
     title="Backlog"
     tasks ={[
        {id: 1, content: "Backlog task"}
     ]}
     />
)


