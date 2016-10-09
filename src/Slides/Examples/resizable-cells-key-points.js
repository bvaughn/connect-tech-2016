const markup = `import Draggable from 'react-draggable';
import { AutoSizer, defaultTableHeaderRenderer, Table, Column } from 'react-virtualized';

function draggableHeaderRenderer (props) {
  return (
    <div>
      {defaultTableHeaderRenderer(props)}

      <Draggable
        onStop={(event, data) => resizeColumn({
          dataKey: props.dataKey,
          deltaX: data.x
        })}
      >
        <svg>...</svg>
      </Draggable>
    </div>
  );
}

function renderTable (tableProps) {
  return (
    <Table {...tableProps}>
      {columns.map((columnProps) => (
        <Column
          headerRenderer={draggableHeaderRenderer}
          {...columnProps}
        />
      ))}
    </Table>
  );
}`;

export default markup;
