export const InputPanel = props => {
  const percentages = [5, 10, 15, 25, 50];

  const [setBill, setNumberOfPeople, setPercent] = props.setters;
  const [selected, setSelected] = props.selected;

  return (
    <div className={props.className} id={'input-panel'}>
      <div className="input">
        <h1>Bill</h1>
        <input
          placeholder="0"
          type={'number'}
          onChange={event => setBill (event.target.value)}
        />
      </div>
      <h2>Select Tip %</h2>

      <div id="percent-container">
        {percentages.map (value => (
          <button
            className="percentages"
            key={value}
            onClick={btn => {
              clearSelected (selected);
              btn.target.style.backgroundColor = 'hsl(172, 67%, 45%)';
              btn.target.style.color = 'hsl(183, 100%, 15%)';
              setSelected (btn.target);
              setPercent (value);
            }}
          >
            {value}%
          </button>
        ))}
        <div>
          <input
            placeholder="Custom"
            type={'number'}
            id={'custom'}
            onChange={event => {
              clearSelected (selected);
              setSelected (undefined);
              setPercent (event.target.value);
            }}
          />
        </div>
      </div>
      <div className="input">
        <div id="nopText">
          <h2>Number of People</h2>
          <h2 id={'error'}>Can't be zero</h2>
        </div>
        <div>
          <input
            placeholder="0"
            type={'number'}
            onChange={event => {
              const input = event.target;
              const value = input.value;
              const errorMessage = document.getElementById ('error');
              if (value == 0) {
                errorMessage.style.display = 'initial';
                input.style.borderColor = 'hsl(3, 99%, 65%)';
              } else {
                input.style.borderColor = 'transparent';
                errorMessage.style.display = 'none';
                setNumberOfPeople (value);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

function clearSelected (selected) {
  if (selected != undefined) {
    selected.style.color = 'hsl(0, 0%, 100%)';
    selected.style.backgroundColor = 'hsl(183, 100%, 15%)';
  }
}
