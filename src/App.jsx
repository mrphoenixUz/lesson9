import AlertF from "./components/Alert"
import CollapseF from "./components/Collapse"
import Main from "./components/Main"
import MessageF from "./components/Message"
import Navbar from "./components/Navbar"
import PopoverF from "./components/Popover"
import ResultF from "./components/Result"
import TabsF from "./components/Tab"

function App() {
  return (
    <>
      <Navbar /> {/* Navbar Section */}
      <Main />
      <CollapseF />
      <AlertF />
      <TabsF />
      <MessageF />
      <ResultF />
    </>
  )
}

export default App
