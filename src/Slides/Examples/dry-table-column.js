const string = `function createColumn ({
  dataKey,
  width = 100,
  ...rest
}) {
  return (
    <Column
      cellRenderer={YourCustomCellRenderer}
      dataKey={dataKey}
      headerRenderer={YourCustomHeaderRenderer}
      width={width}
      {...rest}
    />
  )
}

function renderTable (props) {
  return (
    <Table {...props}>
      {createColumn({ dataKey: 'name', label: 'Name' })}
      {createColumn({ dataKey: 'age', label: 'Age' })}
      {createColumn({ dataKey: 'address', label: 'Address', width: 200 })}
    </Table>
  )
}`;

export default string;
