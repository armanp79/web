
import React, {useState, useEffect} from 'react'

const navLinks = [
  {navLinkId: 'Home', scrollToId: 'homeContainer'}, // etc.
]

const NavLink = ({ navLinkId, scrollToId, activeNavLinkId, setActiveNavLinkId }) => {
	const handleClick = () => {
		setActiveNavLinkId(navLinkId);
		document.getElementById(scrollToId).scrollIntoView({
			behavior: 'smooth', // gives an ease-in-out effect to our scroll
		});
	};
	
	return (
		<span 
		 	id={navLinkId} 
			className={activeNavLinkId === navLinkId ? 'activeClass' : ''} 
		 	onClick={handleClick}
		>
			{navLinkId}
		</span>
	);
};

const Nav = () => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	return (
	    <nav>
	      {navLinks.map(
		({navLinkId, scrollToId}) =>
		  <NavLink 
			navLinkId={navLinkId} 
			scrollToId={scrollToId} 
			activeNavLinkId={activeNavLinkId}
			setActiveNavLinkId={setActiveNavLinkId} 
		  />
	      )}
	    </nav>
	  )
};


// rootElementSelector is a CSS selector string
// that we'll use to assign the observer "viewport"
// if omitted or assigned a null value,
// root defaults to the browser viewport

const options = {
    root: document.querySelector(rootElementSelector),
    rootMargin: '0px',
    threshold: 1.0,
}

const observer = new IntersectionObserver(callback, options)







const useOnScreen = ref => {
	const [isOnScreen, setOnScreen] = useState(false);

	const observer = new IntersectionObserver(
		([entry]) => setOnScreen(entry.isIntersecting),
		{
			threshold: [0.25, 0.5, 0.75],
		}
	);

	useEffect(() => {
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	});

	return isOnScreen;
};






const NavContext = React.createContext();

const NavProvider = ({ children }) => {
	const [activeNavLinkId, setActiveNavLinkId] = useState('');

	const providerValue = {
		activeNavLinkId,
		setActiveNavLinkId,
	};

	return (
		<NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
	);
};







const useNav = navLinkId => {
	const ref = useRef(null);

	const { setActiveNavLinkId } = useContext(NavContext);

	const isOnScreen = useOnScreen(ref);

	useEffect(() => {
		if (isOnScreen) {
			setActiveNavLinkId(navLinkId);
		}
	}, [isOnScreen, setActiveNavLinkId, navLinkId]);

	return ref;
};