import {useState, useEffect} from 'react';

const ControlPanel = ({getNewPhoto}) => {
  const [allBreads, setAllBreads] = useState({});
  const [select, setSelect] = useState('random');
  const [range, setRange] = useState(1);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(resp => setAllBreads(resp.message));
    getNewPhoto(select, range);
  }, []);

  return (
    <div className='control-panel'>
      <select onChange={ev => setSelect(ev.target.value)}>
        <option value="random">Random</option>
        {
          Object.keys(allBreads).map(bread => allBreads[bread].length === 0 ? <option value={bread}>{bread}</option> : Object.keys(allBreads[bread]).map(br => <option value={bread + ' ' + allBreads[bread][br]}>{bread} {allBreads[bread][br]}</option>))
        }
      </select>
      <input type="range" min='1' max='10' value={range} onChange={(ev) => setRange(ev.target.value)} /> 
      <div style={{'text-align': 'center'}}>{range}</div>
      <button onClick={ () => getNewPhoto(select, range) }>Get photos</button>
    </div>
  );
};

export default ControlPanel;