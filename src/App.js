import { useEffect, useState, useRef, createContext } from "react";
import { getUsers } from "./api";

import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import UserSection from "./sections/UserSection";
import FormSection from "./sections/FormSection";

export const appContext = createContext();

function App() {
  const [users, setUsers] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const maxPage = useRef(null);

  const fetchUsers = (page) => {
    setIsLoading(true);
    getUsers(page)
      .then((res) => {
        setUsers([...users, ...res.users]);
        maxPage.current = res.total_pages;
        setCurPage(res.page);
      })
      .catch((error) => error.message)
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchUsers(curPage);
  }, []);

  return (
    <appContext.Provider value={{ users, fetchUsers }}>
      <Header />
      <HeroSection />
      <UserSection curPage={curPage} maxPage={maxPage} isLoading={isLoading} />
      <FormSection />
    </appContext.Provider>
  );
}

export default App;
