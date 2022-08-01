import Feedback from "./feedback/feedback";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Feedback initialGodd={0} initialNeutral={0} initialBad={0} initialTotal={0} initialPositive={0}/>
    </div>
  );
};
