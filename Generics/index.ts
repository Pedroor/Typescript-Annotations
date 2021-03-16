// Generics: São funcionalidades que permitem a passagem de tipos

// State - S
// Type - T
// Key - K
// Value - V
// Element - E

function print<T>(param: T) {
  console.log(param);
}

print<string>("Ola");

function useState<S>(initialState?: S) {
  let state = initialState;

  function setState(newState: S) {
    state = newState;
    return state;
  }

  return { state, setState };
}

const state = useState<number>(10);
