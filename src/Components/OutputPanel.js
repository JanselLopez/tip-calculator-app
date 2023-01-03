export const OutputPanel = props => {
  function clear () {
    const inputs = document.getElementsByTagName ('input');
    for (let i = 0; i < inputs.length; i++)
      inputs[i].value = '';
    setBill (0);
    setNumberOfPeople (0);
    setPercent (0);
    clearSelected (selected);
    setSelected (undefined);
  }

  const [setBill, setNumberOfPeople, setPercent] = props.setters;
  const [selected, setSelected] = props.selected;
  const {bill, numberOfPeople, percent} = props;
  const prices = getAmounts (bill, numberOfPeople, percent);
  console.log ('%c Price', 'color:red;font-size:20px;');
  console.table (prices);
  return (
    <div className={props.className} id={'output-panel'}>
      <Data title={'Tip Amount'} amount={prices.tipAmount} />
      <Data title={'Total'} amount={prices.total} />
      <button
        id="btn-reset"
        style={{
          pointerEvents: prices.tipAmount ? 'all' : 'none',
          opacity: prices.tipAmount ? 1 : 0.25,
        }}
        onClick={() => clear ()}
      >
        RESET
      </button>
    </div>
  );
};

const Data = props => {
  const value = props.amount == undefined ? '0.00' : props.amount.toFixed (2);
  return (
    <div className="out-field">
      <div>
        <h3>{props.title}</h3>
        <p>/ person</p>
      </div>
      <h4>${value}</h4>
    </div>
  );
};

function getAmounts (bill, numberOfPeople, percent) {
  if (bill && numberOfPeople && percent) {
    console.warn ({bill, numberOfPeople, percent});
    const tipAmount = bill * (percent / 100) / numberOfPeople;
    const total = bill / numberOfPeople + tipAmount;

    return {tipAmount, total};
  }
  return {undefined, undefined};
}
function clearSelected (selected) {
  if (selected != undefined) {
    selected.style.color = 'hsl(0, 0%, 100%)';
    selected.style.backgroundColor = 'hsl(183, 100%, 15%)';
  }
}
