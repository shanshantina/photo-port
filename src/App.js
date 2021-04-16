import React, { useState } from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import ContactForm from "./components/Contact";



function App() {
  const [contactSelected, setContactSelected] = useState(false);
  const [categories] = useState([
    {
      name: "commercial",
      description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
      name: "landscape",
      description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  /* in main element is the same as 
   if(!contactSelected) {
  <>
    <Gallery currentCategory={currentCategory}></Gallery>
    <About></About>
  </> 
  } else {
    <ContactForm></ContactForm>
  } 
  which means if the contact seleced by user, shows contact form instead gallery and about */

  return (
    // JSX(JavaScript XML) that can represent HTML in JavaScript
    /* React.createElement('div", {}, [
       React.createElement('h1', {}, 'Ginger'),
       React.createElement('p', {}, 'breed: Brittany Spaniel'),
       ]) */
    <div>
      <Nav
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
        contactSelected = {contactSelected}
        setContactSelected = {setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          /* <></> is React fragments, a shorthand abbreviation for <React.Fragment></React.Fragment>. 
          allow multiple elements to be grouped together */
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
