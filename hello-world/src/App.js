import Greet from './components/Greet';
// can also import with different names
// import Mycomponent from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import './App.css'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import RenderProps from './components/RenderProps';
import HoverCounterTwo from './components/HoverCounterTwo';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import State from './components/State';
import UseState2 from './components/UseState2';
import UseReducerHook from './components/UseReducerHook';
import UseEffectHook from './components/UseEffectHook';
import UseRefHook from './components/UseRefHook';
import UseLayoutHook from './components/UseLayoutHook';
import UseContextHook from './components/UseContextHook';

function App() {
  const name = 'Mayur'

  return (
    <div className="App">
      {/* <h1>Hello from React</h1>
      <h2>Hello {name}</h2> */}
      {/* <Greet name="Mayur" heroName="Batman">
        <p>This is children props</p>
      </Greet> */}
      {/* <Greet name="Mansi" heroName="Wonder Woman">
        <button>Action</button>
      </Greet> */}
      {/* <Greet name="Surya" heroName="Surya Don"  /> */}
      {/* <Welcome name="Mayur" heroName="Batman" /> */}
      {/* <Hello /> */}
      {/* State */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true} /> */}
      {/* <Inline /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <RefsDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ClickCounter name="Mayur"/> */}
      {/* <HoverCounter /> */}
      {/* <RenderProps render={(count, incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} /> */}
      {/* <PostList /> */}
      {/* <PostForm /> */}
      {/* <State /> */}
      {/* <UseState2 /> */}
      {/* <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseLayoutHook /> */}
      <UseContextHook />
    </div>
  );
}

export default App;
