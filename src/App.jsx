import './App.css'
import { useForm } from './hooks/useForm';

function App() {

  const [formValues, handleInputChange] = useForm({
    blur: 10,
    spacing: 10,
    base: '#ffc600'
  });

  const { blur, spacing, base } = formValues;

  const handleChange = ( e ) => {
    const { name, value, dataset } = e.target;
    const suffix = dataset.sizing || '';
    document.documentElement.style.setProperty(`--${name}`,value + suffix )
    handleInputChange(e);
  }

  return (
    <div>
      <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

      <div className="controls">
        <label>Spacing:</label>
        <input id="spacing"
          type="range"
          name="spacing"
          min="10"
          max="200"
          value={spacing}
          data-sizing="px"
          onChange={handleChange}
        />

        <label>Blur:</label>
        <input id="blur"
          type="range"
          name="blur"
          min="0"
          max="25"
          value={ blur }
          data-sizing="px"
          onChange={handleChange}
        />

        <label>Base Color</label>
        <input id="base"
          type="color"
          name="base"
          value={ base }
          onChange={handleChange}
        />
      </div>

      <img src="https://source.unsplash.com/7bwQXzbF6KE/800x500" />
    </div>
  )
}

export default App
