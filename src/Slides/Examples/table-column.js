const string = `function renderTable (props) {
  return (
    <Table {...props}>
      <Column
        cellRenderer={YourCustomCellRenderer}
        dataKey='name'
        headerRenderer={YourCustomHeaderRenderer}
        label='Name'
        width={100}
      />
      <Column
        cellRenderer={YourCustomCellRenderer}
        dataKey='age'
        headerRenderer={YourCustomHeaderRenderer}
        label='Age'
        width={50}
      />
      <Column
        cellRenderer={YourCustomCellRenderer}
        dataKey='address'
        headerRenderer={YourCustomHeaderRenderer}
        label='Address'
        width={200}
      />
    </Table>
  )
}`;

export default string;
