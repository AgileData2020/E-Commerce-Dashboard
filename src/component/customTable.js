import { Table } from 'rsuite';


const { Column, HeaderCell, Cell } = Table;

export default function CustomTable() {

     // JSON data representing table rows
  const jsonData = [
    {
      id: 1,
      name: 'John Doe',
      age: 30,
      email: 'john.doe@example.com',
      Gender:'Male',
      address:'address'
    },
    {
      id: 2,
      name: 'Jane Smith',
      age: 25,
      email: 'jane.smith@example.com',
      Gender:'Male',
      address:'address'
    },
    // Add more data objects as needed
  ];

  // Define the columns of the table
  const columns = [
    {
      name: 'id',
      title: 'ID',
      
    },
    {
      name: 'name',
      title: 'Name',
    },
    {
      name: 'age',
      title: 'Age',
    },
    {
      name: 'email',
      title: 'Email',
    },
    {
        name: 'email',
        title: 'Email',
      },
      {
        name: 'Gender',
        title: 'Gender',
      },
      {
        name: 'address',
        title: 'address',
      },
  ];
  return (
  

<Table
virtualized

data={jsonData}
>
{columns.map((column) => (
  <Table.Column key={column.name} flexGrow={1} fixed={column.name == "id" && true} >
    <Table.HeaderCell>{column.title} { column.title === 'ID' && '🔏'} </Table.HeaderCell>
    <Table.Cell dataKey={column.name} />
  </Table.Column>
))}
</Table>
  )
}
