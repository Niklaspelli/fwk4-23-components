import Search from "./Search";

export default {
    title: "FWK/Search",
    component: Search,
    };

export const Default = () => {
    return <Search onSearch={(query) => console.log("Search query:", query)} />;
    };