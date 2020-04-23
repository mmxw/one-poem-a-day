import React from "react";
import Container from "react-bootstrap/Container";


// import Figure from 'react-bootstrap/Figure';

export default function Home() {
  return (
    // <Figure>
    //     <Figure.Image
    //       alt="tree"
    //       src="~/Desktop/PROJECTS/one-poem-a-day/src/images/tree.png" rounded
    //     />
    //     <Figure.Caption>
    //       Nulla vitae elit libero, a pharetra augue mollis interdum.
    //     </Figure.Caption>
    // </Figure>
    <Container fluid className="poem">

        <h1>Hope Is The Thing With Feathers</h1>
        <br/>
        <h4>Emily Dickinson</h4>
        <br/>
        <br/>
        <p>Hope is the thing with feathers</p>
        <p>That perches in the soul,</p>
        <p>And sings the tune without the words,</p>
        <p>And never stops at all,</p>
        <br />
        <p>And sweetest in the gale is heard;</p>
        <p>And sore must be the storm</p>
        <p>That could abash the little bird</p>
        <p>That kept so many warm.</p>
        <br />
        <p>I've heard it in the chillest land,</p>
        <p>And on the strangest sea;</p>
        <p>Yet, never, in extremity,</p>
        <p>It asked a crumb of me.</p>

    </Container>
  );
}
