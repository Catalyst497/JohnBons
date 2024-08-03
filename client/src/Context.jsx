import { useState, useEffect, useRef, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

//create a context, with createContext api
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();

  // this states will be shared with all components
  const [keyword, setKeyword] = useState(null);
  const [response, setResponse] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [searchResults, setSearchResults] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchClose, setSearchClose] = useState(true);
  const [searchActive, setSearchActive] = useState(false);
  const [beds, setBeds] = useState("1");
  const searchRef = useRef();
  const searchCompleted = useRef(false);

  useEffect(() => {
    if (!searchOpen) {
      if (!searchClose) {
        searchRef.current && searchRef.current.classList.add("opacity-0");
      }
      setTimeout(() => setSearchClose(true), 500);
    } else {
      setSearchClose(false);
    }
  }, [searchOpen]);

  // Change the search completed ref to true when the page load with some content in the LocalStorage.
  useEffect(() => {
	const searchResults = localStorage.getItem("searchResults")
	const checkJSON = () => {
		try {
			JSON.parse(searchResults)
			return true
		} catch (e) {
			return false
		}
	}
    if (checkJSON()) {
      if (JSON.parse(searchResults)?.length)
        searchCompleted.current = true;
    }
  }, []);

  function windowResize() {
    window.innerWidth > 768 ? setIsDesktop(true) : setIsDesktop(false);
  }
  useEffect(() => {
    window.addEventListener("resize", () => windowResize());

    return window.removeEventListener("resize", () => windowResize());
  }, []);

  const getProperties = async () => {
    setSearchActive(true);
    setSearchResults([]);
    searchCompleted.current = true;
    // navigate("/searchresults");
    setSearchOpen(false);
    setSearchActive(false);
    // localStorage.setItem(
    //   "searchResults",
    //   JSON.stringify(response.data?.data)
    // );
    // await axios
    //   .post("http://localhost:3000/message", {
    //     keyword: keyword,
    //     beds: beds,
    //   })
    //   .then((response) => {
       
    //   })
    //   .catch((err) => {
    //     setSearchOpen(false);
    //     console.log(err);
    //     alert(
    //       "There was an error connecting to the server. Please check your connection."
    //     );
    //   });
  };
  return (
    // This is the provider providing states
    <AppContext.Provider
      value={{
        isDesktop,
        setIsDesktop,
        keyword,
        setKeyword,
        setResponse,
        searchResults,
        setSearchResults,
        searchOpen,
        setSearchOpen,
        searchRef,
        searchCompleted,
        searchClose,
        setSearchClose,
        searchActive,
        setSearchActive,
        beds,
        setBeds,
        gsap,

        // Functions
        getProperties,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
