export default {
  header: '데이터 테이블 (Data table)',
  headerText: '`v-data-table` 컴포넌트는 데이터를 테이블 형태로 보여줍니다. 정렬(sorting), 검색(searching), 페이지네이션(pagination), 선택(selection) 등이 가능합니다.',
  components: ['v-data-table', 'v-edit-dialog'],
  examples: [{
    standard: {
      header: '표준 (Standard)',
      desc: '표준 데이터 테이블은 추가 기능 없이 데이터를 보여줍니다. The standard data-table contains data with no additional functionality. You can opt out of displaying table actions that allow you to control the pagination of information with the `hide-actions` prop.'
    },
    noData: {
      header: '슬롯: no-data',
      desc: '`no-data` 슬롯(slot)은 데이터가 없을 경우 보여지는 커스텀 HTML 에 쓰입니다.'
    },
    headers: {
      header: '슬롯: items 과 headers',
      desc: '`items` 과 `headers` 슬롯엔 <kbd>td/th</kbd> 태그 모음이나 전체 row 를 제어하고 싶을 경우 <kbd>tr</kbd> 태그를 넣습니다.'
    },
    headerCell: {
      header: '슬롯: headerCell',
      desc: '만약 각 헤더 셀(header cells)에 공용 마크업이나 이펙트를 적용하고 싶으면 `headerCell` 슬롯을 사용합니다. 이 예제는 각 헤더에 툴팁을 적용합니다.'
    },
    progress: {
      header: '슬롯: progress',
      desc: 'There is also a `progress` slot for when you want to customize the display for the data table\'s `loading` state.  By default this is an `indeterminate` `v-progress-linear`'
    },
    footer: {
      header: '슬롯: footer',
      desc: 'There is also a `footer` slot for when you want to add some extra functionality to tables, for example per column filtering or search.'
    },
    expand: {
      header: '슬롯: expand',
      desc: 'The `v-data-table` component also supports expandable rows using the `expand` slot. You can use the prop `expand` to prevent expanded rows from closing when clicking on another row.'
    },
    pageText: {
      header: '슬롯: page-text',
      desc: 'You can customize the page text displaying the range and total items by using the `page-text` slot.'
    },
    select: {
      header: 'Selectable rows',
      desc: 'Selectable rows allow you to perform an action on specific and all rows.'
    },
    search: {
      header: 'Search with custom no-results slot',
      desc: 'The data table exposes a `search` prop that allows you to filter your data.'
    },
    paginate: {
      header: 'External pagination',
      desc: 'Pagination can be controlled externally by using the `pagination` prop. Remember that you must apply the `.sync` modifier.'
    },
    sort: {
      header: 'External sorting',
      desc: 'Sorting can also be controlled externally by using the `pagination` prop. Remember that you must apply the `.sync` modifier. You can also use the prop to set the default sorted column.'
    },
    server: {
      header: 'Paginate and sort server-side',
      desc: 'If you\'re loading data from a backend and want to paginate and sort the results before displaying them, you can use the `total-items` prop. Defining this prop will disable the built-in sorting and pagination, and you will instead need to use the `pagination` prop to listen for changes. Use the `loading` prop to display a progress bar while fetching data.'
    },
    headerless: {
      header: 'Headerless tables',
      desc: 'Setting the `hide-headers` prop creates a headerless table.'
    },
    editdialog: {
      header: 'Inline Editing',
      desc: 'The `v-edit-dialog` component is used for inline-editing within data tables.'
    },
    crud: {
      header: 'CRUD Actions',
      desc: 'data-table with CRUD actions using a `v-dialog` component for editing each row'
    }
  }],
  props: {
    'v-edit-dialog': {
      cancelText: 'Sets the default text for the cancel button when using the **large** prop',
      lazy: 'Mixins.Bootable.props.lazy',
      large: 'Attachs a submit and cancel button to the dialog',
      saveText: 'Sets the default text for the save button when using the **large** prop',
      transition: 'Mixins.Transitionable.props.transition'
    },
    'v-data-table': {
      headerText: 'If using an object, the text value for the header',
      headers: 'An array of objects that each describe a header column. See the example below for a definition of all properties.',
      hideHeaders: 'Hide the table headers'
    }
  },
  scopedSlots: {
    'v-data-table': {
      headerCell: 'Slot to customize header cells',
      headers: 'Slot to customize entire header'
    }
  }
}
