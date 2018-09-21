import Assemble from './src/assemble';
import Basic from './src/basic';
import Page from './src/page';
import Structure from './src/structure';

const {
  amountRow: aAmountRow,
  annotation: aAnnotation,
  button: aButton,
  card: aCard,
  checkLine: aCheckLine,
  checkLineGroup: aCheckLineGroup,
  comment: aComment,
  dock: aDock,
  fixedRow: aFixedRow,
  flype: aFlype,
  idFieldRow: aIdFieldRow,
  keyboard: aKeyboard,
  lazyList: aLazyList,
  lead: aLead,
  leadItem: aLeadItem,
  lineCard: aLineCard,
  lineChart: aLineChart,
  list: aList,
  modal: aModal,
  nextCard: aNextCard,
  nextCell: aNextCell,
  orderCard: aOrderCard,
  otpFieldRow: aOtpFieldRow,
  panel: aPanel,
  password: aPassword,
  protocol: aProtocol,
  question: aQuestion,
  remarks: aRemarks,
  selectCard: aSelectCard,
  selectRow: aSelectRow,
  stage: aStage,
  stages: aStages,
  stepwise: aStepwise,
  stick: aStick,
  stub: aStub,
  tabButton: aTabButton,
  table: aTable,
  telFieldRow: aTelFieldRow,
  textFieldRow: aTextFieldRow,
  textRow: aTextRow,
  textareaRow: aTextareaRow,
  timeline: aTimeline,
  timepoint: aTimepoint,
  title: aTitle,
  toast: aToast,
  totalButton: aTotalButton,
  welfareCard: aWelfareCard,
} = Assemble;

const {
  addressField: bAddressField,
  button: bButton,
  checkbox: bCheckbox,
  emailField: bEmailField,
  highlight: bHighlight,
  icon: bIcon,
  idcardField: bIdcardField,
  image: bImage,
  numberField: bNumberField,
  radio: bRadio,

  rectangularButton: bRectButton,
  // radiusButton,
  select: bSelect,
  solidCheckbox: bSolidCheckbox,
  solidRadio: bSolidRadio,
  svg: bSvg,
  tabButton: bTabButton,
  telField: bTelField,
  text: bText,
  textButton: bTextButton,

  textField: bTextField,
  toggle: bToggle,
} = Basic;

const {
  footer: pFooter,
  main: pMain,
  modalup: pModelup,
} = Page;

const {
  cell: sCell,
  column: sColumn,
  flexColumn: sFlexColumn,
  multiline: sMultiline,
  singleCell: sSingleCell,
} = Structure;

const components = {
  // Assembles
  aAmountRow,
  aAnnotation,
  aButton,
  aCard,
  aCheckLine,
  aCheckLineGroup,
  aComment,
  aDock,
  aFixedRow,
  aFlype,
  aIdFieldRow,
  aKeyboard,
  aLazyList,
  aLead,
  aLeadItem,
  aLineCard,
  aLineChart,
  aList,
  aModal,
  aNextCard,
  aNextCell,
  aOrderCard,
  aOtpFieldRow,
  aPanel,
  aPassword,
  aProtocol,
  aQuestion,
  aRemarks,
  aSelectCard,
  aSelectRow,
  aStage,
  aStages,
  aStepwise,
  aStick,
  aStub,
  aTabButton,
  aTable,
  aTelFieldRow,
  aTextFieldRow,
  aTextRow,
  aTextareaRow,
  aTimeline,
  aTimepoint,
  aTitle,
  aToast,
  aTotalButton,
  aWelfareCard,
  
  // Basic Components
  bAddressField,
  bButton,
  bCheckbox,
  bEmailField,
  bHighlight,
  bIcon,
  bIdcardField,
  bImage,
  bNumberField,
  bRadio,
  bRectButton,
  bSelect,
  bSolidCheckbox,
  bSolidRadio,
  bSvg,
  bTabButton,
  bTelField,
  bText,
  bTextButton,
  bTextField,
  bToggle,

  // Page Components
  pFooter,
  pMain,
  pModelup,

  // Structure Components
  sCell,
  sColumn,
  sFlexColumn,
  sMultiline,
  sSingleCell,
}

function register(components, vue) {
  Object.keys(components).forEach(name => {
    const comp = components[name];
    comp.name = name; // 将组件的名称统一为带前缀的形式
    vue.component(name, comp);
  });
}

function install(Vue) {
	if (install.installed) return;
  install.installed = true;
  register(components, Vue);
}

export default {
  install
}
