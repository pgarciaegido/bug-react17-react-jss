import { createUseStyles } from "react-jss";


function App() {
  const classes = createUseStyles({
    paragraph: {
      color: "red"
    }
  })();

  return (
      <main>
        <p className={classes.paragraph}>Red</p>
      </main>
  );
}

export default App;
