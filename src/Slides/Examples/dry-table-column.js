const string = `import { Column, Table } from 'react-virtualized';

function DryColumn ({
  dataKey,
  ...rest
}) {
  // Set defaults that can be overridden if needed
  return (
    <Column
      cellRenderer={YourCustomCellRenderer}
      dataKey={dataKey}
      headerRenderer={YourCustomHeaderRenderer}
      {...rest}
    />
  )
}

function renderTable (props) {
  return (
    <Table {...props}>
      {DryColumn({ dataKey: 'name' })}
      {DryColumn({ dataKey: 'age' })}
      {DryColumn({ dataKey: 'address' })}
    </Table>
  )
}`;

export default string;
