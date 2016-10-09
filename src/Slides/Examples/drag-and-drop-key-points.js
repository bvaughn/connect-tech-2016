const string = `import { arrayMove, SortableContainer, SortableElement } from 'react-sortable-hoc'
import { List } from 'react-virtualized'

// Connect react-virtualized and react-sortable-hoc
const SortableList = SortableContainer(List, { withRef: true })
const SortableRow = SortableElement(({ children }) => children)

function onSortEnd ({ newIndex, oldIndex }) {
  arrayMove(list, oldIndex, newIndex)
}

function rowRenderer ({ index, key, style }) {
  return (
    <div key={index} style={style}>
      <SortableRow index={index}>
        {/* Your row content here */}
      </SortableRow>
    </div>
  )
}

function renderList (props) {
  return (
    <SortableList
      {...props}
      onSortEnd={onSortEnd}
      rowRenderer={rowRenderer}
    />
  )
}`;

export default string;
