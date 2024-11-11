import './App.css'
import { FilterSidebar } from './components/FilterSidebar/FilterSidebar'
import { IndexHeader } from './components/header/indexHeader'
import { SliderContent } from './components/sliderMain/SliderContent'
import './global.css'

function App() {
  return (
    <>
      <IndexHeader/>
      <SliderContent/>
      <FilterSidebar/>
    </>
  )
}

export default App
