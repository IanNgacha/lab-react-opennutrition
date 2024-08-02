import { Input } from "antd"
export default function Search({ searchTerm, setSearchTerm }) {
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };
    return (
      <div style={{ marginBottom: 20 }}>
        <Input 
            placeholder="Search for Food"
            value={searchTerm}
            onChange={handleSearch}
        />
      </div>  
    )
}