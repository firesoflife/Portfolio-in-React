# Bryan Goertz Portolio Page Built with React

## Design and methodolgy

### The Site should have the following pages:

- Home / Header _(Nav item)_
- Specialties _(Nav item)_
- Projects _(Nav item)_
- Knowledge - link to separate "page"/layout
- Contact _(Nav item)_
- About - _(Nav item)_ link to separate "page"/layout
- Blog - _(Nav item)_ link to separate "page"/layout

## The site should have a main section that render when the page is loaded with the following

- <Navbar />
- <Header />
- <Specialties />
- [<Projects /> <Knowledge />]
- <Contact />
- <Footer />

## The above listed components should render on the following Routes:

### This is working correctly (except the home route which gets confused with the "/" route) - the layout is stored in a 'mainPage' variable in the layouts component.

/home
/specialties
/projects
/contact

---

## These components should render their own "pages"/layouts

### currently they route to a "coming soon" component named "Construction"

<About /> Route to=/about component={Construction}
<Blog /> Route to=/blog component={Construction}
<Knowledge /> Route to=/about component={Construction}

_These will be updated to their appropriate components when they've been completed_

### Issue 1: Links change url on click but do not navigate to location in layout

The links <NavLink> items update the url onClick and take on the `activeClassName="active"`

They do not navigate the layout to the correct page in the layout

### Issue 2: Scroll does not change url

example: loading page renders http://localhost:3000/ and {mainPage} renders. Scrolling down to Specialties should change the url to http://localhost:3000/specialties.

I had this working for a while using the following package package:
`import ScrollableSection from 'react-update-url-on-scroll/lib/ScrollableSection'`

it worked when all <section> tags were changed to <ScrollableSection>

### Issue 3: The navigation should utelize smooth scroll instead of jumping to the section

- I had this working with a separate package: `react-scroll`

The functionality allowed for a 'ScrollSpy' type behaviour (which can be implemented using react-router's NavLink tag), and url-updates on scroll

...But it broke my routes making rendering a separate component ( the {Construction} component) impossible.

## Solutions attmepted & some errors along the way:

1. The above mentioned packages: `react-scroll` & `'react-update-url-on-scroll`
2. The Scroll Restoration in the React Router docs provide some seemingly better solutions

- ScrollToTop

        import { useEffect } from "react";
        import { useLocation } from "react-router-dom";

        export default function ScrollToTop() {
          const { pathname } = useLocation();

          useEffect(() => {
            window.scrollTo(0, 0);
          }, [pathname]);

          return null;
        }

This compiled without errors but returned a blank page

- ScrollToTopOnMount -- seemingly built for tabbed interfaces like mine with "longLayouts"
  https://reactrouter.com/web/guides/scroll-restoration

        import { useEffect } from "react";

        function ScrollToTopOnMount() {
          useEffect(() => {
            window.scrollTo(0, 0);
          }, []);

          return null;
        }

        // Render this somewhere using:
        // <Route path="..." children={<LongContent />} />
        function LongContent() {
          return (
            <div>
              <ScrollToTopOnMount />

              <h1>Here is my long content page</h1>
              <p>...</p>
            </div>
          );
        }

This seemed like the ticket and compiled properly in my IDE but in the browser returned the error:

> Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.

> Check the render method of `Projects`.
